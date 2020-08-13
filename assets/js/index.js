$(document).ready(function() {
	/*==== These Functions are concerned with the navigation and menu ======*/
	(function () {
		let is_small_screen = () => window.matchMedia ('(max-width: 991px)').matches;
		handle_nav(is_small_screen());
		window.onresize = () => {
			handle_nav(is_small_screen());
		}
	})();

	/*function below takes true or false
	*for small or large screens respectively
	*/
	function handle_nav (screen_bool) {
		if (screen_bool) {
			activateSideNav();
		}else {
			handle_nav_on_scroll();
		}
	}
	/* =====These functions handle the sticky top navbar  */

	function make_sticky_nav () {
		if (window.pageYOffset >= 43) {
			$('#sticky-nav').addClass('px-3 sticky')
			$('#top-nav #contacts-ul').removeClass('mb-2')
			$('nav').removeClass('paper-box-shadow')
		}else  {
			$('#sticky-nav').removeClass('px-3 sticky')
			$('#top-nav #contacts-ul').addClass('mb-2')
			$('nav').addClass('paper-box-shadow')
		}
	}
	function handle_nav_on_scroll () {
		let scrollTop = $(window).scrollTop();
		$(window).scroll(function(e) {
			make_sticky_nav ();
		});
	}
	/* =====This is the end of functions that handle the sticky top navbar  */


	/* =====These functions handle the sidebar */
	function openSideBar () {
		$(".side-menu-overlay").css({
			'right':'0'
		});
		$(".side-menu-overlay").addClass('show-sidebar');
	}
	function closeSideBar () {
		$(".side-menu-overlay").css({
			'right':'-100vw'
		});
		$(".side-menu-overlay").removeClass('show-sidebar');
	}
	function toggleSideNav() {
		if (!$(".side-menu-overlay").hasClass('show-sidebar')) {
			openSideBar();
		}else {
			closeSideBar();
		}
	}
	function activateSideNav () {
		$('.nav-toggler').click(function(e) {
			toggleSideNav()
		});
		$(".side-menu-overlay").click(function(e) {
			toggleSideNav();
		});
		$(".side-menu").click(function(e) {
			e.stopPropagation();
		});
	}
	/* ===== This is the end of sidebar functions =====*/


	/*==== This is the end of navigation and menu functions ======*/

});