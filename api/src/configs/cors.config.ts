// Cross-origin resource sharing
import * as cors from 'cors';
import express from 'express'

//get router
var router = express.Router();

// Options for cors midddleware
export const options: cors.CorsOptions = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin:"http://localhost:3000",
    preflightContinue: false,
};
