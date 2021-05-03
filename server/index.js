const PORT = 4555;

const express = require('express');
const fs = require('fs');

const app = express();
const path = require('path');

const history = require('connect-history-api-fallback');

app.use(express.json());

const linkToCart = path.join(__dirname, '/db/cart.json');
const linkToCatalog = path.join(__dirname, '/db/catalog.json');

app.get('/api/catalog', (req, res) => {
  fs.readFile(linkToCatalog, 'utf-8', (err, data) => {
    if (err) {
      return res.json({ data: null, error: 'not read file' });
    }
    res.json({ data: JSON.parse(data) });
  });
});

app.get('/api/cart', (req, res) => {
  fs.readFile(linkToCart, 'utf-8', (err, data) => {
    if (err) {
      return res.json({ data: null, error: 'not read file' });
    }
    res.json({ data: JSON.parse(data) });
  });
});

app.post('/api/cart', (req, res) => {
  console.log(req.body);

  fs.readFile(linkToCart, 'utf-8', (err, data) => {
    if (err) {
      return res.json({ data: null, error: 'not read file' });
    }
    const cart = JSON.parse(data);
    cart.push(req.body);
    // eslint-disable-next-line no-shadow
    fs.writeFile(linkToCart, JSON.stringify(cart), (err) => {
      if (err) {
        return res.json({ result: false });
      }
      res.json({ result: true });
    });
  });
});

app.put('/api/cart/inc/:id', (req, res) => {
  fs.readFile(linkToCart, 'utf-8', (err, data) => {
    if (err) {
      return res.json({ data: null, error: 'not read file' });
    }
    const cart = JSON.parse(data);
    const good = cart.find(({ id_product }) => +id_product === +req.params.id);
    good.quantity += 1;
    // eslint-disable-next-line no-shadow
    fs.writeFile(linkToCart, JSON.stringify(cart), (err) => {
      if (err) {
        return res.json({ result: false });
      }
      res.json({ result: true });
    });
  });
});

app.delete('/api/cart/del/:id', (req, res) => {
  fs.readFile(linkToCart, 'utf-8', (err, data) => {
    if (err) {
      return res.json({ data: null, error: 'not read file' });
    }
    const cart = JSON.parse(data);
    const good = cart.find(({ id_product }) => +id_product === +req.params.id);
    // eslint-disable-next-line no-undef
    const i = cart.indexOf(good);
    if (i > -1) {
      cart.splice(i, 1);
    }
    // eslint-disable-next-line no-shadow
    fs.writeFile(linkToCart, JSON.stringify(cart), (err) => {
      if (err) {
        return res.json({ result: false });
      }
      res.json({ result: true });
    });
  });
});

app.use(history());

app.use('/', express.static('./dist'));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
