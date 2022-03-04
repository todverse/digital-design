const btn = document.createElement('button');
btn.classList.add('button_up');



btn.addEventListener('click', () => {
	while(window.pageYOffset > 0) { 
		window.scrollBy(0, -80);
	};
});


window.addEventListener('scroll', () => {
	if(document.getElementsByClassName('main_content')[0].getBoundingClientRect().top < -90 && document.body.lastChild !== btn) { 
		document.body.appendChild(btn);
	}else if(document.getElementsByClassName('main_content')[0].getBoundingClientRect().top > -90) {
		try { 
			document.body.removeChild(btn);
		} catch(err) {
			console.log('wait needs coordinates');
		}
	};
});