const express =require("express");
const bodyParser=require("body-parser");

   let cart=[]
   let products=[
     {
       id:"1",
       name:"product1"
     },
     {
       id:"2",
       name:"product2"
     },
     {
       id:"3",
       name:"product3"
     },
     {
       id:"4",
       name:"product4"
     }

   ]
const app = express();
app.listen(3300,()=>{
  console.log("server running...........");
})

app.get("/products",(req,res)=>{
  res.send(products)
})


app.use(bodyParser.json())
app.post("/products",(req,res)=>{
  products.push(req.body)
  res.send(products)
});

app.get("/products/:id",(req,res)=>{
res.json(products.filter(el => el.id === req.params.id))
})

app.get("/products/cart",(req,res)=>{
  res.send(cart)
})

app.post("/products/cart/:id",(req,res)=>{
cart.push(products.filter(el => el.id === req.params.id))
res.send(cart)

})
