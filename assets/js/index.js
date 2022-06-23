const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const btn = document.getElementById('btn');
btn.addEventListener('click', function onClick(event) {
 
    event.target.style.backgroundColor =  'dodgerblue';
  });

  function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }

  const apiURL="https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,sexist&type=single"

  let getJoke = () =>{
    fetch(apiURL)
    .then(data => data.json())
    .then(item => {
        jokeEl.textContent = `${item.joke}`;
        
    });
}

jokeBtn.addEventListener("click",getJoke);
getJoke()