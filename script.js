const form = document.querySelector("#form-habits") //Registro de memória
const nlwSetup = new NLWSetup(form) //Registro de memória
const button = document.querySelector('header button') //Registro de memória

button.addEventListener('click', add) //Registro em memória do evento de 'click'
form.addEventListener('change', save) //Registro em memória uma alteração

function add(){ //Func para adicionar um dia

  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if(dayExists) {
    alert("Dia já incluso! 🔴")
    return
  }

  alert("Dia adicionado com sucesso! ✅")

  nlwSetup.addDay(today)
}

function save(){ //Func para salvar os dados do dia na memória
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {} //Pega as informações já previamente gravadas e retorna em forma de txt
nlwSetup.setData(data)
nlwSetup.load()
