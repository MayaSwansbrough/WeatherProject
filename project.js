// Create an integer variable for homeTemp

function getWeather(city, callback) {
    var url = 'http://api.openweathermap.org/data/2.5/weather';
    $.ajax({
      dataType: "jsonp",
      url: url,
      jsonCallback: 'jsonp',
      data: { q: city },
      cache: false,
      success: function (data) {
        callback(data.main.temp);
        console.log(getWeather);
      }
    });
  }
  
// Create a string variable for homeCity
// Create a list of exotic locales for exoticCity
// Match exoticCity with a integer variable of exoticTemp
// Ask the user "Where do you live?" and put answer for homeCity
// Create a function where homeCity pulls homeTemp from API
// Tell user "In " homeCity " it is currently " homeTemp
// Tell user "In " exoticCity " it is currently " exoticTemp