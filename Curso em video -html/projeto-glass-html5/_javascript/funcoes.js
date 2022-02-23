function mudaFoto(tipo){
    var img = document.getElementById("icone")
    
    

    if(tipo==1){
        img.src = '_imagens/home.png'
    }

    
    else if(tipo==2){
        img.src = '_imagens/especificacoes.png'
    }

    else if(tipo==3){
        img.src = '_imagens/fotos.png'
    }

    else if(tipo==4){
        img.src = '_imagens/multimidia.png'
    }

    else if(tipo==5){
        img.src = '_imagens/contato.png'
    }

    else if(tipo==6){
        img.src = '_imagens/glass-oculos-preto-peq.png'
    }
}