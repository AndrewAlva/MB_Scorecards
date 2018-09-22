// Loaded page "Fade-In" intro
	$.each($('.fade-out'), function(index, el) {
		setTimeout(function(){
			$(el).removeClass('fade-out');
		}, ( index * 100 ));
	});


// Subscribe mini form functionality
	$("#submit-contact-data").on("click", function(ev){
		ev.preventDefault();
		
		if($('#contact-name').val() == "" || $('#contact-lastname').val() == "" || $('#contact-cellphone').val() == "" || $('#contact-email').val() == ""){
			alert("You must fill all the fields marked with a red asterisk to complete the request!");
		} else {
			$.ajax({
				url: "/request_data.php",
				type: "POST",
				data: { name: $('#contact-name').val(), lastname: $('#contact-lastname').val(), tel: $("#contact-cellphone").val(), email: $('#contact-email').val() }
			})
			.done(function(e) {
				console.log("e",e);
				$('#request-wrapper').addClass('fade-out');
				$('.answer-wrapper').html('<h2>Thanks for joining the community!</h2><p> You will receive an email with the complete report of ©The Gents Place very soon, meanwhile you can visit <a href="https://modrnbusiness.com/"> Modrn Businss complete site</a> to know more about our purpose and get more content. </p>');
				$('.answer-wrapper').addClass('fade-in');
				// TweenMax.to($('.subscribe-section'), 0.6, {autoAlpha: 0, display: 'none', onComplete:function(){
				// 	$('.subscribe-section').html('<h3 class="intro-title h2"> Thanks for subscribing! </h3> <p class="intro-description h4"> Wait news from us soon. </p>').fadeIn();
				// 	TweenMax.to($('.subscribe-section'), 0.6, {autoAlpha: 1, display: 'block'  });
				// } });
			});
		}
	});