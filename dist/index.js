const s = document.querySelector('#show');
const a = document.querySelector('#appear');
s.addEventListener('click', ()=>{
   if( a.classList.contains('hidden')){
    a.classList.remove('hidden');
   }
   else{
    a.classList.add('hidden');

   }
})