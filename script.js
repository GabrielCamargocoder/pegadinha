function adivinhar(){

    var numero = document.getElementById('num')

    var btn = Number(num.value)

   
    
    var res = document.querySelector('div#res')
    res.style.font = 'normal 30pt Arial'
    res.style.color = 'grey'
   
    

    if(btn < 0 || btn >10){

        res = alert("Insira um numero de 1 a 10 seu(a) animal!")
    }else{

        res.innerHTML= ` O numero que você digitou é <br>${btn}`
        
               
    }
}