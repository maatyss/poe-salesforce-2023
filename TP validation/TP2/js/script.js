let newsForm = document.querySelector('form')
let newsMail = document.querySelector('#mail')
let newsBtn = document.querySelector('#newsBtn')
let messageNews = document.createElement('p')

let errorDisplay = false
newsBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (newsMail.value.length < 10) {
    if (!errorDisplay) addError()
  } else {
    addSuccess()
  }
})


const addError = () => {
  messageNews.innerText = 'Le champ doit contenir au moins 10 caractères'
  messageNews.classList.add('errorText')
  
  errorDisplay = true
  
  newsMail.classList.add('errorBorder')
  newsBtn.classList.add('errorBtn')
  newsBtn.classList.add('errorBorder')
  
  newsForm.querySelector('div').appendChild(messageNews)
}

const addSuccess = () => {
  messageNews.remove()
  errorDisplay = false
  
  messageNews.classList.remove('errorText')
  newsMail.classList.remove('errorBorder')
  newsBtn.classList.remove('errorBtn')
  newsBtn.classList.remove('errorBorder')
  
  messageNews.innerText = 'Vous avez bien été inscrit à la newsletter !'
  messageNews.classList.add('success')
  
  newsForm.querySelector('div').innerHTML = ''
  newsForm.querySelector('div').appendChild(messageNews)
}