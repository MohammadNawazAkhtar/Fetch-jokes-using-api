async function getJokes() {
  let fetchJoke = await fetch('https://official-joke-api.appspot.com/jokes/random')
  let joke = await fetchJoke.json()
  for (let key in joke) {
    console.log(key, joke[key])
  }
}
getJokes()

document.querySelector('.generate-joke').addEventListener('click', generateModules)
let loading = document.querySelector('.loading')
function generateModules() {
  
  /*
  loading.innerHTML = ''
  // setup div element added
  let setupDiv = document.createElement('div')
  setupDiv.classList.add('setup')
  loading.append(setupDiv)
  let textSpan = document.createElement('span')
  textSpan.classList.add('text')
  textSpan.innerText = 'Think:'
  setupDiv.append(textSpan)
  let contentSpan = document.createElement('span')
  contentSpan.classList.add('joke-content')
  contentSpan.classList.add('gen-text')
  setupDiv.append(contentSpan)
  // punchline div element added 
  let punchlineDiv = document.createElement('div')
  punchlineDiv.classList.add('punchline')
  loading.append(punchlineDiv)
  let textSpan2 = document.createElement('span')
  textSpan2.classList.add('text')
  textSpan2.innerText = 'Twist:'
  punchlineDiv.append(textSpan2)
  let contentSpan2 = document.createElement('span')
  contentSpan2.classList.add('twist-content')
  contentSpan2.classList.add('gen-text')
  punchlineDiv.append(contentSpan2)
  // Button element added
  let revealTwistButton = document.createElement('button')
  revealTwistButton.classList.add('show-twist')
  revealTwistButton.innerText = 'REVEAL TWIST'
  loading.append(revealTwistButton)
  */
  
}