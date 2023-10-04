var express= require('express')

var router=express.Router()

router.get('/dashboard', function(req, res){
    res.render('backend/home')
})

router.get('/product_admin', function(req, res){
    res.render('backend/product_admin')
})

router.get('/category', function(req, res){
    res.render('backend/category')
})

router.get('/orders', function(req, res){
    res.render('backend/orders')
})

router.get('/users', function(req, res){
    res.render('backend/users')
})
module.exports=router;