function Suma(){
    let num1=Number(document.getElementById('n1').value);
    let num2=Number(document.getElementById('n2').value);
    
    let res=num1+num2;

    document.getElementById('res').value=res;
   

}

function Resta(){
    let num1= Number(document.getElementById('n1').value);
    let num2=Number(document.getElementById('n2').value);

    let res=num1-num2;

    document.getElementById('res').value=res;

}

function Multiplicacion(){
    let num1=Number(document.getElementById('n1').value);
    let num2=Number(document.getElementById('n2').value);

    let res=num1*num2;

    document.getElementById('res').value=res;

}

function Division(){
    let num1=Number(document.getElementById('n1').value);
    let num2=Number(document.getElementById('n2').value);

    //Manejo de la division por cero
    if (num2 !==0){
        let res= num1/num2;
        document.getElementById('res').value=res;


    }else{
        alert("No se puede dividir por cero.");
        
    }
}