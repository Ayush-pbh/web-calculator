//scale test
$(document).ready(function(){
  $('.el-tilt').tilt({
    scale: 1.1,
    glare: true,
    maxGlare: 0.5
  })
  $('.equal').tilt({
    scale: 1.2
    // glare: true,
    // maxGlare: 0.5
  })
 });

 var otpt = 0, //the output
     curstr = "",//the live string that is displayed on the input bar
     func = "",//the current function (+,-,*,/)
     stream = document.getElementById('input'),
     n1 = "",
     n2 = "",
     f = "";



function updateCurr(str){
  curstr+=str;
  switch(str){
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      setVar('n',str);
    break;
    case '.':
      
    break;
    case 'C':
      //clearing the stream.
      curstr = otpt = func = n1 = n2 = f= "";
    break;
    case '+':
    case '-':
    case '*':
    case '/':
      setVar('f',str);
    break;
    case '=':
      calcStream();
      curstr = n1;
    break;
  }
  refreshStream();
}
 
function refreshStream(){
  stream.innerHTML = curstr;
}

function calcStream(){
  var nn1 = parseFloat(n1),
      nn2 = parseFloat(n2),toret;
  switch(f){
    case '+':
    toret= nn1 + nn2;
    break;
    case '-':
    toret= nn1 - nn2;
    break;
    case '*':
    toret= nn1 * nn2;
    break;
    case '/':
    toret= nn1 / nn2;
  }
  n1 = toret.toString();
  n2 = "",f="";
}

function setVar(sw,str){
  switch(sw){
    case 'n':
    if(f.length==0){
      n1+=str;
    }
    else{
      n2+=str;
    }
    break;
    case 'f':
      if(!n2.length==0){
        calcStream();
      }
      f=str;
    break;
  }
}