console.log("This is a popup!")

function fetchRandomReddit() {
    fetch("https://www.reddit.com/r/random")
      .then(response => {
        if (response.ok) {
            console.log(response.url)
            window.open(response.url, '_blank');
            return response.text();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        console.log('asdf');
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

window.onload = function() {
    document.getElementById('fetchButton').addEventListener('click', fetchRandomReddit);
}