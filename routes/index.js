"use strict";
const express = require("express");
const router = express.Router();
const home = require("/homepage");
const board = require("/boardpage");
const login = require("/login");
const signup = require("/signUp");
const profile = require("/profile");
const research = require("/research");


window.route=route;
router.get("/", function (req, res) {
    // const { user }= req.params;
    // console.log(user);
    res.send("wowwowooww");
  });
  
router.get("/homepage", function (req, res) {
  res.render(home);
});

router.get("/boarPage", function (req, res) {
  res.render(board);
});

router.get("/research", function (req, res) {
    res.render(research);
  });

router.get("/profile", function (req, res) {
    res.render(profile);
});
router.get("/login", function (req, res) {
    res.render(login);
});
router.get("/signUp", function (req, res) {
    res.render(signup);
});
router.get("/homepage/", function (req, res) {
    res.render(home);
});
router.get('/homepage/:userid/',(req,res)=>{

    const { userid }= req.params;
    console.log(userid);
})
router.get('/contentPage/:userid/:id',(req,res)=>{
    const { userid }= req.params;
    const { id }= req.params;
})





module.exports=router;

