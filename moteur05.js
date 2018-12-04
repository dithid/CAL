  //Initialisation des constantes et variables

const dgram = require("dgram");
const oscmsg = require("osc-msg");
var valeur1;
var valeur2;
var GPIO = require('onoff').Gpio,
    moteurM = new GPIO(4, 'out'); 
    moteurD = new GPIO(17, 'out'); 
    LedR = new GPIO(22, 'out');
const socket = dgram.createSocket("udp4");
 

  //Lecture des ports
  
socket.on("message", (buffer) => {
  const bundle = oscmsg.decode(buffer, { strict: true, strip: true, bundle: true });
 
  if (bundle.error) {
    return;
  }
 
  bundle.elements.forEach((message) => {
    //recuperation et traitement des données OSC de TD
    data=JSON.stringify(message);
    dataparse=JSON.parse(data);
    valeurparse=dataparse.elements[0].args;
    addressparse=dataparse.elements[0].address;
    console.log(addressparse);

    valeur=valeurparse[0];
    if (addressparse === "/chan1"){
      valeur1=valeurparse[0];
         console.log(valeur1 + "valeur1");
    }

    if(addressparse === "/chan2"){
      valeur2=valeurparse[0];
      console.log(valeur2 + "valeur2");
    }

 
    
  

  //traitement de la variable moteur pour activer le moteur
  if(valeur1 > 0.80){
  moteurM.writeSync(1);
  
  } else if(valeur1 < 0.50) {
  moteurD.writeSync(1);
  
  } else {
  moteurM.writeSync(0);
  moteurD.writeSync(0);
  }

  
  if(valeur2 != 0){
    LedR.writeSync(1);
  }
  else {
    LedR.writeSync(0);
  }
	});




});
 
socket.bind(9998);

