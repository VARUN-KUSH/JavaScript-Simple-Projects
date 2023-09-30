const buttons = document.querySelectorAll('.button');
console.log(buttons);
const bgPage = document.querySelector('body')
buttons.forEach((button) => {
    console.log(button)
    button.addEventListener('click', (e) => {
        console.log(e)
        setTimeout(() => {
            bgPage.style.backgroundColor = 'white'; 
        }, 1000);

        if(button.id == 'grey') {
        bgPage.style.backgroundColor = 'grey'

        

        }
        else if (button.id == 'chocolate') {
            bgPage.style.backgroundColor = 'chocolate'

           
        }

        else if (button.id == 'violet') {
            bgPage.style.backgroundColor = 'violet'
        }

        else {
            bgPage.style.backgroundColor = 'yellow'
        }
        
        
        
    
    });
});
