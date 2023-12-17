const name = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
  let messages = []
  if (firstname.value === '' || firstname.value == null){
    messages.push('Namn krävs.')
  }

  if (messages.length > 0){
  e.preventDefault()
  errorElement.innerText = messages.join(', ')
  }
})

const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
