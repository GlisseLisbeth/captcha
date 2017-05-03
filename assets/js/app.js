var recaptcha = document.getElementById('recaptcha');

window.addEventListener('load', function(){
      recaptcha.textContent = codigo_aleatorio();
      recaptcha.style.color = color();
});

document.getElementById('check').addEventListener('click',function(){
  if(document.getElementById('entrada-recaptcha').innerHTML == recaptcha.innerHTML ){
    alert("Recaptcha exitoso");
  }
  else{
    alert("Vuelve a ingresar los datos");
    document.getElementById('entrada-recaptcha').focus();
  }
});

document.getElementById('refresh').addEventListener('click',function(){
  recaptcha.textContent = codigo_aleatorio();
  recaptcha.style.color = color();
});


function codigo_aleatorio(){
code = "";
chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚáéíóú";
  for (x=0; x < 7; x++)
  {
    rand = Math.floor(Math.random()*chars.length);
    code += chars.substr(rand, 1);
  }
  return code;
}


function color(){
  r=Math.round(Math.random()*255);
  g=Math.round(Math.random()*255);
  b=Math.round(Math.random()*255);
  return "rgb("+r+","+g+","+b+")";
}
