function validateEmail(email){
   if(!email){
      return false;
   }
   if(typeof email !== 'string'){
      return false;
   }
   if (+email === 0){
      return false;
   }
   let checkCharacters = email.split('');
   if (!checkCharacters.includes('@') 
      || checkCharacters[0] === '@'){
      return false;
   }
   let checkLength = email.split('');
   if (checkLength.length > 5){
   return false
   }
   if(checkCharacters.indexOf('@') !== checkCharacters.lastIndexOf('@')){
   return false;
   }
   return true
}