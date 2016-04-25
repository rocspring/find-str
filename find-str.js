var path = require("path");
var fs = require("fs");

function findString(filePath, lookingForString, callBack) {
    recursiveReadFile(filePath, lookingForString, callBack);
}

function recursiveReadFile(fileName, lookingForString, callBack){
 if(!fs.existsSync(fileName)) return;
 if(isFile(fileName)){
  check(fileName, lookingForString, callBack);
 }
 if(isDirectory(fileName)){
  var files = fs.readdirSync(fileName);
  files.forEach(function(val,key){
  var temp = path.join(fileName,val);
            if(isDirectory(temp)) recursiveReadFile(temp, lookingForString, callBack);
            if (isFile(temp)) check(temp, lookingForString, callBack);
  })
 }
}

function check(fileName, lookingForString, callBack){
 var data = readFile(fileName);
 var exc = new RegExp(lookingForString, 'g');
    // if(exc.test(data)){
    //      callBack && callBack();
    // }
var regResult = data.match(exc);
    if(!!regResult){
        var num = regResult.length;
        callBack && callBack(num);
    }
}

function isDirectory(fileName){
    if(fs.existsSync(fileName)) return fs.statSync(fileName).isDirectory();
}

function isFile(fileName){
  if(fs.existsSync(fileName)) return fs.statSync(fileName).isFile();
}

function readFile(fileName){
 if(fs.existsSync(fileName)) return fs.readFileSync(fileName,"utf-8");
}

module.exports = {
    findString: findString
};
