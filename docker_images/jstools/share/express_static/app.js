var express = require('express');
var app = express();
app.use(express.static(process.env.NODE_STATIC_WWW));
app.listen(process.env.NODE_STATIC_PORT || 3000);
