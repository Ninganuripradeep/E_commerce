const port=8000;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const multer=require("multer")
const path=require("path")
const cors=require("cors");
const exp = require("constants");
const axios = require("axios");
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 
});



app.get("/",(req,res)=>{
    res.send("express app is runnig");

})
const storage=multer.diskStorage({
    destination:"./upload/images",
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)

    }
})
const upload=multer({storage:storage})
app.use('/images',express.static('upload/images'))
app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})
const Product=mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    animeType: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    available:{
        type:Boolean,
        default:true,
    }
})
//for background colour
const BackgroundColorSchema=mongoose.Schema({
    _id:{type:String,default:"uniqueIndentifier"},
    color:{
        type:String
    }
})
const BackgroundColor=mongoose.model("BackgroundColor",BackgroundColorSchema);

app.post('/addbackgroundcolor',async(req,res)=>{
    try{
        const existingBackgroundColor = await BackgroundColor.findOne({_id:"uniqueIdentifier"})

 if(existingBackgroundColor){
    existingBackgroundColor.color=req.body.color;
    await existingBackgroundColor.save();
 }else{
    const newBackgroundColor=new BackgroundColor({
        _id:"uniqueIdentifier",
        color:req.body.color,
    })
    await newBackgroundColor.save();
 }
 res.status(200).json({message:"background color added"});
}catch(error){
    console.log(error);
    res.status(500).json({error:"errror bg color"})
}
});
app.get("/getbackgroundcolor",async(req,res)=>{
    try{
        const backgroundColor=await BackgroundColor.findOne({ _id: "uniqueIdentifier" });
        res.status(200).json({color:backgroundColor ? backgroundColor.color:""});


    }catch(error){
        console.log(error);
        res.status(500).json(error,"error")
    }
})
app.post('/addproduct',async(req,res)=>{
    // let products=await Product.find({});//acces the products using products
  
    const product=new Product({
        id:req.body.id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
        animeType: req.body.animeType,
        model: req.body.model,
        sellType: req.body.sellType,

    });
    console.log(product)
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,
    }
    )
})
//remove product
app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({
        success:true,
        name:req.body.name,
    })
})
//for display
app.get("/allproducts",async(req,res)=>{
    let products=await Product.find({});
    console.log("all product fetched");
    res.send(products);
})


app.put('/updateproduct/:productId', upload.single('newImage'), async (req, res) => {
    try {
        const { productId } = req.params;
        const updateProduct = req.body;

      
        if (req.file) {
            updateProduct.image = `http://localhost:${port}/images/${req.file.filename}`;
        }

      
        const updatedFields = {
            name: updateProduct.name,
            image: updateProduct.image,
            category: updateProduct.category,
            new_price: updateProduct.new_price,
            old_price: updateProduct.old_price,
            animeType: updateProduct.animeType,
            model: updateProduct.model,
            sellType: updateProduct.sellType,
        };

     
        await Product.updateOne({ id: productId }, { $set: updatedFields });

        res.json({ success: true, message: 'Product updated successfully' });
    } catch (error) {
        console.error('Error updating product details', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
//new colection data
app.get('/newcollections',async(req,res)=>{
    let products=await Product.find({});
    let newcollection=products.slice(1).slice(-8)//we canget recently added 8 products
    console.log("Newcollection fetched")
    res.send(newcollection);
})
//popular
app.get('/popularinwomen',async(req,res)=>{
let products=await Product.find({category:"men"});
let popular_in_women=products.slice(0,4);
console.log("popular in women is fetched");
res.send(popular_in_women);
})
app.listen(port,()=>{
    console.log(`server is running on port${port}`);
})