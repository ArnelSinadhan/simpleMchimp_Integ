document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;

    fetch("http://localhost:3000/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          document.querySelector(
            ".status"
          ).innerHTML = `<p style="color: green;">${data.message}</p>`;
        } else {
          document.querySelector(
            ".status"
          ).innerHTML = `<p style="color: red;">${data.error}</p>`;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        document.querySelector(".status").innerHTML =
          '<p style="color: red;">An error occurred. Please try again.</p>';
      });
  });

  let map;
        let geocoder;
        let locationInput = document.getElementById("location-input");

        function initMap() {
            // Create a new map centered at a default location
            map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 37.7749, lng: -122.4194 }, // Default center (San Francisco)
                zoom: 8,
            });

            // Initialize Geocoder
            geocoder = new google.maps.Geocoder();

            // Add a click event listener to the map
            map.addListener("click", function(event) {
                let clickedLatLng = event.latLng;

                // Reverse geocode the clicked location
                geocodeLatLng(geocoder, clickedLatLng);
            });
        }

        function geocodeLatLng(geocoder, latLng) {
            geocoder.geocode({ location: latLng }, function(results, status) {
                if (status === "OK") {
                    if (results[0]) {
                        // If an address is found, set it in the text input
                        locationInput.value = results[0].formatted_address;
                    } else {
                        locationInput.value = "No address found";
                    }
                } else {
                    locationInput.value = "Geocoder failed: " + status;
                }
            });
        }
