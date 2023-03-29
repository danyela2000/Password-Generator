const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btnGenerate = document.getElementById("generate-btn")
let pass1 =  document.getElementById("pass1")
let pass2 =  document.getElementById("pass2")
let maxLength = 15
console.log(characters.length)

function generateRandom(){
    let p1 = ""
    let p2 = ""  
    for(let i =1; i <= maxLength; i++){
        let i1 = Math.floor(Math.random()*characters.length)
        let i2 = Math.floor(Math.random()*characters.length)
        p1 += characters[i1]
        p2 += characters[i2]
    } 
    
    pass1.textContent = p1  
    pass2.textContent = p2  
}




