//window.addEventListener('DOMContentLoaded', function() {
    //theme toggle logic

    const slider = document.getElementById('slider');
    const toggle = document.getElementById('toggle');

    let position = parseInt(this.localStorage.getItem('theme-pos')) || 1;

    function applytheme(pos){
        document.body.classList.remove('theme-1', 'theme-2', 'theme-3');
        document.body.classList.add('theme-' + pos);

        toggle.classList.remove('pos-1', 'pos-2', 'pos-3');
        toggle.classList.add('pos-' + pos);

        localStorage.setItem('theme-pos', pos);
    }

    slider.addEventListener('click', function() {
        if(position < 3){
            position += 1;
        }
        else{
            position = 1;
        }

        applytheme(position);
    });

    applytheme(position);
    //End of theme toggle logic

    //caculator logic

    function getHistory(){
        return document.getElementById("history-value").value
    }

    function printHistory(num){
        document.getElementById("history-value").value = num;
    }
    

    function getFormatNum(num){
        if(num == "-"){
            return "";
        }

        /*let n = Number(num);
        let value = n.toLocaleString("en");
        return value;*/

        
        let parts = num.toString().split(".");
        let intPart = Number(parts[0]).toLocaleString("en");

        return parts.length > 1 ? intPart + "." + parts[1] : intPart;

    }

    function printOutput(num){
        if(num ==""){
            document.getElementById("output-value").value = num;
        }
        else{
            document.getElementById("output-value").value = getFormatNum(num);
        }
        
    }


    function getOutput(){
        return document.getElementById("output-value").value;
    }


    function reverseNumFomart(num){
        //return Number(num.replace(/,/g,''));
        return num.replace(/,/g,'');
    }

   // printHistory("19");

    let optSign = document.getElementsByClassName('btn opt');
    for(let i = 0; i< optSign.length; i++){
        optSign[i].addEventListener('click', function(){
            if(this.id == "clear"){
                printHistory("");
                printOutput("");
            }

            else if(this.id =="backspace"){
                
                if(document.getElementById("output-value").value == "Error: Can't divide by 0!" ){
                    printOutput("");
                }

                let num = reverseNumFomart(getOutput()).toString();
                if(num){
                    num = num.slice(0,-1);
                    printOutput(num);
                }
            }
             //operator sign +-/*
            else{
                let output = getOutput();
                let history = getHistory();
                if(output == "" && history != ""){
                    if(isNaN(history[history.length-1])){
                        history = history.slice(0,-1);
                    }
                }

                if(output != "" || history != ""){
                    output = output== "" ? output : reverseNumFomart(output);
                    history = history + output;

                    if(this.id == "="){

                        if (history.match(/\/0+(?!\d)/)) {
                            printHistory("");
                            document.getElementById("output-value").value = "Error: Can't divide by 0!";
                            return;
                        }

                        let result = eval(history);
                        printOutput(result);
                        printHistory("");
                    }
                    
                    else{
                        history = history + this.id;
                        printHistory(history);
                        printOutput("");
                    }
                }
            }
        })
    }

    let button = document.getElementsByClassName("btn num");
    for(let i = 0; i < button.length; i++){
        button[i].addEventListener('click', function(){

            let display = document.getElementById("output-value");
            let output = reverseNumFomart(getOutput());

            let raw = display.value.replace(/,/g, "");

            if(raw.length < display.maxLength){

                output = output+this.id;
                printOutput(output);
            }
            
           
        });
    }

   
//});


/*
// if(output != NaN){
                output = output+this.id;
                printOutput(output);
           // }
*/ 
