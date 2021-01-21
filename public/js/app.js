console.log('client side javascript file is loaded');

fetch('/weather?address=boston').then(response => {
  response.json().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location, data.forecast);
    }
  });
});
