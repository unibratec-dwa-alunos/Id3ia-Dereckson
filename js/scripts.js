// All scripts

$(document).ready(function(e) {
	
	//Prevent Fake Browser Navigation
	var naviLink = $('.page-transition');
	naviLink.click(function(event){
			event.preventDefault();
	});

	//Team previews expand
	var $teammate = $('.team-mate');
	var clickable = $('.prev-page, .home-page, .submenu li a');
	$teammate.click(function(){
		$teammate.removeClass('expanded').find('a').css({'outline':'none', 'text-decoration':'none'});
		if($(this).hasClass('frst')){
			$teammate.removeClass('frst');
		} else {
			$teammate.removeClass('frst');
			$(this).addClass('frst');
			$(this).addClass('expanded');
		}
	});
	
	clickable.click(function(){
		$teammate.removeClass('expanded');
	});
	
	
	//Thumbs grid init
	Grid.init();


	//Ajax Form
	$('#submit').click(function(){
		sprytextfield1.validate();
		sprytextfield2.validate();
		sprytextarea1.validate();
		$.post("form.php", $("#feedback-form").serialize(),  function(data) {
			$('#success').html(data).animate({opacity: 1}, 500, function(){
				$("#feedback-form").trigger( 'reset' );
			});
		});
		return false;
	});

});
