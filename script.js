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

    let output = document.getElementById("screen");
            
    function input(num){
    output.value += num;
    }


    function getFormatNum(num){
        let n = Number(num);
        let value = n.toLocaleString("en");
        return value;
    }

    function calculate(){
        try{
            let ans = eval(output.value);
            output.value = getFormatNum(ans);
        }
        catch(err){
            alert("error");
        }
    }

    function reset(){
        output.value = "";
    }

    function del(){
        output.value = output.value.slice(0,-1);
    }

   
//});






 
   /* function getFormatNum(num){
        let n = Number(num);
        let value = n.toLocaleString("en");
        return value;
    }

    function printOutput(num){
        if(num ==""){
            document.getElementById("output-value").innerText = num;
        }
        else{
            document.getElementById("output-value").innerText = getFormatNum(num);
        }
        
    }


    function getOutput(){
        return document.getElementById("output-value").innerText;
    }


    function reverseNumFomart(num){
        return Number(num.replace(/,/g,''));
    }


    let button = document.getElementsByClassName("btn");
    for(let i = 0; i < button.length; i++){
        button[i].addEventListener('click', function(){
            let output = reverseNumFomart(getOutput());
            
            if(output != NaN){
                output = output+this.id;
                printOutput(output);
            }
        });
    }
    */