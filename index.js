
const head=this.document.querySelector('.heading');

head.addEventListener('click', function() {
    console.log(head.textContent);
    head.setAttribute('style','color:green')
    
  });