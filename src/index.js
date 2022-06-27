import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { converter } from './../src/kelvinsToFahrenheit.js';
import { checkNumber } from './../src/kelvinsToFahrenheit.js';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");
    $('#zip').val("");


    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response1 = JSON.parse(this.responseText);
        getElements(response1);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showName').text(`City: ${response.name}`);
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Fahrenheit is ${converter(response.main.temp)} degrees.`);
      $('.showWind').text(`The wind speed is ${response.wind.speed} m/s.`);
    }
  });
  $('#weatherLocationZip').click(function(){
    const zip = $('#zip').val();
    $('#zip').val("");

    try {
      const isNumberValid = checkNumber(zip);
      if (isNumberValid instanceof Error) {
        console.error(isNumberValid.message);
        throw RangeError("Not a valid number!");
      } else {
        console.log("Try was successful, so no need to catch!");
        $('#displayNumber').text("This number is valid. You may continue.");
      }
    } catch(error) {
      alert(`Red alert! We have an error: ${error.message}`);
    }


    let request1 = new XMLHttpRequest();
    const url2 = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${process.env.API_KEY}`;

    request1.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response1 = JSON.parse(this.responseText);
        getElements(response1);
      }
    };

    request1.open("GET", url2, true);
    request1.send();

    function getElements(response1) {
      $('.showName').text(`City: ${response1.name}`);
      $('.showHumidity').text(`The humidity in ${zip} is ${response1.main.humidity}%`);
      $('.showTemp').text(`The temperature in Fahrenheit is ${converter(response1.main.temp)} degrees.`);
      $('.showWind').text(`The wind speed is ${response1.wind.speed} m/s.`);
    }
  });
});