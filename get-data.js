var statisStrInDirNum = require('./statis-str-num.js');
var saveData = require('./save-data.js');

// statisStrInDirNum('deal', 'BNJS.');

var pathArr = ['cards', 'culling', 'deal', 'goods', 'hotpot', 'merchants', 'order', 'order-b', 'pay', 'promotions', 'reserve', 'snack', 't10sc', 'template', 'topbrand'];

var strObj = {
    "http": {
        name:'http',
        strArr: ['BNJS.http.get', 'BNJS.http.post', 'BNJS.http.sign', 'BNJS.http.getNA', 'BNJS.http.postNA', 'BNJS.http.getCatgData'],
        numObjArr:[]
    },
    "location": {
        name:'location',
        strArr: ['BNJS.location.watchLocation', 'BNJS.location.getLocation', 'BNJS.location.requestRealTimeLocation', 'BNJS.location.getCLLocation',
        'BNJS.location.cityCode', 'BNJS.location.cityName', 'BNJS.location.shortCityName', 'BNJS.location.cityUrl', 'BNJS.location.latitude',
        'BNJS.location.longitude','BNJS.location.address', 'BNJS.location.districtId', 'BNJS.location.districtName', 'BNJS.location.hasLocation',
        'BNJS.location.selectCityCode','BNJS.location.selectCityName', 'BNJS.location.selectShortCityName', 'BNJS.location.selectCityUrl'],
        numObjArr:[]
    },
    "device": {
        name:'device',
        strArr: ['BNJS.device.setScreenRotate', 'BNJS.device.call', 'BNJS.device.getTelBook', 'BNJS.device.name',
    'BNJS.device.platform', 'BNJS.device.os', 'BNJS.device.screenWidth', 'BNJS.device.screenHeight'],
        numObjArr:[]
    },
    "evn": {
        name:'evn',
        strArr: ['BNJS.env.network', 'BNJS.env.getConfig', 'BNJS.env.acCode', 'BNJS.env.getCompConfig', 'BNJS.env.cuid', 'BNJS.env.appName',
        'BNJS.env.appVersion', 'BNJS.env.appChannel', 'BNJS.env.sidList', 'BNJS.env.uuid', 'BNJS.env.packageName', 'BNJS.env.compVersion', 'BNJS.env.compId',
        'BNJS.env.compPage'],
        numObjArr:[]
    },
    "account": {
        name:'account',
        strArr: ['BNJS.account.login', 'BNJS.account.getMobile', 'BNJS.account.getSecretAccount', 'BNJS.account.getCommonSecretAccount',
        'BNJS.account.getDpassWithMobile', 'BNJS.account.refreshCaptchaImage', 'BNJS.account.loginWithMobile', 'BNJS.account.isLogin',
        'BNJS.account.uid', 'BNJS.account.uName', 'BNJS.account.displayName', 'BNJS.account.bduss'],
        numObjArr:[]
    },
    "page": {
        name:'page',
        strArr: ['BNJS.page.start', 'BNJS.page.back', 'BNJS.page.setPageId', 'BNJS.page.getData', 'BNJS.page.startPay', 'BNJS.page.registerReceiver',
        'BNJS.page.unRegisterReceiver', 'BNJS.page.sendBroadcast', 'BNJS.page.startBind', 'BNJS.page.onBtnBackClick', 'BNJS.page.orderConfirm',
        'BNJS.page.reShow', 'BNJS.page.enableBounce', 'BNJS.page.onCityChange', 'BNJS.page.onMessage', 'BNJS.page.postMessage', 'BNJS.page.startPageforResult',
        'BNJS.page.getAlbum', 'BNJS.page.leave', 'BNJS.page.startCreditPay'],
        numObjArr:[]
    },
    "ui": {
        name:'ui',
        strArr: ['BNJS.ui.toast.show', 'BNJS.ui.dialog.show', 'BNJS.ui.dialog.showLoading', 'BNJS.ui.dialog.hideLoading', 'BNJS.ui.title.setTitle',
        'BNJS.ui.title.addActionButton', 'BNJS.ui.title.addShopCartButton', 'BNJS.ui.title.addBubbleIcon', 'BNJS.ui.title.addT10NoticeButton',
        'BNJS.ui.title.setClickableTitle', 'BNJS.ui.title.removeBtnAll', 'BNJS.ui.title.removeBtnByTag', 'BNJS.ui.title.addTagList',
        'BNJS.ui.share', 'BNJS.ui.showLoadingPage', 'BNJS.ui.hideLoadingPage', 'BNJS.ui.showErrorPage', 'BNJS.ui.hideErrorPage',
        'BNJS.ui.nativeInterfere', 'BNJS.ui.closePullAction', 'BNJS.ui.hasBanner', 'BNJS.ui.copyText', 'BNJS.ui.toggleBtnBack',
        'BNJS.ui.actionSheet.show'],
        numObjArr:[]
    },
    "hardware": {
        name:'hardware',
        strArr: ['BNJS.hardware.scanQRCode', 'BNJS.hardware.getWifiAround'],
        numObjArr:[]
    },
    "statistic": {
        name:'statistic',
        strArr: ['BNJS.statistic.addLog', 'BNJS.statistic.addCtag', 'BNJS.statistic.addMTJ'],
        numObjArr:[]
    },
    "localStorage": {
        name:'localStorage',
        strArr: ['BNJS.localStorage.setItem', 'BNJS.localStorage.getItem', 'BNJS.localStorage.removeItem'],
        numObjArr:[]
    },
    "baseService": {
        name:'baseService',
        strArr: ['BNJS.baseService'],
        numObjArr:[]
    },
    "BNJSReady": {
        name:'BNJSReady',
        strArr: ['BNJSReady'],
        numObjArr:[]
    },
    "enableDebug": {
        name:'enableDebug',
        strArr: ['BNJS.enableDebug'],
        numObjArr:[]
    },
    "version": {
        name:'version',
        strArr: ['BNJS.version'],
        numObjArr:[]
    }

};

function statisOneProto(obj) {
    var strArr = obj.strArr,
        numObjArr = obj.numObjArr,
        strNum = obj.strArr.length,
        temp = null;

    for (var i = 0; i < strNum; i++) {
        temp = statisStrInDirNum('', strArr[i]);
        numObjArr.push(temp);
    }
}

for (var key in strObj) {
    if (strObj.hasOwnProperty(key)) {
        statisOneProto(strObj[key]);
    }
}

saveData.saveData('./data/data.json', JSON.stringify(strObj));
