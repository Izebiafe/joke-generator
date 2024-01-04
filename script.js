const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
xhr.send();
xhr.onload = () => {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    document.querySelector('.joke').innerHTML = data.value;
  }
  if (xhr.status === 404) {
    document.querySelector('.joke').innerHTML = 'Joke not found';
  }
  if (xhr.status === 500) {
    document.querySelector('.joke').innerHTML = 'Server error';
  }
  document.querySelector('.btn').addEventListener('click', () => {
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        document.querySelector('.joke').innerHTML = data.value;
      }
      if (xhr.status === 404) {
        document.querySelector('.joke').innerHTML = 'Joke not found';
      }
      if (xhr.status === 500) {
        document.querySelector('.joke').innerHTML = 'Server error';
      }
    };
  });
};
