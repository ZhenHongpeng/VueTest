var express = require('express');
var app = express();
var router = require('./router');
var bodyParser = require('body-parser');

// 解决跨域
// var allowCrossDomain = function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     next();
// };
// app.use(allowCrossDomain);

app.all('*', function(req, res, next) {
    if( req.headers.origin == 'http://localhost:3000' || req.headers.origin == 'http://192.168.1.103:3000' ){
        res.header("Access-Control-Allow-Origin", req.headers.origin);
        res.header('Access-Control-Allow-Methods', 'POST, GET');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
    }
    next();
});


//配置模板引擎和body-parser 一定要在app.use(router)挂载路由之前
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//把路由容器挂载到app服务中
app.use(router);

app.listen(8080, function () {
    console.log('Running at port 8080........');
});

