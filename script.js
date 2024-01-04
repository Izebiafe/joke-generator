jokeEl = document.getElementById('joke');
jokeBtn = document.getElementById('joke-btn');

function generateJokes() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.onload = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeEl.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeEl.innerHTML = 'Something went wrong';
      }
    }
  };
  xhr.send();
}

document.addEventListener('click', generateJokes);
document.addEventListener('DOMContentLoaded', generateJokes);
