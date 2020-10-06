'use strict'


var seattle = document.getElementById('seattle');
var listItem = document.createElement('li');
//var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
// object literals :

//function place (location, minCustomer, maxCustomer, avgPerCustomer)


var storeSeattle = {
    minCustomerEachHour: 23,
    maximumCustomerEachHour: 65,
    averageCookieSale: 6.3,
    //cookiesSoldEachHour: [],
    //customersEachHour: [],
    generateCustomersEachHour: 
        function (min, max){ //randomCustomer (min, max){
            min = Math.ceil(minCustomerEachHour);
            max = Math.floor(maximumCustomerEachHour);
            return Math.floor(Math.random() * (max - min + 1) + min);
   },
 

    generateCookiesSoldEachHour: function (){
        return Math.round(this.generateCustomersEachHour(this.minCustomersEachHour, this.maximumCustomerEachHour) * this.averageCookieSale);

    },
    
   storeHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],    
    
   cookiePerHour: [],
    
    
    //function randomCookieCustomer(){
            //var randomHours = ; 
                //for (var i = 0; i < );

            }
        }
        

    // array that holds customers each hour
    // array cookies each hour for loop through hours 

//for loop to loop through hours array
    // in for loop push.  array name .push(random(min max customer value))

   
var storeTokyo = {
    minCustomerEachHour = 3,
    maximumCustomerEachHour = 24,
    averageCookieSale = 1.2,
    function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
      }
},

generateCookiesSoldEachHour: function (){
    return Math.round(this.generateCustomersEachHour(this.minCustomersEachHour, this.maximumCustomerEachHour) * this.averageCookieSale);

},

storeHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],    

cookiePerHour: [],
},

//function randomCookieCustomer(){
        //var randomHours = ; 
            //for (var i = 0; i < );

        
},

    
var storeDubai = {
    minCustomerEachHour = 11,
    maximumCustomerEachHour = 38,
    averageCookieSale = 3.7,
    function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
      }
},
generateCookiesSoldEachHour: function (){
    return Math.round(this.generateCustomersEachHour(this.minCustomersEachHour, this.maximumCustomerEachHour) * this.averageCookieSale);

},

storeHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],    

cookiePerHour: [],


function randomCookieCustomer(){
        var randomHours = ; 
            for (var i = 0; i < );





var storeParis = {
    minCustomerEachHour = 20,
    maximumCustomerEachHour = 38,
    averageCookieSale = 2.3,
    function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
      }
}
generateCookiesSoldEachHour: function (){
    return Math.round(this.generateCustomersEachHour(this.minCustomersEachHour, this.maximumCustomerEachHour) * this.averageCookieSale);

},

storeHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],    

cookiePerHour: [],


function randomCookieCustomer(){
        var randomHours = ; 
            for (var i = 0; i < );





var storeLima = {
    minCustomerEachHour = 2,
    maximumCustomerEachHour = 16,
    averageCookieSale = 4.6,
    function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
      }
} 
generateCookiesSoldEachHour: function (){
    return Math.round(this.generateCustomersEachHour(this.minCustomersEachHour, this.maximumCustomerEachHour) * this.averageCookieSale);

},

storeHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],    

cookiePerHour: [],


function randomCookieCustomer(){
        var randomHours = ; 
            for (var i = 0; i < );





// starting numbers given
// stores Location ('Seattle', 23, 65, 6.3);
// stores Location ('Tokyo', 3, 24, 1.2);
// stores Location ('Dubai', 11, 38, 3.7);
// stores Location ('Paris', 20, 28, 2.3);
// stores Location ('Lima', 2, 16, 4.6);



// Instructions of how to start
// minimumCustomerEachHour: 30;
//     Math.random
// maximumCustomerEachHour: 100;
//     Math.random
// averageCookieSale: 6.3;
// cookieSoldEachHour: [] array DOM
// generateCookieSoldEachHour: function(){}
//     customer/hour * average cookie sales
// generateCustomersEachHour: function(){}
//     Math.random
// customersEachHour:[]


