// var obj=/犯罪嫌疑人.*基本情况/g;
// var string="犯罪嫌疑人的基本情况1认定属于“依法快速办理轻微刑事案件”的理由1审查认定的事实、证据1需要说明的问题1承办人意见1犯罪嫌疑人的基本情况1认定属于“依法快速办理轻微刑事案件”的理由1审查认定的事实、证据1需要说明的问题1承办人意见1犯罪嫌疑人及其他诉讼参与人的基本情况1发、破案经过1侦查机关（部门）认定的犯罪事实与意见1相关当事人、诉讼参与人的意见1审查认定的证据及分析1需要说明的问题1承办人意见1犯罪嫌疑人及其他诉讼参与人的基本情况1制作简化版审查报告的理由1审查认定的事实、证据1需要说明的问题1承办人意见1犯罪嫌疑人及其他诉讼参与人的基本情况1认定属于“依法快速办理轻微刑事案件”的理由1审查认定的事实、证据1需要说明的问题1承办人意见1犯罪嫌疑人及其他诉讼参与人的基本情况1发、破案经过1审查认定的事实、证据1需要说明的问题1承办人意见1犯罪嫌疑人及其他诉讼参与人的基本情况1发、破案经过1侦查机关认定的犯罪事实与意见1相关当事人、诉讼参与人的意见1审查认定的事实、证据及分析1需要说明的问题承1办人意见";
// var last = string.match(obj);
// console.log(last);

// var a={a:1,B:2};
// var b;
// b = a;
// b.a = 3;
// b = new Object();
// b.a = 4;
// console.log(a); //{ a: 3, B: 2 }
// console.log(b); //{}

// function setName(obj) {
//     obj.name = "Nicholas";
//     obj = {};
//     obj.name = "Greg";
// }
// var person = {};
// setName(person);
// console.log(person.name); //Nicholas

// var s = "Nicholas";
// var b = true;
// var i = 22;
// var u;
// var n = null;
// var o = {};
// var a = [];
// var r = /a/g;
// var f = function () {};
//
// console.log(typeof s); //string
// console.log(typeof b); //boolean
// console.log(typeof i); //number
// console.log(typeof u); //undefined
// console.log(typeof n); //object
// console.log(typeof o); //object
// console.log(typeof a); //object
// console.log(typeof r); //Chrome 7 and Safari 5 function ; IE and Firefox object
// console.log(typeof f); //function
//
// console.log(s instanceof String); //false 是基本类型都返回false
// console.log(o instanceof Object); //true
// console.log(a instanceof Array); //true
// console.log(r instanceof RegExp); //true
// console.log(f instanceof Function); //true

// var wapColor = "blue";
// function toOneColor() {
//     var oneColor = "red";
//     function toTowColor() {
//         var towColor = oneColor;
//         oneColor = wapColor;
//         wapColor = towColor;
//         console.log("toTowColor " + wapColor);
//         console.log("toTowColor " + oneColor);
//         console.log("toTowColor " + towColor);
//     }
//     toTowColor();
//     console.log("toOneColor " + wapColor);
//     console.log("toOneColor " + oneColor);
// }
// toOneColor();
// console.log("wapColor " + wapColor);

// function Lakers() {
//     this.name = "kobe bryant";
//     this.age = "28";
//     this.gender = "boy";
// }
// var people = new Lakers();
// function testWith() {
//     with(people){
//         var str = "姓名: " + name + '\n';
//         str += "年龄：" + age + '\n';
//         str += "性别：" + gender;
//     }
//     console.log(str);//姓名: kobe bryant
//                      //年龄：28
//                      //性别：boy
// }
// //console.log(str);//出错
// testWith();

// (function(){
//     e = "default";
//     try{
//         throw "test";
//     }catch(e){
//         var e;
//         var x = 123;
//         console.log(e); //test
//         e = 456;
//         console.log(e); //456
//     }
//     console.log(x); //123
//     console.log(e); //default
// })();

var person = {
    name : "Nicholas",
    "age" : 29, //属性名可以加双引号
    5 : 10 //数值属性名会自动转换为字符串
}
console.log(person);