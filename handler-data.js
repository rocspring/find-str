var fs = require('file-system');
var saveData = require('./save-data.js');

// 统计每个模块的总调用数
function statisticAllNumOfModule(strObj) {
    if(!strObj) return;

    for (var key in strObj) {
        if (strObj.hasOwnProperty(key)) {
            var temp = strObj[key];
            statisOneModuleNum(temp);
            console.log( temp.name + '模块调用的次数是：' + temp.allNum);
        }
    }

    // 统计一个模块的总调用数
    function statisOneModuleNum(obj) {
        if (obj.allNum) {
            return;
        }
        var allNum = 0,
            len = obj.numObjArr.length,
            i, temp;

        for(i = 0; i < len; i++){
            temp = obj.numObjArr[i];
            allNum = allNum + temp.num;
            console.log('------' + temp.str + '调用的次数是：' + temp.num);
        }

        obj.allNum = allNum;
    }
}

function handlerData() {
    var strObj = null,
        path = './data/data.json';

    if(fs.existsSync(path)){
        strObj = fs.readFileSync(path, 'utf8');
        strObj = JSON.parse(strObj);
    }
    statisticAllNumOfModule(strObj);
    saveData.saveData(path, JSON.stringify(strObj));
}

module.exports = handlerData;
