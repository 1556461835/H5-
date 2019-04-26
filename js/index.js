var swiperV = new Swiper('.swiper-container-v', {
		 	direction: 'vertical',
		 	spaceBetween: 50,
		 	pagination: {
		 		el: '.swiper-pagination-v',
		 		clickable: true,
		 	},
		 	navigation: {
		 		nextEl: '.next',
		 	},
		 	on: {
		 		init: function() {
		 			swiperAnimateCache(this); //隐藏动画元素 
		 			swiperAnimate(this); //初始化完成开始动画
		 		},
		 		slideChangeTransitionEnd: function() {
		 			swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
		 			//this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
		 		}
		 	}
		 });
		 var swiperH = new Swiper('.swiper-container-h', {
		 	loop: true,
		 	spaceBetween: 50,
		 	pagination: {
		 		el: '.swiper-pagination-h',
		 		clickable: true,
		 	},
		 });
