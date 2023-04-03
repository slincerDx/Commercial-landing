window.addEventListener('DOMContentLoaded',()=>{
    const btn = document.querySelectorAll('.select__box-img'),
          box = document.querySelectorAll('.select__box'),
          wrappers = document.querySelectorAll('.select__wrapper'),
          parent = document.querySelector('.select'),
          hidden = document.querySelectorAll('.select__boxhidden-text');
          text = document.querySelectorAll('.select__box-text');
          let flag = 0;
    parent.addEventListener('click',(e)=>{
        
        const target = e.target;
        
        if(target && (target.classList.contains('select__box') || target.classList.contains('select__box-img')  || target.classList.contains('select__box-text'))){          
            box.forEach((item,i)=>{       
                if(!btn[i].classList.contains('rotate') && (target == btn[i])){
                    btn[i].classList.add('rotate');
                    hidden[i].style.opacity = '1';
                    hidden[i].style.display = 'block';
                    hidden[i].style.paddingBottom = '30px';
                    hidden[i].classList.add('gold-border');
                    box[i].classList.add('gold-border-box');
                    
                } else {
                    btn[i].classList.remove('rotate');
                    hidden[i].style.opacity = '0';
                    hidden[i].style.display = 'none';
                    box[i].classList.remove('gold-border-box');
                    
                }  
                
                    
            })
        }
    })


})
