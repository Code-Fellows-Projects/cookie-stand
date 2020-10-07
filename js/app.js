'use strict';

var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var allStores = [];

function Stores(name, minimumCustomersPerHour, maximumCustomersPerHour, averageCookiesPerCustomer){
  this.name = name;
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maximumCustomersPerHour = maximumCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesForTheDay = 0;
  allStores.push(this);

}

var seattle = new Stores('Seattle', 23, 65, 6.3);
var tokyo = new Stores('Tokyo', 3, 24, 1.2);
var dubai = new Stores('Dubai', 11, 38, 3.7);
var paris = new Stores('Paris', 20, 28, 2.3);
var lima = new Stores('Lima', 2, 16, 4.6);


Stores.prototype.generateCustomersEachHour = function(){
  for(var i=0; i<storeHours.length; i++){
    var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);

    this.customersEachHour.push(randomNumber);
  }
};
Stores.prototype.generateCookiesSoldEachHour = function(){
  this.generateCustomersEachHour();
  for(var i=0; i<storeHours.length; i++) {
    var cookiesSoldThisHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);

    this.totalCookiesForTheDay += cookiesSoldThisHour;

    this.cookiesSoldEachHour.push(cookiesSoldThisHour);
  }
  console.log(this.cookiesSoldEachHour);
};
function storeHeaderRow(){
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  trElement.appendChild(thElement);
  for(var i=0; i<storeHours.length; i++) {
    var headerHours = document.createElement('th');
    headerHours.textContent = storeHours[i];
    trElement.appendChild(headerHours);
  }
  var totals = document.createElement('th');
  totals.textContent = 'Daily Location Totals';
  trElement.appendChild(totals);
  var parentElement = document.getElementById('table');
  parentElement.appendChild(trElement);
}


Stores.prototype.generateRows = function (){
  this.generateCookiesSoldEachHour();
  var trElement = document.createElement('tr');
  console.log(this);
  this.cookiesSoldEachHour.unshift(this.name);
  for(var i=0; i <= storeHours.length; i++) {

    var tdElement = document.createElement('td');
    tdElement.textContent = `${this.cookiesSoldEachHour[i]}`;
    trElement.appendChild(tdElement);
  }
  var tdElementTwo = document.createElement('td');
  tdElementTwo.textContent = `${this.totalCookiesForTheDay}`;
  trElement.appendChild(tdElementTwo);

  var parentElement = document.getElementById('table');
  parentElement.appendChild(trElement);
};

storeHeaderRow();
seattle.generateRows();
tokyo.generateRows();
dubai.generateRows();
paris.generateRows();
lima.generateRows();




