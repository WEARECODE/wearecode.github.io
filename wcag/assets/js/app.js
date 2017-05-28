 $(document).ready(function () {
	var logo = $('#logo');
	verifyScroll();
    $(window).scroll(function () {
       verifyScroll();
    });

    function verifyScroll(){
    	var y = $(window).scrollTop();
        
        if (y > 100) {
            logo.removeClass('logo-big').addClass("logo-small");//.animate({ height: "30px" }, "fast");
        }

        else{
            logo.removeClass('logo-small').addClass("logo-big");//.animate({ height: "70px" }, "fast");
        }
    }
 //smoothscroll
    $('#header a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	}); 

	
    $('.postDown').addClass("hiddenAn").viewportChecker({
        classToAdd: 'visibleAn animated fadeInDown',
        offset: 100
       });

    $('.postLeft').addClass("hiddenAn").viewportChecker({
        classToAdd: 'visibleAn animated fadeInLeft',
        offset: 100
       });

    $('.postRight').addClass("hiddenAn").viewportChecker({
        classToAdd: 'visibleAn animated fadeInRight',
        offset: 100
       });

    $('.postUp').addClass("hiddenAn").viewportChecker({
        classToAdd: 'visibleAn animated fadeInUp',
        offset: 100
       });

    $('.postZoom').addClass("hiddenAn").viewportChecker({
        classToAdd: 'visibleAn animated zoomIn',
        offset: 100
       });
    $('.postBounceDown').addClass("hiddenAn").viewportChecker({
        classToAdd: 'visibleAn animated bounceInDown',
        offset: 100
      });

     $(".about-content").mouseenter(function(event){
    	$(this).addClass('animated ' + $(this).data('action'));
	});
	$(".about-content").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){
	    $(this).removeClass('animated ' + $(this).data('action'));
	});

    $('#sendmail').submit(function(e){
      //sendMail();
      var from_email = $(this).find('input[name="email"]').val();
      var subject = $(this).find('input[name="subject"]').val();
      var body = $(this).find('textarea[name="message"]').val();

      $(this).find('input[type="submit"]').button('loading');
      sendMail(from_email, subject, body);
      return false;

    });

function sendMail(from_email, subject, body){
  subject = "Pagina wearecode " +subject;
  $.ajax({
  type: "POST",
  url: "http://emailservice481.azurewebsites.net/api/Values",
  headers: {"Access-Control-Allow-Origin": "*"},
  data: {
      'SenderEmail': from_email,
      'Subject': subject,
      'Source':'wearecode',
      'BodyText': body
  }
 }).done(function(response) {
   console.log(response);
   $('#myModal').modal('show');
   $('#sendmail').find('input[type="submit"]').hide();
   $('#myAlert').removeClass('hidden');
 });  
}	
 });
