var http = require('http')
var path = require('path')
var server = http.createServer(function(req, res){
    console.log('hi')
    // res.setHeader("Content-Type", "text/plain; charset=gbk")
    // res.setHeader("Content-Type", "text/html; charset=gbk")
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.writeHead(404,"ok")
    // res.write('hello world')
    res.write('曹国君')
    res.write('<h1> hello world </h1>')
    obj = path.join('/foo', 'bar', 'baz/asdf', 'quux','..') //..是返回上一级目录，抵消了quux
    console.log(obj)
    res.end()
})

server.listen(9000)