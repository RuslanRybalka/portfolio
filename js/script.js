window.onload = function(e){
    let portfolioItems = document.querySelectorAll('.portfolio__item_link');

    // portfolioItems.forEach(function(item, index, arr) {
    //     item.addEventListener('mouseover', function(event){
    //         if(event.target.classList.contains('active')){
    //             return;
    //         }else{
    //             event.target.classList.add('active');                
    //             arr.forEach(function(el){
    //                 if (el !== event.target){
    //                     el.classList.add('blur');
    //                 }            
    //             })
    //             document.querySelector(`#${this.dataset.target}`).classList.add('display-portfolio-item');
    //         }
            
    //     });
    //     item.addEventListener('mouseleave', function(event){
    //         this.classList.remove('active');
    //         arr.forEach(function(el){
    //                 el.classList.remove('blur');               
    //         })
    //         document.querySelector(`#${this.dataset.target}`).classList.remove('display-portfolio-item');
    //     });
    // });

    document.addEventListener('mouseover', function(event) {
        let target = event.target;
        let portfolioItem = document.querySelector('.display-portfolio-item');
        if(target.classList.contains('portfolio__menu_item')){
            if (!target.classList.contains('active')){
                let active =  document.querySelector('.active');
                active.classList.remove('active');
                active.classList.add('blur');
                target.classList.remove('blur');
                target.classList.add('active');
                portfolioItem.classList.remove('display-portfolio-item');
                document.querySelector(`#${target.dataset.target}`).classList.add('display-portfolio-item');
            }
        }
    });
    let touch = {x:0,y: 0}
    document.addEventListener('touchstart', function(event) {
        touch.x = event.targetTouches[0].clientX;
        let target = event.target;
        let portfolioItem = document.querySelector('.display-portfolio-item');
        if(target.classList.contains('portfolio__menu_item')){
            if (!target.classList.contains('active')){
                let active =  document.querySelector('.active');
                active.classList.remove('active');
                active.classList.add('blur');
                target.classList.remove('blur');
                target.classList.add('active');
                portfolioItem.classList.remove('display-portfolio-item');
                document.querySelector(`#${target.dataset.target}`).classList.add('display-portfolio-item');
            }
        }
    });
    
    document.addEventListener('touchend', function(event){

        let diff = touch.x - event.targetTouches[0].clientX;
        let menuItems = document.querySelectorAll('.portfolio__menu_item');
        let portfolioItems = document.querySelectorAll('.portfolio__item_wrapper');
        let active = document.querySelector('.active');
        let visible = document.querySelector('.display-portfolio-item');
        if(diff > 0 &&  diff > 100){
            let index = (Number(active.dataset.index) + 1) % menuItems.length;  
            active.classList.remove('active');          
            active.classList.add('blur');
            visible.classList.remove('display-portfolio-item');
            active = menuItems[index];
            visible = portfolioItems[index];
            visible.classList.add('display-portfolio-item');
            active.classList.remove('blur');
            active.classList.add('active');
        }else if( diff < 0 && diff < -100){
            
            let index = Number(active.dataset.index);    
            index -=1;
            if(index < 0){
                index = menuItems.length - 1;
            }       
            active.classList.remove('active');
            active.classList.add('blur');
            visible.classList.remove('display-portfolio-item');
            active = menuItems[index];
            visible = portfolioItems[index];
            visible.classList.add('display-portfolio-item');
            active.classList.remove('blur');
            active.classList.add('active');
        }        
    });
    
}