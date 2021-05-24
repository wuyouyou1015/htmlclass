"using strict;"
//window.alert("connected");
//add click handler for button
document.getElementById("forecast").addEventListener("click", getData);
function getData()
{
	//console.log("clicked");
	//get zipcode
	var zipcode = document.getElementById("zipcode").value;
	//console.log(zipcode);
	getWeather(zipcode);
}
function getWeather(zip)
{
	//console.log("zip is " + zip);
	var endpoint = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey = "1307007a7da1aeb5b59930a312a42cd3";
	var queryString = "zip=" + zip + "&units=imperial&appid=" + apiKey;
	var url = endpoint + "?" + queryString;
	//console.log("url is " + url);
	//create object
	var xhr = new XMLHttpRequest();
	//set up action response
	xhr.addEventListener("load", responseReceivedHandler);
	//required for Jason
	xhr.responseType = "json";
	//open connection
	xhr.open("GET", url);
	//send the data
	xhr.send();
	
}

function responseReceivedHandler()
 {
	var weatherInfo = document.getElementById("weatherInfo");
	if(this.status === 200) 
	{
		//console.log(this.response.name);
		//console.log("city is " + this.response.name);
		//console.log ("temp is " + this.response.main.temp);
		//console.log("description is " + this.response.weather[0].description);
		//console.log("temp is " + this.response.main.temp);

	    weatherInfo.innerHTML = "<p>City: " + this.response.name + "</p>" + "<p>Current temp: " + this.response.main.temp + "&deg;F</p>" + this.response.weather[0].description + "</p>" + "<p>Humidity: " + this.response.main.humidity + "%</p>";
	 }
	 else
	 {
	 	weatherInfo.innerHTML = "Weather data unavailable.";

	 }

   }