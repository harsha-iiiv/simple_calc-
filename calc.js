var d = document.getElementById('display');
 
var cal = (x)=> {
     if ( x === 'ac')
   {

      d.value = '';
   }
else if (x === 'eval')
     {
         d.value = Math.round(eval(d.value)*10000000)/10000000;
   
    }
else 
  {
         d.value += x;
  }

}

