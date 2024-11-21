const passBox = document.getElementById("password");
    const passLength = 16;
    
    const upperCase = "ASDFGHJKLPOIUYTREWQZXCVBNM";
        const lowerCase = "asdfghjklpoiuytrewqzxcvbnm"
        const number  = "0123456789";
            const symbol = "@#৳%&()][_><?;:!÷|{|}{|$";
            
         const allChars = upperCase + lowerCase + number + symbol ;
            
  function passKey(){
    let password ="";
    while(passLength > password.length){
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passBox.value = password;
  }
  
  function copyPass(){
    passBox.select();
    document.execCommand('copy');
  }
