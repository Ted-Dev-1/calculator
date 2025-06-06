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

    /* 
     //Toggler for anytime you click abywhere on the slider
     slider.addEventListener('click', function() {
        if(position < 3){
            position += 1;
        }
        else{
            position = 1;
        }

        applytheme(position);
     }); 
    */

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

    //End of calculator logic.

