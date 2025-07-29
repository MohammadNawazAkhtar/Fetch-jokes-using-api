async function getJokes() {
  let fetchJoke = await fetch('https://official-joke-api.appspot.com/jokes/random')
  let joke = await fetchJoke.json()
  return joke
}
let loader = document.querySelector('.loader')
let loaderBG = document.querySelector('.loaderBG')
let header = document.querySelector('header')

let generateJokeButton = document.querySelector('.generate-joke')
generateJokeButton.addEventListener('click', generateModules)

function generateModules() {
  loader.classList.toggle('hide-element')
  loaderBG.classList.toggle('hide-element')
  generateJokeButton.innerText = 'RE-GENERATE'
  let oldLoading = document.querySelector('.loading')
  if (oldLoading) {
    oldLoading.remove()
  }
  let loading = document.createElement('div')
  loading.classList.add('loading')
  header.insertAdjacentElement('afterend', loading)
  // setup div element added
  let setupDiv = document.createElement('div')
  setupDiv.classList.add('setup')
  loading.append(setupDiv)
  let textSpan = document.createElement('span')
  textSpan.classList.add('text')
  textSpan.innerText = 'Think:'
  setupDiv.append(textSpan)
  let contentSpan = document.createElement('span')
  contentSpan.classList.add('joke-content', 'gen-text')
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
  contentSpan2.classList.add('twist-content', 'gen-text')
  punchlineDiv.append(contentSpan2)
  // Button element added
  let revealTwistButton = document.createElement('button')
  revealTwistButton.classList.add('show-twist')
  revealTwistButton.innerText = 'REVEAL TWIST'
  loading.append(revealTwistButton)
  // Getting Jokes 
  getJokes().then(joke => {
    contentSpan.innerText = joke.setup
    contentSpan2.innerText = joke.punchline
    contentSpan2.style.display = 'none'
    revealTwistButton.addEventListener('click', function() {
      if (contentSpan2.style.display === 'none') {
        contentSpan2.style.display = 'inline'
      } else {
        contentSpan2.style.display = 'none'
      }
    })
  })
  setTimeout(function() {
    loader.classList.toggle('hide-element')
    loaderBG.classList.toggle('hide-element')
  }, 1000)
}