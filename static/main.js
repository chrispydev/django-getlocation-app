function sendLocation(location) {
  let csrfToken = getCookie("csrftoken");
  fetch("/location/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrfToken, // Include the CSRF token for Django's protection
    },
    body: JSON.stringify({ location: location }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((data) => {
      // Handle the response data as needed
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var location = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  sendLocation(location);

  console.log(latitude, longitude);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

getLocation();

// Function to get CSRF cookie value
function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
