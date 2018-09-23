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
				url: "send_data.php",
				type: "POST",
				data: { name: $('#contact-name').val(), lastname: $('#contact-lastname').val(), tel: $("#contact-cellphone").val(), email: $('#contact-email').val(), feedback: $('#contact-feedback').val() }
			})
			.done(function(e) {
				console.log("e",e);
				$('#request-wrapper').addClass('fade-out');
				$('.answer-wrapper').html('<h2>Thanks for joining the community!</h2><p>You will receive an email with the complete report of ©The Gents Place very soon, meanwhile you can visit Modrn Businss complete site to know more about our purpose and get more content.</p><a href="https://modrnbusiness.com/" class="mb-button">Visit Full Site</a>');
				$('.answer-wrapper').addClass('fade-in');
			});
		}
	});