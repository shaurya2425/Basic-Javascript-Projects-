const body=document.querySelector('body');
const buttons=document.querySelectorAll('.button'); 

buttons.forEach((colorchanger) => {
  colorchanger.addEventListener('click', (e)=>{
    console.log(e);
    console.log(e.target);
    switch(e.target.id)
    {
      case 'grey' : body.style.backgroundColor=e.target.id

      case 'white' : body.style.backgroundColor=e.target.id

      case 'blue' : body.style.backgroundColor=e.target.id

      case 'yellow' : body.style.backgroundColor=e.target.id

      case 'crimson' : body.style.backgroundColor=e.target.id

      case 'pink' : body.style.backgroundColor=e.target.id
    }
  })
})