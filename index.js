// Destructuring assignment ga oid vazifa

// 1-masala

// const info = ["Ali", 30, "Toshkent"];
// const [name, age, city] = info;
// console.log(name,age,city);

// 2-masala

// const colors = ["red", "green", "blue", "yellow", "purple"];
// const [a,b, ...res] = colors;
// console.log(res);

// 3-masala

// function firstAndLast(arr){
//     const [first ,,, last] = arr;
//     return [first,last]
// }
// const result = firstAndLast([10, 20, 30, 40]);
// console.log(result); 

// 4-masala

// const numbers = [1, 2, 3, 4, 5, 6];
// const [,a,,,b,] = numbers;
// console.log(a,b);

//#### **2. Object Destructuring:**

// 1-masala

// const book = {
//     title: "JavaScript for Beginners",
//     author: "John Doe",
//     year: 2021
//   };
// const {title: t,author:a} = book;
// console.log(t,a);

// 2-masala

// const location = {
//     city: "Toshkent",
//     coordinates: {
//       latitude: 41.2995,
//       longitude: 69.2401
//     }
//   };
// const{ coordinates: { latitude, longitude }} = location
// console.log(latitude,longitude);

// 3-m

// const person = {
//     firstName: "Ali",
//     lastName: "Valiyev",
//     age: 28
//   };
// const {firstName: fName, lastName:lName} = person;
// console.log(fName,lName);

// 4-m

// const settings = {
//     theme: "dark",
//     language: "uz"
//   };
  
//   const { theme, language, mode: m = "defaultMode", fontSize = "18" } = settings;
//   console.log(theme,language,m,fontSize);    


// MASALALAR

// 1-m

// 1-usul Regular function

// let arr = [1,2,3,4,5];
// function sum (arg){
//     let sum = 0;
//     for( let i = 0; i < arg.length; i++){
//         if(arg[i] % 2 == 1){
//             sum+=arg[i]
//         }
//     }
//     return sum
// }
// console.log(sum(arr));

// 2-usul Express function

// let arr = [1,2,3,4,5];
// const sum = function (arg){
//     let sum = 0;
//     for( let i = 0; i < arg.length; i++){
//         if(arg[i] % 2 == 1){
//             sum+=arg[i]
//         }
//     }
//     return sum
// }
// console.log(sum(arr));

// 3-usul Arrow function

// let arr = [1,2,3,4,5];
// const sum = (arg) =>{
//     let sum = 0;
//     for( let i = 0; i < arg.length; i++){
//         if(arg[i] % 2 == 1){
//             sum+=arg[i]
//         }
//     }
//     return sum
// }
// console.log(sum(arr));

// 1-masala

// 1-usul Regular function

// let arr = [2,5,9,7,6,1];
// function kichikSon(arg){
//     let res =  arr.sort(function(a,b){
//         return a - b;
//     })
//     return res[0]
// }
// console.log(kichikSon(arr));

// 2-usul Express function

// let arr = [2,5,9,7,6,1];
// const kichikSon = function(arg){
//     let res =  arr.sort(function(a,b){
//         return a - b;
//     })
//     return res[0]
// }
// console.log(kichikSon(arr));

// 3-usul Arrow function

// let arr = [2,5,9,7,6,1];
// const kichikSon = (arg) =>{
//     let res =  arr.sort(function(a,b){
//         return a - b;
//     })
//     return res[0]
// }
// console.log(kichikSon(arr));

// 2-masala

// 1-usul Regular function

// let str = "sal2om1";
// function faqatSonlar(str){
//     let res = []
//     for(let i = 0; i < str.length; i++){
//         if(str[i] >= '0' && str[i] <= '9'){
//             res.push(str[i])
//         }
//     }
//     return res
// }
// console.log(faqatSonlar(str));

// 2-usul Express function

// let str = "sal2om1";
// const faqatSonlar = function(str){
//     let res = []
//     for(let i = 0; i < str.length; i++){
//         if(str[i] >= '0' && str[i] <= '9'){
//             res.push(str[i])
//         }
//     }
//     return res
// }
// console.log(faqatSonlar(str));

// 3-usul Arrow function

// let str = "sal2om1";
// const faqatSonlar = (str) =>{
//     let res = []
//     for(let i = 0; i < str.length; i++){
//         if(str[i] >= '0' && str[i] <= '9'){
//             res.push(str[i])
//         }
//     }
//     return res
// }
// console.log(faqatSonlar(str));

// 4-masala

// 1-usul Regular function

// let a = 5
// function kv(a){
//     return a * a
// }
// console.log(kv(a));

// 2-usul Express function

// let a = 5
// const kv = function(a){
//     return a * a
// }
// console.log(kv(a));

// 3-usul Arrow function

// let a = 5
// const kv = (a) =>{
//     return a * a
// }
// console.log(kv(a));

// 5-masala

// 1-usul Regular function

// function reverseString(str) {
//     let arr = str.split(' ');
//     arr = arr.map(function(v){
//         return v.split('').reverse().join('') 
//     })
//     return arr.join(' ');
// }
// console.log(reverseString("salom bolalar"));

