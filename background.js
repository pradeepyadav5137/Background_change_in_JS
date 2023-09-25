
const back = document.querySelector(".background") 
function handleChange(value){
   back.style. backgroundColor = value;
}

function handleImage(){
 const fileInput = document.getElementById("imageInput");
 const selectedFile = fileInput.files[0];

 if (selectedFile) {
     const imageURL = URL.createObjectURL(selectedFile);
     back.style.backgroundImage = `url(${imageURL})`;
     back.style.backgroundSize = 'cover';
     back.style.backgroundRepeat = 'no-repeat';
     back.style.backgroundPosition = 'center center';
 }
}