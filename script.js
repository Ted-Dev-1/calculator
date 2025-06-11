//window.addEventListener('DOMContentLoaded', function() {
    //theme toggle logic

    const slider = document.getElementById('slider');
    const toggle = document.getElementById('toggle');

    let position = parseInt(this.localStorage.getItem('theme-pos')) || 1;

    const spot = document.querySelectorAll('.spot');
    const spanPos = document.querySelectorAll('.position span');

    //Theme apply fuction
    function applytheme(pos){
        document.body.classList.remove('theme-1', 'theme-2', 'theme-3');
        document.body.classList.add('theme-' + pos);

        toggle.classList.remove('pos-1', 'pos-2', 'pos-3');
        toggle.classList.add('pos-' + pos);

        localStorage.setItem('theme-pos', pos);
    }

    //Toggler for the repective spaces in the toggle slider
    spot.forEach(function (spotElement){
        spotElement.addEventListener('click', function(){
            let posElem = parseInt(spotElement.getAttribute('data-pos'),10);
            position = posElem;

            applytheme(position);
        } );
    });


    //Toggle for the positons 1,2,3
    spanPos.forEach(function (spanElement){
        spanElement.addEventListener('click', function(){
            let spanElem = parseInt(spanElement.textContent,10);
            position = spanElem;

            applytheme(position);
        } );
    });


    applytheme(position);


    //End of theme toggle logic

    //caculator logic

    function getHistory(){
        return document.getElementById("history-value").value
    }

    function printHistory(num){
        document.getElementById("history-value").value = num;

        if(document.getElementById("history-value").value !== ""){
            document.getElementById("output-value").placeholder = "";
        }
        else if(document.getElementById("history-value").value == ""){
            document.getElementById("output-value").placeholder = "399,981";
        }
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
                    /*
                if(document.getElementById("history-value").value !== ""){
                    document.getElementById("output-value").placeholder = "";
                }
                   */

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

                        if (history.match(/\/0+(?![\d.])/)) {
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

                        //document.getElementById("output-value").placeholder = "";

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

