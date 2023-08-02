const enterText= document.querySelector(".EnterText")
const capital = document.querySelector(".Capital")
const capitalize = document.querySelector(".capitalize")
const lowercase = document.querySelector(".lowercase")
const textArea = document.querySelector("#textArea")

// console.log(capital)

enterText.addEventListener('input', ()=>{
  let textValue= enterText.value
  console.log(textValue)

  
})
capital.addEventListener('click',(e)=>{
    e.preventDefault()
    
    enterText.style.textTransform="uppercase"
    
})
capitalize.addEventListener('click',(e)=>{
    
    
    enterText.style.textTransform="capitalize"
    e.preventDefault()
    
})
lowercase.addEventListener('click',(e)=>{
    
    
    enterText.style.textTransform="lowercase"
    e.preventDefault()
    
})
