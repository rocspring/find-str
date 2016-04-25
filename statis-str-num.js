var findStr = require('./find-str.js');

function statisStrInDirNum(filePath, lookingForString) {
        var allNum = 0;
        var rootPath = '../../workspace/trunk/naui/';

        var callBack = function(num) {
                allNum = allNum + num;
        };

        findStr.findString(rootPath + filePath, lookingForString, callBack);

        console.log('The num of "' + lookingForString + '" in ' + filePath + ' is ' + allNum );

        return {
            path: rootPath + filePath,
            str: lookingForString,
            num: allNum
        };
}


module.exports = statisStrInDirNum;
