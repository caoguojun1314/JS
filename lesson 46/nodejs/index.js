const fs = require ('fs')
fs.readFile("../file.txt", 'utf8', function(err, data){ //注意文件路径有没有写对
    if(err){
        console.log(err)
    }else{
        console.log(data)
        var dataafter = data.replace(/\d/gm, '') //使用const声明，有了块级作用域？
        console.log(dataafter)
    }
fs.writeFile('fileAfter.txt', dataafter, (err) => {
    if (err) throw err;
        console.log('The file has been saved!');
  });
})