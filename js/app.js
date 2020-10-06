'use strict';

var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var seattle = {
    name: 'seattle',
    minimumCustomersPerHour: 23,
    maximumCustomersPerHour: 65,
    averageCookiesPerCustomer: 6.3,
    totalCookiesForTheDay: 0,
    // a random number between my minimum and my maximum
    customersEachHour: [],
    // in order to get a cookies sold each hour array, we are going to need to loop over a customers each hour array and multiply that by the average cookies they buy
    // [23, 45, 67, 24...] * 6.3
    cookiesSoldEachHour: [],  // this is our money array

    generateCustomersEachHour: function (){ 
        // generate the customersEachHour array // get a random number somewhere between the min and max and put that random number into the customersEachHour array for each hour
        for(var i=0; i<storeHours.length; i++){
             var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);

            this.customersEachHour.push(randomNumber);   
        }     
   },

   generateCookiesSoldEachHour: function(){
       this.generateCustomersEachHour(); //this generates an array of customers
       //loop over my customers each hour array
       // multiply the customers by the average cookies that they buy
       //put that number in the cookiesSoldEachHour array

        for(var i=0; i<storeHours.length; i++) {
            var cookiesSoldThisHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);

            this.totalCookiesForTheDay += cookiesSoldThisHour;

            this.cookiesSoldEachHour.push(cookiesSoldThisHour);
        }
    },

    render: function(){
        var parentSection = document.getElementById('seattle');
        //create h2
        var headingSeattle = document.createElement('h2');
        // fill it with content - this.name
        headingSeattle.textContent = this.name;
        // append it to the parent 
        parentSection.appendChild(headingSeattle);
       

        //get the ul with the id of seattle-sales from the dom - that is going to our parent element
        var salesList = document.getElementById('seattle-sales');

        for(var i=0; i<this.cookiesSoldEachHour.length; i++) {
            // create an li
            var liElement = document.createElement('li');
            // fill it with content from cookies sold each hour
            liElement.textContent = `${storeHours[i]}: ${this.cookiesSoldEachHour[i]} cookies;`
             //${} -contain a variable inline with a string

            salesList.appendChild(liElement);
        }
    }
}
  
  

