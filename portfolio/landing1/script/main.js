/*const work = ['1.jpg', '2.jpg', '3.jpg','4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
window.onload = function(){
	const reviews = document.getElementsByClassName('review-item');
	let reviewCurrent = document.getElementsByClassName('review-current')[0];

	const pagination = document.getElementsByClassName('pagin-item');
	let paginCurrent = document.getElementsByClassName('pagin-current')[0];

	for(let i = 0; i < pagination.length; i++){
		pagination[i].addEventListener('click', function(event){
			console.log(this);
			event.preventDefault();
			if (!this.classList.contains('pagin-current')){

				this.classList.add('pagin-current');
				let review = reviews[+this.getAttribute('data')];
				review.classList.add('review-current');
				
				reviewCurrent.classList.remove('review-current');				
				paginCurrent.classList.remove('pagin-current');

				paginCurrent = this;				
				reviewCurrent = review;
			}
		});
	}

	const loadBtn = document.getElementById('load-more-btn');

	loadBtn.addEventListener('click', loadMore);

	function loadMore(event){
		event.preventDefault();
		const workWrapper = document.querySelector('.work-wrapper');
		for (let i = 0; i < work.length; i++){
			let workItem = document.createElement('div');
			workItem.classList.add('work-item');
			workItem.innerHTML = `<a href="#"><img src="img/works/${work[i]}" alt=""></a>`;
			console.log(workItem);
			workWrapper.appendChild(workItem);
		}
		this.removeEventListener('click', loadMore);
	}
	
}*/

//preload



const work = ['1.jpg', '2.jpg', '3.jpg','4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];

$(document).ready(function(){
	$('.preloader').css('visibility', 'hidden');

  $('.reviews-wrapper').slick({
  	autoplay : true,
  	adaptiveHeight: false,
  	arrows:false
  });
  const loadBtn = document.getElementById('load-more-btn');

	loadBtn.addEventListener('click', loadMore);

	function loadMore(event){
		event.preventDefault();
		const workWrapper = document.querySelector('.work-wrapper');
		for (let i = 0; i < work.length; i++){
			let workItem = document.createElement('div');
			workItem.classList.add('work-item');
			workItem.innerHTML = `<a href="#"><img src="img/works/${work[i]}" alt=""></a>`;
			console.log(workItem);
			workWrapper.appendChild(workItem);
		}
		this.removeEventListener('click', loadMore);
	}
	//create popup window for contact

	$('#contact-us').on('click',(e)=>{
		e.preventDefault();
		$('#popup-form').animate({'bottom' : "0"}, 300);
		setTimeout(()=>{$('.popup-close').css('display','block')}, 5000);
	});

	//close popup window for contact
	$('.popup-close').on('click',(e)=>{
		$('#popup-form').animate({'bottom' : "-405px"}, 300);
		$('.popup-close').css('display','none');
	});
	$('.hamburger-menu').on('click', (e)=>{
		e.stopPropagation();
		$('.nav-top').toggleClass('nav-top-active').focus();
	});
});


///Progress Bar section-----------------------


let targets = document.querySelectorAll('.progress-bar');


let lazyLoad = target => {
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }

  let progressBarOptions = {
	  'width' : +target.getAttribute('data-progress'),
	  'bgcolor' : '#10c9c3',
	  'duration' : 500
	}

  var callback = function(entries, observer) { 
    entries.forEach(entry =>{
        if(entry.isIntersecting){
          progressBar(entry.target, progressBarOptions);
          observer.disconnect();
        }  
    });
  }
  var observer = new IntersectionObserver(callback, options);
  observer.observe(target);
};
  
  targets.forEach(lazyLoad);



function progressBar(element, options){
  
  const frameTime = 1000/60;
  let frames = options.duration/frameTime;
  let widthPerFrame = options.width/frames;
  
  let progress = document.createElement('div');  
  progress.style.height = '100%';
  progress.style.width = '0';
  progress.style.backgroundColor = options.bgcolor;
  
  element.appendChild(progress);
  
  let width = 0;
  let timer = setInterval(()=>{
   if(width>=options.width){
     clearInterval(timer);
   }
   progress.style.width = width + '%';
   width+=widthPerFrame;
 }, frameTime);
}

///////AJAX send email

$('#popup-form').submit( function(event){
	event.preventDefault();
	$.post($('#popup-form').attr('action'), $('#popup-form').serialize(), data => {console.log(data);});
});
