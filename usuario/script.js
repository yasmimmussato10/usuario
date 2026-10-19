const nome= document.getElementById("nome");
const senha= document.getElementById("senha");
const Confirmar= document.getElementById("Confirmar");
const email= document.getElementById("email");
const idade= document.getElementById("idade");
const numero= document.getElementById("numero");
 
confirmar.addEventListener("click", function(){
    const nomeUsuario=usuario.value;
    const senhadigitada=senha.value;

    if(nomeUsuario === "admin" && senhaDigitada === "1234"){
        alert("login realizado com sucesso!");
    }else{
        alert("usuario ou senha incorretos!");
    }
});

if (nomeUsuario === "" || senhaDigitada === " "){
    alert("Preencha todos ps campos!");
}s

