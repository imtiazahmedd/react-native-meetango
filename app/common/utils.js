/**
*
* Utils
*
* @author  Minh Huy
* @version 1.0
* @since   18-05-2017
*/

'use strict'

import React,{
  NetInfo,
  Platform,
  AsyncStorage
}from 'react-native';
var Constants = require('./constants');
var RCTUIManager = require('NativeModules').UIManager;
class Utils
{
  checkNetwork(){
    return new Promise(function(resolve,reject){
      NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) {
          resolve(true);
        }else{
          reject(false);
        }
      });
    });
  }

  isValidEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  removeElementInArray(array, index){
      var temp = [array.length - 1];
      for(var i = 0; i < array.length; i++){
         if(i + 1 == array.length){
           return temp;
         }
         if(i >= index){
           temp[i] = array[i + 1];
         } else {
           temp[i] = array[i];
         }
      }
      return temp;
  }

  removeElementInArrayWithValue(array, value){
    for(var i in array){
        if(array[i]==value){
            array.splice(i,1);
            break;
        }
    }
    return array;
  }

  removeElementInArrayWithName(array, value){
    for(var i in array){
        if(array[i].name == value){
            array.splice(i,1);
            break;
        }
    }
    return array;
  }

  removeElementArrayWithAttr(array, id){
    for(var i in array){
        if(array[i].id==id){
            array.splice(i,1);
            break;
        }
    }
    return array;
  }

  removeElementArrayWithListId(array, id){
    for(var i in array){
        if(array[i].listId==id){
            array.splice(i,1);
            break;
        }
    }
    return array;
  }

  addElementArrayWithAttr(array, object){
    return array.push(object);
  }

  containsArray(array, value){
    for(var i = 0; i < array.length; i++){
       if(array[i] == value){
         return true;
       }
    }
    return false;
  }

  containsArrayWithNames(array, value){
    for(var i = 0; i < array.length; i++){
       if(array[i].name == value){
         return true;
       }
    }
    return false;
  }

  containsArrayWithId(array, object){
    if(array == null || array == undefined){
      return false;
    }
    for(var i = 0; i < array.length; i++){
       if(array[i].id == object.id){
         return true;
       }
    }
    return false;
  }

  containsArrayWithName(array, name, id){
    for(var i = 0; i < array.length; i++){
       if(id == ''){
         if(array[i].name == name){
           return true;
         }
       } else {
         if(array[i].name == name && array[i].id !== id){
           return true;
         }
       }
    }
    return false;
  }

  updateUIWhenShowKeyboard(refStr,component){
    if (Platform.OS === 'ios') {
      var inputView = component.refs[refStr];
      var handle = React.findNodeHandle(inputView);
      RCTUIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
        var spaceScreen = Constants.HEIGHT_SCREEN - Constants.HEIGHT_KEYBOARD_IOS;
        if (spaceScreen < pageY+height) {
          console.log((pageY - spaceScreen + height)*(-1));
          component.setState({containerMarginTop:(pageY - spaceScreen + height)*(-1)});
        }
      });
    }
  }

  getValueByKey(key){
    return new Promise(function(resolve,reject){
      AsyncStorage.getItem(key).then((value) => {
          resolve(JSON.parse(value));
      }).done();
    });
  }

  setValueByKey(key, value){
    AsyncStorage.setItem(key, value);
  }

  removeValueByKey(key){
    return new Promise(function(resolve,reject){
      AsyncStorage.removeItem(key).then((value) => {
          resolve('removed');
      }).done();
    });
  }

  clearAsyncStorage(){
    AsyncStorage.clear(() => {});
  }

  removeMutiKey(){
    let keys = ['REFRESH_TOKEN_LOGIN_STORE_ID', 'LOGIN_INFO_STORE_ID', 'USER_PROFILE_STORE_ID'];
    AsyncStorage.multiRemove(keys, (err) => {});
  }

  updateUIWhenHideKeyboard(component){
    if (Platform.OS === 'ios') {
      component.setState({containerMarginTop:0});
    }
  }

  measureView(view, callb){
    const handle = React.findNodeHandle(view);
    RCTUIManager.measure(
      handle,
      (x, y, width, height, pageX, pageY) => {
        callb({x, y, width, height, pageX, pageY});
      });
  }

  backToRoute(backRoute, navigator){
    let routes=navigator.getCurrentRoutes();
    var route=null;
    for(var i=routes.length-1; i>=0; i--){
      if(routes[i].id==backRoute.id){
        route=routes[i];
        break;
      }
    }
    if(route){
      navigator.popToRoute(route);
    }else{
      navigator.push(backRoute);
    }
  }

  backToRouteId(routeId, navigator){
    this.backToRoute({id: routeId}, navigator);
  }

  replaceRouteId(routeId,currentView){
    this.replaceRoute({id:routeId},currentView);
  }

  replaceRoute(newRoute,currentView){
    let routes = currentView.props.navigator.getCurrentRoutes();
    var route=null;
    var index;//vi tri se replace
    for(var i=0; i < routes.length; i++){
      index=i-routes.length;
      if(routes[i].id===newRoute.id){
        route=routes[i];
        break;
      }
    }
    if(route != null){
      currentView.props.navigator.replaceAtIndex(newRoute,index,()=>{
          this.backToRoute(newRoute,currentView.props.navigator);
      });
    }else{
      currentView.props.navigator.push(newRoute)
    }
  }

  getCurrentRoute(currentView){
    let routes = currentView.props.navigator.getCurrentRoutes();
    return routes[routes.length - 1];
  }

  backToRouteWithoutSelf(currentView, routeId){
    let routes = currentView.props.navigator.getCurrentRoutes();
    for(var i = routes.length - 1; i > 0; i--){
      if(routes[i] !== routeId){
        currentView.props.navigator.popToRoute(routes[i])
      }
    }
  }

  getDatePlus(plus) {
    var now  = new Date();
    now.setDate(now.getDate() + plus);
    return now;
  }

  getDateExpireFormat(timeString){
    var timeStamp = Date.parse(timeString);
    var datetime = new Date(timeStamp);
    var date = datetime.getDate();
    var month = Number(datetime.getMonth()) + 1;
    var year = datetime.getFullYear();
    return date + '/' + month + '/' + year;
  }

  getDateFormat(date, format){
    var day = date.getDate();
    var month = Number(date.getMonth()) + 1;
    var year = date.getFullYear();
    if(month < 10){month = '0' + month}
    if(day < 10){day = '0' + day}
    switch (format) {
      case 'dd/mm/YYYY':
        return day + '/' + month + '/' + year;
        break;
      case 'YYYY-mm-dd':
        return year + '-' + month + '-' + day;
        break;
      default:
    }
  }

  getDateFormatWithTimeStamp(time, format){
    var date = new Date(time);
    var day     = Number(date.getDate());
    var month   = Number(date.getMonth() + 1);
    var year    = Number(date.getFullYear());
    switch (format) {
      case 'dd/mm/YYYY':
        return day + '/' + month + '/' + year;
        break;
      default:

    }
  }

  getTimeStamp(date){
    if(date == '' || date == undefined){
      return '';
    }
    var someDate = new Date(date);
    return someDate.getTime()/1000|0;
  }

  numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
  }

  getMoneyOriginal(money){
    if(money == '' || money == undefined || money == 0){
      return 0;
    }
    var removeDot = money.replace(/[.]/g, '');
    return Number(removeDot);
  }

  getMoneyFormat(money){
    if(money == '' || money == undefined || money == 0){
      return 0;
    }
    var money = money.toString();
    var removeDot = money.replace(/[.]/g, '');
    if(removeDot.length == 0){
      return money;
    }
    var number = Number(removeDot);
    return this.numberWithCommas(number);
  }

  searchFilter(search_term, array) {
    var matched_terms = [];
    if(search_term == ''){
      return array;
    }
    search_term  = search_term.toLowerCase();
    array.forEach(item => {
        var fullName = '';
        if(item.brand != undefined){
          fullName += item.brand + ' ';
        }
        if(item.name != undefined){
          fullName += item.name;
        }
        if(item.question != undefined){
          fullName += item.question;
        }
        if(item.tmssNo != undefined){
          fullName += item.carGrade.name + ' ' + item.carGrade.slug + ' ' + item.carGrade.shortCode + ' ' + item.exteriorColor.code + ' ' + item.exteriorColor.name + ' ' + item.managedStock.slug + ' ' + item.managedStock.name;//slug, name
        }
        if(fullName.toLowerCase().indexOf(search_term) !== -1) {
            matched_terms.push(item);
        }
    });
    return matched_terms;
  }

  getDurationTime(time){
    var date = new Date(time);
    if(!time){return ''}
    if(date == 'Invalid Date'){
      var year    = time.substring(0, 4);
      var month   = time.substring(5, 7);
      var day     = time.substring(8, 10);
      var hour    = time.substring(11, 13);
      var minute  = time.substring(14, 16);
      var second = time.substring(17, 19);
    } else {
      var year    = Number(date.getFullYear());
      var month   = Number(date.getMonth() + 1);
      var day     = Number(date.getDate());
      var hour    = Number(date.getHours());
      var minute  = Number(date.getMinutes());
      var second = Number(date.getSeconds());
    }
    var now  = new Date();
    var hour_now = Number(now.getHours());
    var minute_now = Number(now.getMinutes());
    var second_now = Number(now.getSeconds());
    var day_now = Number(now.getDate());
    var month_now = Number(now.getMonth()) + 1;
    var year_now = Number(now.getFullYear());
    if(year_now > year){
      return (year_now - year) + ' năm trước';
    }
    if(year_now == year){
      if(month_now > month){
        return (month_now - month) + ' tháng trước';
      }
      if(month_now == month){
        if(day_now > day){
          return (day_now - day) + ' ngày trước';
        }
        if(day_now == day){
          if(hour_now > hour){
            return (hour_now - hour) + ' giờ trước';
          }
          if(hour_now == hour){
            if(minute_now > minute){
              return (minute_now - minute) + ' phút trước';
            }
            if(minute_now == minute){
              if(second_now > second){
                return (second_now - second) + ' giây trước';
              }
            }
          }
        }
      }
    }
    return '';
  }

  convertStringToDateWithFormat(dateString, format){
    var arraySplit = dateString.split("/");
    if(arraySplit.length > 3){return dateString}
    switch (format) {
      case 'DD/MM/YYYY':
        return new Date(arraySplit[1] + '/' + arraySplit[0] + '/' + arraySplit[2]);
        break;
      default:
        return dateString;
    }
  }

  getImageWithSize(url, size){//with xsize to resize by height, size to resize by width
    if(url == undefined || url == ''){
      return '';
    }
    if(size == undefined || size == ''){
      return url;
    }
     var arraySplit = url.split("original");
     if(arraySplit.length == 2){
       return arraySplit[0] + size.toString() + arraySplit[1];
     } else {
       return url;
     }
  }

  getTrackingId(){
    if(Platform.OS == 'android'){
      return 'UA-90297937-10';
    } else {
      return 'UA-90297937-11';
    }
  }

  getAppTrackingId(appId){
    switch (appId) {
      case 'SMA':
        if(Platform.OS == 'android'){
          return 'UA-90297937-10';
        } else {
          return 'UA-90297937-11';
        }
        break;
      case 'STOCK':
        if(Platform.OS == 'android'){
          return 'UA-90297937-9';
        } else {
          return 'UA-90297937-12';
        }
        break;
      default:

    }
  }

  orderList(array, currentId, type){
    for(var i = 0; i < array.length; i++){
      if(array[i].id == currentId && ((type == 'up' && i !== 0) || (type == 'down' && i !== array.length - 1))){
        var temp = '';
        if(type == 'up'){
          temp = array[i - 1];
          array[i - 1] = array[i];
        } else {
          temp = array[i + 1];
          array[i + 1] = array[i];
        }
        array[i] = temp;
        break;
      }
    }
    return array;
  }

  wordInString(str){
    var strCode;
    var string = 'àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ';
    for(var i = 0; i < str.length; i++){
      strCode = str.charCodeAt(i);
      if((strCode <= 64 || strCode >= 123 || (strCode >= 91 && strCode <= 96)) && strCode !== 32 && string.indexOf(str[i]) < 0){
        return false;
      }
    }
    return true;
  }

  isHasLaunchingYear(launchingyear){
    if(launchingyear !== undefined && launchingyear !== '' && launchingyear !== null && Number.isInteger(launchingyear)){
      return true;
    }
    return false
  }

  dateReportFormat(dateString, format){
    if(dateString == '' || dateString == undefined){return ''}
    var date_array = dateString.split('/');
    if(date_array.length == 3){
      return date_array[2] + '-' + date_array[1] + '-' + date_array[0];
    }
    return '1970-01-01';
  }

  getElementWithId(array, id){
    for(var i = 0; i < array.length; i++){
      if(array[i].id == id){
        return array[i];
      }
    }
    return '';
  }

  toUpperCase(string){
    if(string){
      return string.toUpperCase();
    }
    return '';
  }

  toLowerCase(string){
    if(string){
      return string.toLowerCase();
    }
    return '';
  }

  permissionCheck(permission, data){
    if(Array.isArray(data)){
      for(var i = 0; i < data.length; i++){
        if(this.containsArray(permission, data[i])){return true;}
      }
      return false;
    } else {
      return this.containsArray(permission, data);
    }
  }

  isPermission(permission, moduleId, moduleChids){
    if(!permission){return false}
    var permissions = [];
    switch (moduleId) {
      case 'report':
        if(permission.report){
          permissions = permission.report;
        }else{
          return false;
        }
        break;
      case 'listing':
        if(permission.listing){
          permissions = permission.listing;
        }else{
          return false;
        }
        break;
      case 'notification':
        if(permission.notification){
          permissions = permission.notification;
        }else{
          return false;
        }
        break;
      case 'my-stock':
        if(permission['my-stock']){
          permissions = permission['my-stock'];
        }else{
          return false;
        }
        break;
      case 'transaction-history':
        if(permission['transaction-history']){
          permissions = permission['transaction-history'];
        }else{
          return false;
        }
        break;
      case 'fleet':
        if(permission.fleet){
          permissions = permission.fleet;
        }else{
          return false;
        }
        break;
      case 'planning':
        if(permission.planning){
          permissions = permission.fleet;
        }else{
          return false;
        }
        break;
     case 'account':
       if(permission.module_account){
         permissions = permission.module_account;
       }else{
         return false;
       }
       break;
    }
    if(moduleChids == ''){
      return true;
    }
    if(permissions.length == 0 || !moduleChids){
      return false;
    }
    return this.permissionCheck(permissions, moduleChids);
  }

  getTotalElement(array){
    var size = 0;
    for(var i = 0; i < array.length; i++){
      size += array[i] > 0 ? array[i] : 0;
    }
    return size;
  }
}
module.exports = Utils;
