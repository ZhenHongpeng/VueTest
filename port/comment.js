var fs = require('fs');
var path = require('path')
var dbpath = path.join(__dirname,'./data/comments.json');

exports.findById = function (id, callback) {
    fs.readFile(dbpath, 'utf-8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var comments = JSON.parse(data).messages;

        var ret = comments.find(function (item) {
            return item.id === parseInt(id);
        });
        callback(null, ret)
    })
};

exports.find = function (callback) {
    fs.readFile(dbpath, 'utf-8', function (err, data) {
        if (err) {
            callback(err)
        }
        callback(null, JSON.parse(data).messages)
    })
};


exports.save = function (comment, callback) {
    fs.readFile(dbpath, 'utf-8', function (err, data) {
        if (err) {
            callback(err)
        }
        var comments = JSON.parse(data).messages;

        comment.user_name = '匿名用户';
        comment.add_time = new Date();

        comments.push(comment);

        var fileData = JSON.stringify({
            messages: comments
        });

        fs.writeFile(dbpath, fileData, function (err1) {
            if (err1) {
                return callback(err1)
            }
            callback(null)
        })

    })
};