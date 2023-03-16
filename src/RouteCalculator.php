<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Google Maps Directions</title>
    <style>
      #map {
        height: 400px;
        width: 100%;
      }
    </style>
  </head>
  <body>
    <h1>Google Maps Directions</h1>
    <div id="map"></div>
    <label for="destination">Enter destination address:</label>
    <input type="text" id="destination" placeholder="Enter destination address">
    <button id="submit">Get Directions</button>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
    <script src="script.js"></script>
  </body>
</html>
