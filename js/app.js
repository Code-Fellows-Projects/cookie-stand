'use strict';

// global variables

var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var allStores = [];
var addNewStoreForm = document.getElementById('newStoreLocation'); //new line of code...


function Stores(name, minimumCustomersPerHour, maximumCustomersPerHour, averageCookiesPerCustomer) {
  this.name = name;
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maximumCustomersPerHour = maximumCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesForTheDay = 0;
  this.totalHourCookie = 0; //added 10/07
  // this.generateCustomersEachHour();
  allStores.push(this);

}
// object instances

new Stores('Seattle', 23, 65, 6.3);
new Stores('Tokyo', 3, 24, 1.2);
new Stores('Dubai', 11, 38, 3.7);
new Stores('Paris', 20, 38, 2.3);
new Stores('Lima', 2, 16, 4.6);


Stores.prototype.generateCustomersEachHour = function () {
  for (var i = 0; i < storeHours.length; i++) {
    var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);

    return randomNumber;
    // this.customersEachHour.push(randomNumber);

  }
};
Stores.prototype.generateCookiesSoldEachHour = function () {
  // this.generateCustomersEachHour();
  for (var i = 0; i < storeHours.length; i++) {
    var cookiesSoldThisHour = Math.ceil(this.generateCustomersEachHour() * this.averageCookiesPerCustomer);

    this.totalCookiesForTheDay += cookiesSoldThisHour;

    this.cookiesSoldEachHour.push(cookiesSoldThisHour);
  }
  console.log(this.cookiesSoldEachHour);
};

//this is creating the top row of hours on the table

function storeHeaderRow() {
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  trElement.appendChild(thElement);
  for (var i = 0; i < storeHours.length; i++) {
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

// this is generating the stores and totals for daily location totals

Stores.prototype.generateRows = function () {
  // this.generateCookiesSoldEachHour();
  var trElement = document.createElement('tr');
  //console.log(this);
  this.cookiesSoldEachHour.unshift(this.name);
  for (var i = 0; i <= storeHours.length; i++) {

    var tdElement = document.createElement('td');
    tdElement.textContent = `${this.cookiesSoldEachHour[i]}`;
    trElement.appendChild(tdElement);

    //   // starting total loop
    //   for (var j = 0; j < storeHours.length; j++) {
    //     console.log(`cookiesSoldEachHour type: ${typeof (this.cookiesSoldEachHour)}`);
    //   }
    var parentElement = document.getElementById('table');
    parentElement.appendChild(trElement);
  }
  var tdElementTwo = document.createElement('td');
  tdElementTwo.textContent = `${this.totalCookiesForTheDay}`;
  trElement.appendChild(tdElementTwo);

};
function generateHourlyTotal(allStores) {
  console.log('where are you');
  var parentElement = document.getElementById('table');
  console.log(parentElement);
  var trDailyTotals = document.createElement('tr');
  parentElement.appendChild(trDailyTotals);
  var thDailyElement = document.createElement('th');
  thDailyElement.textContent = 'Hourly Totals';
  trDailyTotals.appendChild(thDailyElement);
  var hourlyCookies = 0;
  var grandHourlyCookiesTotal = 0;
  for (var k = 1; k < allStores[0].cookiesSoldEachHour.length; k++) {
    for (var m = 0; m < allStores.length; m++) {
      hourlyCookies += allStores[m].cookiesSoldEachHour[k];

    }
    var tdTotalHourDay = document.createElement('td');
    tdTotalHourDay.textContent = hourlyCookies;
    trDailyTotals.appendChild(tdTotalHourDay);
    grandHourlyCookiesTotal += hourlyCookies;
    hourlyCookies = 0;
  }
  var tdGrandElement = document.createElement('td');
  tdGrandElement.textContent = grandHourlyCookiesTotal;
  trDailyTotals.appendChild(tdGrandElement);

}

//adding store i think...
function handleSubmit(event) {
  event.preventDefault();
  console.log('this is my event.target.average', event.target.locationCookie.value);
  var patsLocation = event.target.locationCookie.value;
  var patsMinimum = event.target.minimumCookie.value;
  var patsMaximum = event.target.maximumCookie.value;
  var patsAverage = event.target.averageCookie.value;
  new Stores(patsLocation, patsMinimum, patsMaximum, patsAverage);

  document.getElementById('table').innerHTML = '';
  allRows(allStores);
}

storeHeaderRow();
// seattle.generateRows();
// tokyo.generateRows();   
// dubai.generateRows();
// paris.generateRows();
// lima.generateRows();
addNewStoreForm.addEventListener('submit', handleSubmit);
for (var j = 0; j < allStores.length; j++) {
  allStores[j].generateCookiesSoldEachHour();

}
function allRows(allStores) {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].generateRows();

  }
  generateHourlyTotal(allStores);
}
allRows(allStores);