var tokyo = {
    name: 'tokyo',
    minimumCustomersPerHour: 3,
    maximumCustomersPerHour: 24,
    averageCookiesPerCustomer: 1.2,
    totalCookiesForTheDay: 0,
    // a random number between my minimum and my maximum
    customersEachHour: [],
    // in order to get a cookies sold each hour array, we are going to need to loop over a customers each hour array and multiply that by the average cookies they buy
    // [23, 45, 67, 24...] * 6.3
    cookiesSoldEachHour: [],  // this is our money array

    generateCustomersEachHour: function (){ 
        // generate the customersEachHour array // get a random number somewhere between the min and max and put that random number into the customersEachHour array for each hour
        for(var i=0; i<storeHours.length; i++){
             var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);

            this.customersEachHour.push(randomNumber);   
        }     
   },
   generateCookiesSoldEachHour: function(){
       this.generateCustomersEachHour(); //this generates an array of customers
   

        for(var i=0; i<storeHours.length; i++) {
            var cookiesSoldThisHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);

            this.totalCookiesForTheDay += cookiesSoldThisHour;

            this.cookiesSoldEachHour.push(cookiesSoldThisHour);

        }
    }, 

    render: function(){
        var parentSection = document.getElementById('tokyo');
        //create h2
        var headingTokyo = document.createElement('h2');
        // fill it with content - this.name
        headingTokyo.textContent = this.name;
        // append it to the parent 
        parentSection.appendChild(headingTokyo);
       

        //get the ul with the id of seattle-sales from the dom - that is going to our parent element
        var salesList = document.getElementById('tokyo-sales');

        for(var i=0; i<this.cookiesSoldEachHour.length; i++) {
            // create an li
            var liElement = document.createElement('li');
            // fill it with content from cookies sold each hour
            liElement.textContent = `${storeHours[i]}: ${this.cookiesSoldEachHour[i]} cookies;`
             //${} -contain a variable inline with a string

            salesList.appendChild(liElement);
        }
    }
}


    var dubai = {
        name: 'dubai',
        minimumCustomersPerHour: 11,
        maximumCustomersPerHour: 38,
        averageCookiesPerCustomer: 3.7,
        totalCookiesForTheDay: 0,
        // a random number between my minimum and my maximum
        customersEachHour: [],
        // in order to get a cookies sold each hour array, we are going to need to loop over a customers each hour array and multiply that by the average cookies they buy
        // [23, 45, 67, 24...] * 6.3
        cookiesSoldEachHour: [],  // this is our money array
    
        generateCustomersEachHour: function (){ 
            // generate the customersEachHour array // get a random number somewhere between the min and max and put that random number into the customersEachHour array for each hour
            for(var i=0; i<storeHours.length; i++){
                 var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);
    
                this.customersEachHour.push(randomNumber);   
            }     
       },
        generateCookiesSoldEachHour: function(){
           this.generateCustomersEachHour(); //this generates an array of customers
       
    
            for(var i=0; i<storeHours.length; i++) {
                var cookiesSoldThisHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
    
                this.totalCookiesForTheDay += cookiesSoldThisHour;
    
                this.cookiesSoldEachHour.push(cookiesSoldThisHour);
    
            }
    },

    render: function(){
            var parentSection = document.getElementById('dubai');
            //create h2
            var headingDubai = document.createElement('h2');
            // fill it with content - this.name
            headingDubai.textContent = this.name;
            // append it to the parent 
            parentSection.appendChild(headingDubai);
           
    
            //get the ul with the id of seattle-sales from the dom - that is going to our parent element
            var salesList = document.getElementById('dubai-sales');
    
            for(var i=0; i<this.cookiesSoldEachHour.length; i++) {
                // create an li
                var liElement = document.createElement('li');
                // fill it with content from cookies sold each hour
                liElement.textContent = `${storeHours[i]}: ${this.cookiesSoldEachHour[i]} cookies;`
                 //${} -contain a variable inline with a string
    
                salesList.appendChild(liElement);
            }
        }
    }


    var paris = {
        name: 'paris',
        minimumCustomersPerHour: 20,
        maximumCustomersPerHour: 38,
        averageCookiesPerCustomer: 2.3,
        totalCookiesForTheDay: 0,
        // a random number between my minimum and my maximum
        customersEachHour: [],
        // in order to get a cookies sold each hour array, we are going to need to loop over a customers each hour array and multiply that by the average cookies they buy
        // [23, 45, 67, 24...] * 6.3
        cookiesSoldEachHour: [],  // this is our money array
    
        generateCustomersEachHour: function (){ 
            // generate the customersEachHour array // get a random number somewhere between the min and max and put that random number into the customersEachHour array for each hour
            for(var i=0; i<storeHours.length; i++){
                 var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);
    
                this.customersEachHour.push(randomNumber);   
            }     
       },
       generateCookiesSoldEachHour: function(){
           this.generateCustomersEachHour(); //this generates an array of customers
       
    
            for(var i=0; i<storeHours.length; i++) {
                var cookiesSoldThisHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
    
                this.totalCookiesForTheDay += cookiesSoldThisHour;
    
                this.cookiesSoldEachHour.push(cookiesSoldThisHour);
    
            }
    },


    render: function(){
        var parentSection = document.getElementById('paris');
        //create h2
        var headingParis = document.createElement('h2');
        // fill it with content - this.name
        headingParis.textContent = this.name;
        // append it to the parent 
        parentSection.appendChild(headingParis);
       

        //get the ul with the id of seattle-sales from the dom - that is going to our parent element
        var salesList = document.getElementById('paris-sales');

        for(var i=0; i<this.cookiesSoldEachHour.length; i++) {
            // create an li
            var liElement = document.createElement('li');
            // fill it with content from cookies sold each hour
            liElement.textContent = `${storeHours[i]}: ${this.cookiesSoldEachHour[i]} cookies;`
             //${} -contain a variable inline with a string

            salesList.appendChild(liElement);
        }
    }
}


    var lima = {
        name: 'lima',
        minimumCustomersPerHour: 2,
        maximumCustomersPerHour: 16,
        averageCookiesPerCustomer: 4.6,
        totalCookiesForTheDay: 0,
        // a random number between my minimum and my maximum
        customersEachHour: [],
        // in order to get a cookies sold each hour array, we are going to need to loop over a customers each hour array and multiply that by the average cookies they buy
        // [23, 45, 67, 24...] * 6.3
        cookiesSoldEachHour: [],  // this is our money array
    
        generateCustomersEachHour: function (){ 
            // generate the customersEachHour array // get a random number somewhere between the min and max and put that random number into the customersEachHour array for each hour
            for(var i=0; i<storeHours.length; i++){
                 var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);
    
                this.customersEachHour.push(randomNumber);   
            }     
       },
       generateCookiesSoldEachHour: function(){
           this.generateCustomersEachHour(); //this generates an array of customers
       
    
            for(var i=0; i<storeHours.length; i++) {
                var cookiesSoldThisHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
    
                this.totalCookiesForTheDay += cookiesSoldThisHour;
    
                this.cookiesSoldEachHour.push(cookiesSoldThisHour);
    
            }
    }, 

    render: function(){
            var parentSection = document.getElementById('lima');
            //create h2
            var headingLima = document.createElement('h2');
            // fill it with content - this.name
            headingLima.textContent = this.name;
            // append it to the parent 
            parentSection.appendChild(headingLima);
           
    
            //get the ul with the id of seattle-sales from the dom - that is going to our parent element
            var salesList = document.getElementById('lima-sales');
    
            for(var i=0; i<this.cookiesSoldEachHour.length; i++) {
                // create an li
                var liElement = document.createElement('li');
                // fill it with content from cookies sold each hour
                liElement.textContent = `${storeHours[i]}: ${this.cookiesSoldEachHour[i]} cookies;`
                 //${} -contain a variable inline with a string
    
                salesList.appendChild(liElement);
            }
        }
    }
    
seattle.generateCookiesSoldEachHour();
tokyo.generateCookiesSoldEachHour();
dubai.generateCookiesSoldEachHour();
paris.generateCookiesSoldEachHour();
lima.generateCookiesSoldEachHour();




// // starting numbers given
// // stores Location ('Seattle', 23, 65, 6.3);
// stores Location ('Tokyo', 3, 24, 1.2);
// stores Location ('Dubai', 11, 38, 3.7);
// stores Location ('Paris', 20, 28, 2.3);
// stores Location ('Lima', 2, 16, 4.6);


