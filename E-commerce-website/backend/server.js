import express from 'express';
import products from './data/products.js';
// import dotenv from require('dotnev')
const app = express()
// dotenv config
// dotenv.config();

app.get('/',(req,res) => {
    res.send('<h1>welcome to node Server</h1>')
})

app.get('/products', (req,res) =>{
    res.json(products);
});

// app.get("/products/:id", (req, res) =>{
//     const product = products.find((p) => p._id === req.params.id);
//     res.json(product);
// });
//  const PORT = 8080;
app.listen(8080, () => {console.log("server is running");

});