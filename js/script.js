document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)


function validaFormulario(){
  var nome= document.getElementById("nome").value;
  var email= document.getElementById("email").value;
  var fone= document.getElementById("fone").value;

  if (nome !="" && email !="" && fone !=""){
    alert("Prontinho! Você receberá as novidades por email!")
  }else {
    alert("Por favor, preencha os campos nome, email e celular!")
  }
}

