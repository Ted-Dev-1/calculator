window.addEventListener('DOMContentLoaded', function() {

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
});
