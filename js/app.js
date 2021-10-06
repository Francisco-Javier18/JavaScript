var Calculadora = {
  uno: document.getElementById("1"),
  dos: document.getElementById("2"),
  tres: document.getElementById("3"),
  cuatro: document.getElementById("4"),
  cinco: document.getElementById("5"),
  seis: document.getElementById("6"),
  siete: document.getElementById("7"),
  ocho: document.getElementById("8"),
  nueve: document.getElementById("9"),
  cero: document.getElementById("0"),
  on: document.getElementById("on"),
  sign: document.getElementById("sign"),
  dividido: document.getElementById("dividido"),
  por: document.getElementById("por"),
  menos: document.getElementById("menos"),
  mas: document.getElementById("mas"),
  punto: document.getElementById("punto"),
  igual: document.getElementById("igual"),
  resultado: document.getElementById("display"),
  teclas: document.getElementsByClassName("tecla"),
  operandoA: 0,
  operandoB: 0,
  operacion: "",

  evento: function(){
    this.uno.onclick=this.eventUno
    this.dos.onclick=this.eventDos
    this.tres.onclick=this.eventTres
    this.cuatro.onclick=this.eventCuatro
    this.cinco.onclick=this.eventCinco
    this.seis.onclick=this.eventSeis
    this.siete.onclick=this.eventSiete
    this.ocho.onclick=this.eventOcho
    this.nueve.onclick=this.eventNueve
    this.cero.onclick=this.eventCero

    this.on.onclick=this.eventOn
    this.sign.onclick=this.eventSign
    this.punto.onclick=this.eventPunto
    this.igual.onclick=this.eventIgual
    this.mas.onclick=this.eventMas
    this.menos.onclick=this.eventMenos
    this.por.onclick=this.eventPor
    this.dividido.onclick=this.eventDividido
    this.tamaño()
  },
  tamaño: function(){
    for(let i = 0; i < this.teclas.length; i++){
        Calculadora.teclas[i].onmousedown=function(){
          Calculadora.teclas[i].style.transform="perspective(100px) translatez(-0.5vw)"
        }
        Calculadora.teclas[i].onmouseup=function(){
          Calculadora.teclas[i].style.transform="none"
        }
    }
  },
  eventCero:function(){
      if((Calculadora.resultado.innerHTML.length==1)&&(Calculadora.resultado.innerHTML[0]=="0") ){
        Calculadora.resultado.innerHTML="0"
      }else{
        Calculadora.resultado.innerHTML=Calculadora.resultado.innerHTML + "0"
      }
  },
  eventUno:function(){
      if((Calculadora.resultado.innerHTML.length==1)&&(Calculadora.resultado.innerHTML[0]=="0") ) {
        Calculadora.resultado.innerHTML="1"
      }else{
        Calculadora.resultado.innerHTML=Calculadora.resultado.innerHTML + "1"
      }
  },
  eventDos:function(){
      if((Calculadora.resultado.innerHTML.length==1)&&(Calculadora.resultado.innerHTML[0]=="0") ){
        Calculadora.resultado.innerHTML="2"
      }else{
        Calculadora.resultado.innerHTML=Calculadora.resultado.innerHTML + "2"
      }
  },
  eventTres:function(){
      if((Calculadora.resultado.innerHTML.length==1)&&(Calculadora.resultado.innerHTML[0]=="0") ){
        Calculadora.resultado.innerHTML="3"
      }else{
        Calculadora.resultado.innerHTML=Calculadora.resultado.innerHTML + "3"
      }
  },
  eventCuatro:function(){
      if((Calculadora.resultado.innerHTML.length==1)&&(Calculadora.resultado.innerHTML[0]=="0") ){
        Calculadora.resultado.innerHTML="4"
      }else{
        Calculadora.resultado.innerHTML=Calculadora.resultado.innerHTML + "4"
      }
  },
  eventCinco:function(){
      if((Calculadora.resultado.innerHTML.length==1)&&(Calculadora.resultado.innerHTML[0]=="0") ){
        Calculadora.resultado.innerHTML="5"
      }else{
        Calculadora.resultado.innerHTML=Calculadora.resultado.innerHTML + "5"
      }
  },
  eventSeis:function(){
      if((Calculadora.resultado.innerHTML.length==1)&&(Calculadora.resultado.innerHTML[0]=="0") ){
        Calculadora.resultado.innerHTML="6"
      }else{
        Calculadora.resultado.innerHTML=Calculadora.resultado.innerHTML + "6"
      }
  },
  eventSiete:function(){
      if((Calculadora.resultado.innerHTML.length==1)&&(Calculadora.resultado.innerHTML[0]=="0") ){
        Calculadora.resultado.innerHTML="7"
      }else{
        Calculadora.resultado.innerHTML=Calculadora.resultado.innerHTML + "7"
      }
  },
  eventOcho:function(){
      if((Calculadora.resultado.innerHTML.length==1)&&(Calculadora.resultado.innerHTML[0]=="0") ){
        Calculadora.resultado.innerHTML="8"
      }else{
        Calculadora.resultado.innerHTML=Calculadora.resultado.innerHTML + "8"
      }
  },
  eventNueve:function(){
      if((Calculadora.resultado.innerHTML.length==1)&&(Calculadora.resultado.innerHTML[0]=="0") ){
        Calculadora.resultado.innerHTML="9"
      }else{
        Calculadora.resultado.innerHTML=Calculadora.resultado.innerHTML + "9"
      }
    }
}

Calculadora.evento()
