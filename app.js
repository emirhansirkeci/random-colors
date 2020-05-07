//spaghetti version

window.onload = () =>{
    const mainBg = document.querySelector('body');
    const textColor = document.querySelector('.textColor');

    mainBg.addEventListener('click', (e) =>{
    const clicked = e.target.dataset.key;

    if(clicked === 'click'){
        changeTextColor = () => {
            if(!mainBg.style.backgroundColor){
                return;
            }
            return textColor.innerText = mainBg.style.backgroundColor;
        }
        
        let numbers = [];
        for(let i = 0; i<3; i++){
            let number = Math.floor(Math.random() * Math.floor(255));
            numbers.push(number);
        }

        mainBg.style.backgroundColor = 'rgb(' + [numbers[0], numbers[1], numbers[2]] +')';
        changeTextColor();
    }
    else if(clicked === 'reset'){
        mainBg.style.backgroundColor = 'rgb(255,255,255)';
        changeTextColor();
    }
    else{
        return;
    }
});
}




