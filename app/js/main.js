$.each($('.fade-out'), function(index, el) {
	setTimeout(function(){
       $(el).removeClass('fade-out');
    }, ( index * 100 ));
});