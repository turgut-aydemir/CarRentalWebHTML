// Get current location
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

// Initialize map and directions service
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
    });
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
        map,
    });

    // Get current location and display route to destination
    document.getElementById("submit").addEventListener("click", async () => {
        const destination = document.getElementById("destination").value;
        const { coords } = await getCurrentLocation();
        const origin = new google.maps.LatLng(coords.latitude, coords.longitude);
        const request = {
            origin,
            destination,
            travelMode: "DRIVING",
        };
        directionsService.route(request, (result, status) => {
            if (status == "OK") {
                directionsRenderer.setDirections(result);
            } else {
                alert("Directions request failed due to " + status);
            }
        });
    });
}
