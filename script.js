function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = (`Agora são <strong>${hora} horas e ${minuto} minutos.</strong>`)
       // if (minuto < 10) {
        //msg.innerHTML = `Agora são: <strong>${hora}:0${minuto}</strong>.` 
        //}
    if (hora >= 6 && hora < 12) {
        //bom dia
        foto.src = 'FOTOMANHA.jpg'
        document.body.style.background = '#fde344'
    }else if (hora >= 12 && hora < 18) {
        // boa tarde
        foto.src = 'FOTOTARDE.jpg'
        document.body.style.background = '#f1663e'
    }else  {
        // boa noite
        foto.src = 'FOTONOITE.jpg'
        document.body.style.background = '#1c1e38'
        
    }
}
