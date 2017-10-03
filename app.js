const fs=require('fs');
let data=fs.readFile('./posts/post_one.txt','utf8',function (err, data){
if (err) {
    console.log(err);
}
let template=`
<html>
<body>
<div>${data}</div>
<div><a href="index_f.html"></a></div>
</body>
</html>`
fs.writeFile('templates/post_h.html',template,'utf8', function(err){
if (err)
{console.log(err);
}
})})

let data1=fs.readFile('./posts/post_two.txt','utf8', function(err, data1){
if (err) {
    console.log(err);
}
let template=`
<html>
<body>
<div>${data1}</div>
<div><a href="index_f.html"></a></div>
</body>
</html>`

fs.writeFile('templates/post_f.html',template,'utf8',function(err){
if (err)
{
    console.log(err);
}
})})

let data2=fs.readFile('./posts/post_three.txt','utf8',function(err, data2){
if (err)
{
    console.log(err);
}
let template =`
<html>
<body>
<div>${data2}</div>
<div><a href="index_f.html"></a></div>
</body>
</html>`
fs.writeFile('templates/index_h.html',template, 'utf8',function(err){
if (err){
console.log(err);
}
})})
let template=`
<html>
<body>
<div>
<ol><li><a href="../templates/post_f.html">POST 1</a></li>
<li><a href="../templates/index_h.html">POST 2</a></li>
<li><a href="../templates/post_h.html">POST 3</a></li>
</ol>
</div>
</body>
</html>`
fs.writeFile('build/index_f.html', template, 'utf8', function(err){
if (err){
    console.log(err);
}
})