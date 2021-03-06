'use strict';
// parent element for images
var imageContainer = document.getElementById('product-container');
//parent element for data
var dataContainer = document.getElementById('data-container');
//array to stop images repeating 
var uniqueImageArray =[];
//array to store my product object instances
var productArray = [];
//variable for number of votes allowed 
var roundCount = 25;
//click counter
var clickCount = 0;
//array for parsed products
var parsedProductsArray = [];

//Check if local storage is empty
function checkLocalStorage() {
  if (localStorage.getItem('products') === null) {
    //if empty run new products to create object instances
    newProducts();
  } else {
       //get the products from storage
       var getProducts = localStorage.getItem('products');
       //parse back to js from JSON
        var parsedProductsArray = JSON.parse(getProducts);
        //make product array = stored data to keep running total.
        productArray = parsedProductsArray;
  } 
}
checkLocalStorage();

//constructor to create product object instances
function Product(name){
  this.filepath = `../img/${name}.jpg`;
  this.alt = name;
  this.title = name;
  this.clicks = 0;
  this.displayCount = 0;
  productArray.push(this);
}
function newProducts(){
  new Product('bag');
  new Product('banana');
  new Product('bathroom');
  new Product('boots');
  new Product('breakfast');
  new Product('bubblegum');
  new Product('chair');
  new Product('cthulhu');
  new Product('dog-duck');
  new Product('dragon');
  new Product('pen');
  new Product('pet-sweep');
  new Product('scissors');
  new Product('shark');
  new Product('tauntaun');
  new Product('unicorn');
  new Product('water-can');
  new Product('wine-glass');
  //create an object literal for usb & sweep since they arent jpg
  var usb = {
  filepath: '../img/usb.gif',
  alt: 'usb',
  title:'usb',
  clicks: 0,
  displayCount: 0,
}
var sweep = {
  filepath: '../img/sweep.png',
  alt: 'sweep',
  title:'sweep',
  clicks: 0,
  displayCount: 0,
}
//push the objects into the product array
productArray.push(sweep);
productArray.push(usb);
}
//funtion for selecting random index in our product array
function getRandomImage(){
  var randomIndex = getRandomNumber(productArray.length);

  while(uniqueImageArray.includes(randomIndex)){
    randomIndex = getRandomNumber(productArray.length);
  }

  // add the index to the end of the arraay
  uniqueImageArray.push(randomIndex);

  // remove the oldest index from the array - that would be the first index
  if(uniqueImageArray.length > 6){
    uniqueImageArray.shift();
  }
  var chosenImage = productArray[randomIndex];
  chosenImage.displayCount++;
  // create an img element
  var imageElement = document.createElement('img');
  //set the attirbutes of the image
  imageElement.setAttribute('src', chosenImage.filepath);
  imageElement.setAttribute('alt', chosenImage.alt);
  imageElement.setAttribute('name', chosenImage.title);
  //append to parent
  imageContainer.appendChild(imageElement);
}
// random number helper function - got this from mdn
function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//callback function for our event listener
function callbackClick(event){
  //variable to identify alt value of the current target
  var altValue = event.target.alt;
  // loop through my array until I find the alt that matches my alt
  for(var i=0; i<productArray.length; i++){
    //if target alt value matches the array[i] alt value then increase array[i] clicks value.
    if(altValue === productArray[i].alt){
      productArray[i].clicks++;
    }
  }
//reset the html and run the random image function again 3x
  imageContainer.innerHTML = '';
  clickCount++;
  //if statement to stop the event listener from functioning
  if(clickCount === roundCount){
      imageContainer.removeEventListener('click', callbackClick);
      // clickPerItem();
      percentClicked();
      // render graph
      graphResults();
      // convert productArray to JSON strings
      var stringProducts = JSON.stringify(productArray);
      //store products in products label
      localStorage.setItem('products', stringProducts);
      }
    getRandomImage();
    getRandomImage();
    getRandomImage();
  }

// wait for a click then run the callback function
imageContainer.addEventListener('click', callbackClick);

//function to display % of time clicked when displayed
function percentClicked(){
    //create a ul to be the parent
    var listData = document.createElement('ul');  
    dataContainer.appendChild(listData);
    // loop through the array and create an li for each clicks value
    for(var i=0; i<productArray.length; i++){
      // create an li element
      if(productArray[i].displayCount > 0 && productArray[i].clicks > 0){
        var dataElement = document.createElement('li');
        //populate the li with click @ productArry @ i
        var clickMath = Math.round((productArray[i].clicks/productArray[i].displayCount) * 100);
        dataElement.textContent = `The ${productArray[i].alt} was shown ${productArray[i].displayCount} time(s), voted for ${productArray[i].clicks} time(s) or ${clickMath}% of the time it was shown.`;
        //append li to ul
        listData.appendChild(dataElement); 
      }
      else{
        var dataElement = document.createElement('li');
        //populate the li with click @ productArry @ i
        dataElement.textContent = `The ${productArray[i].alt} was shown ${productArray[i].displayCount} time(s) and voted for ${productArray[i].clicks} time(s).`;
        //append li to ul
        listData.appendChild(dataElement);
      }
    }
}
// first set of random images
getRandomImage();
getRandomImage();
getRandomImage();
//graph the number of times a product was shown and voted for.
function graphResults(){
  //store properties that will be graphed.
var productName = [];
var productVotes = [];
var displayTimes = [];
//loop for adding each property to be graphed to their array
  for (var i=0; i<productArray.length; i++){
    productName.push(productArray[i].title);
    productVotes.push(productArray[i].clicks);
    displayTimes.push(productArray[i].displayCount);
  }
  //get parent element
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: productName,
        datasets: [{
            label: '# of Votes',
            data: productVotes,
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',   
            ],
            borderColor: [
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,},
            {label: '# times shown',
            data: displayTimes,
            backgroundColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }]
        
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}



