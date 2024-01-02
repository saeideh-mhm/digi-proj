let userName = document.getElementById("username")



userName.addEventListener("blur" , uservali)

let Use = document.getElementById("use")


function uservali(){
    if (userName.value.length < 1){

       
        Use.innerHTML = "please enter username"
        Use.style.color = "red"

    }else if(userName.value.length <=8 ){
        Use.innerHTML = " must be 9 character"
        Use.style.color = "red"
    }
    else{
        Use.innerHTML = " correct"
        Use.style.color = "green"
    }
}

let passWord = document.getElementById("password")


passWord.addEventListener("blur" , passvali)

let Pass = document.getElementById("pass")

function passvali(){

    if (passWord.value.length < 1){

        Pass.innerHTML = "please enter password"
        Pass.style.color = "red"
        
    }else if(passWord.value.length<=12){
        Pass.innerHTML = "must be 13 character"
        Pass.style.color = "red"
    }else{
        Pass.innerHTML = "correct"
        Pass.style.color = "green"
    }
}



let buTTon = document.getElementById("button")

buTTon.addEventListener("click", clicc)

let disdis = document.getElementById("dis")




function clicc(){
   
     

    
      if (passWord.value.length == 0 || userName.value.length == 0){
        disdis.style.display = "inline"
        disdis.innerHTML = "please enter username or password"
        disdis.style.backgroundColor = "  blue"
        setTimeout(function(){
            disdis.style.display = "none"
        },3000)

     } else if(passWord.value.length<=12 || userName.value.length<=8){
        disdis.innerHTML = "please try again"
        disdis.style.backgroundColor = "yellow"
        disdis.style.color = "red"
        disdis.style.display = "inline"
        setTimeout(function(){
            disdis.style.display = "none"
        },3000)

     } else if (passWord.value.length >= 13 && userName.value.length >= 9 ){
        disdis.innerHTML = "your enter is succss"
        disdis.style.backgroundColor = "red"
        disdis.style.color = "green"
        disdis.style.display = "inline"
        setTimeout(function(){
            disdis.style.display = "none"
        },3000)
     }

}