"use strict";

// 모듈
const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config( {path: '.env'} );

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home);  // use -> 미들 에어를 등록하주는 메서드

module.exports = app;