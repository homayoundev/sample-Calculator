function calc(val){
document.getElementById("view").value += val
}

function allClear() {
    calculator.view.value = ""    
}

function del(){
    calculator.view.value = calculator.view.value.slice(0 , -1)
}



function add(val){
   if(condition){
       
       calculator.view.value += val 
    }else{
        
        allClear() 

        calculator.view.value += val 

        condition = !condition
   }

}

let condition = true

function equal(){
calculator.view.value = eval(calculator.view.value)
condition = false
console.log(condition)
}