async function getJokes() {
  let fetchJoke = await fetch('https://official-joke-api.appspot.com/jokes/random')
  let joke = await fetchJoke.json()
  for(let key in joke){
    console.log(key, joke[key])
  }
}
getJokes()

document.querySelector('.generate-joke').addEventListener('click', generateModules)

function generateModules(){
  let loading = document.querySelector('.loading')
}