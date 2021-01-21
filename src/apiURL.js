const getWeatherUrl = (latitude, longitude) =>
  `http://api.weatherstack.com/current?access_key=4df9732f438a489044a9560d72e07a25&query=${latitude},${longitude}`;

const getMapUrl = address =>
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoic2F5YWthc2F5YWthIiwiYSI6ImNrazBoeTAxcTBkeHgycHBicnhqMm5iOHAifQ.y1VOFAxUYhzgaXhhWCFfuA&limit=1`;

module.exports = { getWeatherUrl, getMapUrl };
