
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');

require("dotenv/config");

const includeAllMiddle = (app) => {
    app.use(express.json());
    app.use(express.static("public"));
    app.use(express.static(__dirname));
    app.use(express.urlencoded({extended: true}));
    app.use(cookieParser());
    app.use(cors());
    app.use(helmet());
    app.use(logger('dev'));
};

module.exports = {
  includeAllMiddle,
};




