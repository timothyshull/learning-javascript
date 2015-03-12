#!/usr/bin/env node --harmony
/***
 * Excerpted from "Node.js the Right Way",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/jwnode for more book information.
***/
'use strict';
const
express = require('express'), app = express(), logger = require('express-logger');
// server.use(logger({path: "/path/to/logfile.txt"}));;
app.use(logger({path: "logfile.txt"}));
app.get('/api/:name', function(req, res) {
  res.status(200).json({ "hello": req.params.name });
});
app.listen(3000, function(){
  console.log("ready captain.");
});

