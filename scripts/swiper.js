const swiper = new Swiper('.swiper', {
   // Optional parameters
slideToClickedSlide: true,
   // loop: true,
   /* effect: 'fade' , */
   /* effect:'flip',
	flipEffect:{
		slideShadows: true,
		limitRotation: true
	}, */
   /* mousewheel: {
      sensitivity: 1,
      eventsTarget: '.swiper-slide',
   }, */
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      /* pageUpDown: true */
   },

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
  
	

   // And if we need scrollbar
   /* scrollbar: {
	  el: '.swiper-scrollbar',
	}, */
});
