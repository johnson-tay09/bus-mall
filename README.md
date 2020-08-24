# bus-mall
LAB 11

## Overview

The bus-mall application prompts the user to select one of three products they are more likely to buy. The products are selected at random using random math from 19 possible object instances. The user is allowed to vote 25 times but this number is assigned to a variable that can be adjusted. The application is listening for the 'click' event and then incrementing the vote count for that product by targeting its name 'alt' attribute and the total user votes. Each item that is clicked on has its vote count and view count properties updated in the product array. When the total votes equal the maximum votes set by our variable, the application removes the event listener and appends the DOM to display a series of sentences. The display includes each product name, the number of times it was shown to a user and the number of times it was voted on as well as its show to vote percentage. The app will then send this data to local storage using JSON stringify and localStorage.setItem. When the page is refreshed for a new user the app will check if the local storage is empty. If it is not empty the app will parse the data in local storage and make the products array equal to the stored products in order to keep a running total of each vote and show count.

## Sources

- https://coolors.co/0d0630-18314f-384e77-8bbeb2-e6f9af
- https://www.w3schools.com/css/css_list.asp
