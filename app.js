window.onload = () => {
  getCoordintes();
  showTime();
}

// Step 1: Get user coordinates
function getCoordintes() {
	var options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	function success(pos) {
		var crd = pos.coords;
		var lat = crd.latitude.toString();
		var lng = crd.longitude.toString();
		var coordinates = [lat, lng];
		console.log(`Latitude: ${lat}, Longitude: ${lng}`);
		getCity(coordinates);
		return;

	}

	function error(err) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}

	navigator.geolocation.getCurrentPosition(success, error, options);
}

// Step 2: Get city name
function getCity(coordinates) {
	var xhr = new XMLHttpRequest();
	var lat = coordinates[0];
	var lng = coordinates[1];

	// Paste your LocationIQ token below.
	xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=pk.7d8922d3391a263efcedea2ea91feb62&lat=" +
	lat + "&lon=" + lng + "&format=json", true);
	xhr.send();
	xhr.onreadystatechange = processRequest;
	xhr.addEventListener("readystatechange", processRequest, false);

	function processRequest(e) {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var response = JSON.parse(xhr.responseText);
			var city = response.address.city;
			console.log(city);
      document.getElementById('city').textContent = city;
			return;
		}
	}
}




function showTime() {
  //  Date Object to hold value of current date
  let date = new Date();

  // Hours , Mins, Secs properties of the date object
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let am_pm = "";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  } else if (hour == "00") {
    hour = "12";
    am_pm = "AM";
  } else {
    am_pm = "AM";
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }


  let time = hour + ":" + min + ":" + sec + " " + am_pm;
  document.getElementById("clock-container").innerText = time;

  setTimeout(showTime, 1000);
}

