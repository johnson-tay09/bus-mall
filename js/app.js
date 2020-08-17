'use strict';
var imageContainer = document.getElementById('product-container');


//   // I'm gonna need a constructor function
//     // filepath
//     // alt
//     // title
var productArray = [];
  
function Product(name){
  this.filepath = `../img/${name}.jpg`;
  this.alt = name;
  this.title = name;
  this.clicks = 0;

  productArray.push(this);
}

new Product('../img/bag.jpg');
new Product('../img/banana.jpg');
new Product('../img/bathroom.jpg');
new Product('../img/boots.jpg');
new Product('../img/breakfast.jpg');
new Product('../img/bubblegum.jpg');
new Product('../img/chair.jpg');
new Product('../img/cthulhu.jpg');
new Product('../img/dog-duck.jpg');
new Product('../img/dragon.jgp');
new Product('../img/pen.jpg');
new Product('../img/pet-sweep.jpg');
new Product('../img/scissors.jpg');
new Product('../img/shark.jpg');
new Product('../img/sweep.jpg');
new Product('../img/tauntaun.jpg';
new Product('../img/unicorn.jpg');
new Product('../img/usb.jpg';
new Product('../img/water-can.jpg');
new Product('../img/wine-glass');

// // create a function that will get a random image
//   // get a random number between 0 and the length of the catArray
//   // assign that random number to index number in the catArray
//   // that will be that image that we show

// function getRandomImage(){
//   // get a random number from the helper function betweet 0 and one less than the length of the array
//   var randomIndex = getRandomNumber(catArray.length);

//   // use that random number as the index for our catArray
//   var chosenImage = catArray[randomIndex];

//   // create an img tag
//   var imageElement = document.createElement('img');
//   // give that img tag a src = the path of where my image is
//   imageElement.setAttribute('src', chosenImage.filepath);
//   // give the img tag an alt
//   imageElement.setAttribute('alt', chosenImage.alt);
//   // give the img tag a title
//   imageElement.setAttribute('title', chosenImage.title);
//   // append it to the parent
//   parentElement.appendChild(imageElement);
// }

// // helper function - got this from mdn
// function getRandomNumber(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// function handleClick(event){
//   console.log('an image was clicked');
//   // figure out what was clicked on
//   console.log('this is my event.target.alt', event.target.alt)
//   var alt = event.target.alt;

//   // loop through my catsArray until I find the alt that matches my alt
//   for(var i=0; i<catArray.length; i++){
//     if(alt === catArray[i].alt){
//       catArray[i].clicks++;
//     }
//   }
//   // once I've found my object instance
//     // increment the clicks on that object instance

//   parentElement.innerHTML = '';
//   getRandomImage();
//   getRandomImage();
// }

// parentElement.addEventListener('click', handleClick);

// // initally generates the images on page load
// getRandomImage();
// getRandomImage();