// 2-usul Express function

// const reverseString = function(str) {
//     let arr = str.split(' ');
//     arr = arr.map(function(v){
//         return v.split('').reverse().join('') 
//     })
//     return arr.join(' ');
// }
// console.log(reverseString("salom bolalar"));

// 3-usul Arrow function

// const reverseString = (str) => {
//     let arr = str.split(' ');
//     arr = arr.map(function(v){
//         return v.split('').reverse().join('') 
//     })
//     return arr.join(' ');
// }
// console.log(reverseString("salom bolalar"));

// 6-masala

// 1-usul Regular function

// const matn = "Salom dunyo";
// function harflarniSanash(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(harflarniSanash(matn));

// 2-usul Express function

// const matn = "Salom dunyo";
// const harflarniSanash =function(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(harflarniSanash(matn));

// 3-usul Arrow function

// const matn = "Salom dunyo";
// const harflarniSanash = (str) => {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(harflarniSanash(matn));

// 7-masala

// 1-usul Regular function

// let arr = [1,2,3,4,5];
// function kub(arg){
//     let p = []
//     for (const iterator of arg) {
//         p.push(iterator**3)
//     }
//     return p 
// }
// console.log(kub(arr));

// 2-usul Express function

// let arr = [1,2,3,4,5];
// const kub = function(arg){
//     let p = []
//     for (const iterator of arg) {
//         p.push(iterator**3)
//     }
//     return p 
// }
// console.log(kub(arr));

// 3-usul Arrow function

// let arr = [1,2,3,4,5];
// const kub = (arg) =>{
//     let p = []
//     for (const iterator of arg) {
//         p.push(iterator**3)
//     }
//     return p 
// }
// console.log(kub(arr));

// 8-masala

// 1-usul Regular function

// let str = "salom bolalar";
// function teskariUnlilar(str){
//     let res = []
//     for (const iterator of str) {
//         if(iterator == 'a' || iterator == 'e' || iterator == 'i' || iterator == 'u' || iterator == 'o' || iterator == 'A' || iterator == 'E' || iterator == 'I' || iterator == 'U' || iterator == 'O'){
//             res.push(iterator)
//         }
//     }
//     return res.reverse()
// }
// console.log(teskariUnlilar(str));

// 2-usul Express function

// let str = "salom bolalar";
// const teskariUnlilar = function(str){
//     let res = []
//     for (const iterator of str) {
//         if(iterator == 'a' || iterator == 'e' || iterator == 'i' || iterator == 'u' || iterator == 'o' || iterator == 'A' || iterator == 'E' || iterator == 'I' || iterator == 'U' || iterator == 'O'){
//             res.push(iterator)
//         }
//     }
//     return res.reverse()
// }
// console.log(teskariUnlilar(str));

// 3-usul Arrow function

// let str = "salom bolalar";
// const teskariUnlilar = (str) =>{
//     let res = []
//     for (const iterator of str) {
//         if(iterator == 'a' || iterator == 'e' || iterator == 'i' || iterator == 'u' || iterator == 'o' || iterator == 'A' || iterator == 'E' || iterator == 'I' || iterator == 'U' || iterator == 'O'){
//             res.push(iterator)
//         }
//     }
//     return res.reverse()
// }
// console.log(teskariUnlilar(str));

// 9-masala

// 1-usul Regular function

// const sonlar = [10, 20, 30, 40, 50];
// function ortaQiymaTopish(nums) {
//     if (nums.length === 0) return 0;
//     let summa = 0;
//     for (let num of nums) {
//         summa += num;
//     }
//     return summa / nums.length;
// }
// console.log(ortaQiymaTopish(sonlar));

// 2-usul Express function

// const sonlar = [10, 20, 30, 40, 50];
// const ortaQiymaTopish = function (nums) {
//     if (nums.length === 0) return 0;
//     let summa = 0;
//     for (let num of nums) {
//         summa += num;
//     }
//     return summa / nums.length;
// }
// console.log(ortaQiymaTopish(sonlar));

// 3-usul Arrow function

// const sonlar = [10, 20, 30, 40, 50];
// const ortaQiymaTopish = (nums) => {
//     if (nums.length === 0) return 0;
//     let summa = 0;
//     for (let num of nums) {
//         summa += num;
//     }
//     return summa / nums.length;
// }
// console.log(ortaQiymaTopish(sonlar));

// 10-masala

// 1-usul Regular function

// let str = 'salom';
// let n = 'a'
// function elementOchirish(str){
//     return str.replaceAll(n,"")
// }
// console.log(elementOchirish(str));

// 2-usul Express function

// let str = 'salom bolalar';
// let n = 'a'
// const elementOchirish = function(str){
//     return str.replaceAll(n,"")
// }
// console.log(elementOchirish(str));

// 3-usul Arrow function

// let str = 'salom bolalar';
// let n = 'a'
// const elementOchirish = (str) =>{
//     return str.replaceAll(n,"")
// }
// console.log(elementOchirish(str));