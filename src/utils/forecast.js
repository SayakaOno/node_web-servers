const request = require('request');
const { getWeatherUrl } = require('../apiURL');

const forecast = (latitude, longitude, callback) => {
  const url = getWeatherUrl(latitude, longitude);
  request(
    { url, json: true },
    (
      error,
      {
        body: {
          current: { weather_descriptions, temperature, feelslike },
          error: forecastError
        }
      }
    ) => {
      if (error) {
        callback('Unable to connect to weather service!', error);
      } else if (forecastError) {
        callback('Unable to find location!', forecastError);
      } else {
        callback(
          undefined,
          `${
            weather_descriptions[0]
          }. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`
        );
      }
    }
  );
};

module.exports = forecast;

// request({ url: weatherUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service!');
//   } else if (response.body.error) {
//     console.log('Unable to find location');
//   } else {
//     const {
//       weather_descriptions,
//       temperature,
//       feelslike
//     } = response.body.current;
//     console.log(
//       `${
//         weather_descriptions[0]
//       }. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`
//     );
//   }
// });
