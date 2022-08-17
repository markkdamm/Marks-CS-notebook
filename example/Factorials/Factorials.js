function factorial(n){
    let t=1;
    let r=n;

  if(n<=1){
      r = n;
      console.log(r)
    }
  else{
     while(n>t){
      r = r * (n-t)
      console.log(r)
      t++;
    }}}

    
factorial(1)

