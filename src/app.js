const express = require("express");
const app = express();
port = process.env.PORT || 3000;
const path = require("path");
const hbs = require('hbs');
const { partials } = require("handlebars");


const staticPath = (path.join(__dirname,"../public"));
const partials_path = path.join(__dirname,"../hbspages/partials");
const views_path = path.join(__dirname,"../hbspages/views");

app.set('view engine','hbs');
app.use(express.static(staticPath));
app.set('views',views_path);
hbs.registerPartials(partials_path)

// console.log(path.join(__dirname,"../hbspages/views"));
// routing
app.get("/",(req,res)=>{
    res.render('index');
});

app.get("/about",(req,res)=>{
    res.render('about');
});
app.get("/weather",(req,res)=>{
    res.render('weather');
});
app.get("/*",(req,res)=>{
    res.render('404',{
        errorMsg:'Opps! Page Not Found '
    });
});

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
});