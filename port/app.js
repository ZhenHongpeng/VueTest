var express = require('express');
var app = express();
// 解决跨域
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
app.use(allowCrossDomain);


app.get('/carousel',function (req,res) {
    // console.log('接收到请求');
    res.status(200).json({
        status:0,
        message:[
            {img:"http://imgs.aixifan.com/live/1489911032446/1489911032446.png"},
            {img:"http://imgs.aixifan.com/live/1489910944120/1489910944120.png"},
            {img:"http://imgs.aixifan.com/live/1489911027633/1489911027633.png"}
        ]
    })
});



app.listen(8080,function () {
    console.log('Running at port 8080........');
});

