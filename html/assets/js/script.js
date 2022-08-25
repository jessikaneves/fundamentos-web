
/*
Case Sensitive = reconhece letras maiusculas e minusculas
por Tag: getElementByTagName()
por Id:  getElementById()
por Nome: getElementByName()
por classe: getElementByClassName()
por seletor:  queryselector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let EmailOk = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'


function validaNome()  {
   let txtNome = document.querySelector('#txtNome')
   if (nome.Value.length <3) {
       txtNome.innerHTML = 'Nome Inválido'
       txtNome.style.color = 'red'
   } else {
    txtNome.innerHTML = 'Nome Válido'
    txtNome.style.color = 'green'
    nomeOk = true
   }

}

function validaEmail () {
   let txtEmail = document.querySelector('#txtemail')
    if (email.value.indexOf('@') == -1  || email.value.indexOF('.') == -1 ) {
     txtEmail.innerHTML = 'E-mail inválido'
     txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true

    }
}

function validaAssunto () {
    let txtAssunto =  document.querySelector('#txtassunto')

    if(assunto.value.length >= 100) {
       txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
       txtAssunto.style.color = 'red'
       txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'nome'
        assuntoOk = true
    }
}
 
function enviar () {
    if (nomeOk == true &&  emailOk == true && assuntoOK == true) {
    alert ('Formulário enviado com sucesso!')
    } else {
        alert (' Preencha o formulário corretamente antes de enviar...')
    }
}

function mapazoom (){
   mapa.style.width = '800px'
   mapa.style.height = '600px'

}

function mapanormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'

}