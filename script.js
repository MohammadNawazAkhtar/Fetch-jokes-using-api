async function getJokes() {
  let fetchJoke = await fetch('https://official-joke-api.appspot.com/jokes/random')
  let joke = await fetchJoke.json()
  for(let key in joke){
    console.log(key, joke[key])
  }
}
getJokes()
