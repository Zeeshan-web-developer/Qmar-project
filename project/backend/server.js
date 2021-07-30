const express=require("express")
const Product=require("./data/products")
const app=express();
app.get("/",(req,res)=>{
    res.send('hello from server side')
});
app.get("/products",(req,res)=>{
    res.json(Product)
})
app.get('/products/:id',(req,res)=>{
const product=Product.find((p)=>p._id===req.params.id)
res.json(product);
})
app.listen(8080,()=>{
    console.log('server is listening on port 8080')
})