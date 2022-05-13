// validation script here
const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([\w\-]+)@([\w\-]+)\.([\w]{2,8})(\.[a-z]{2,8})?$/i,
  password: /^[\w@-]{8,30}$/,
  telephone: /^\d{10}$/g,
  slug: /^[a-z\d-]{8,20}$/,
};

function validate(field, regex){
    if(regex.test(field.value)){ 
        console.log(regex.test(field.value)); 
        field.className="valid" 
    }
    else field.className='invalid' ;
}

const inputs =document.querySelectorAll('input');
inputs.forEach((input) =>{
    input.addEventListener('keyup', (event) =>{
        validate(event.target, patterns[event.target.name]);
    });
});