let answers = document.querySelectorAll('.answers');
setTimeout(window.onload = function(){
  console.log("hey");
  console.log(answers);
  for(let key in localStorage){
    forStorage.push(key)
    if(forStorage.includes(key)){
      answers.forEach(e=>{
        console.log(e);
      })
    }
  }
  
},3000)