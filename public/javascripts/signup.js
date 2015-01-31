$( document ).ready(function() {
    var $avatar = $(".avatar:first").addClass("selected");
    $("#avatarselection").attr("name", "avatar").val($avatar.attr("selection"));

    $("input[type=password]").keyup(function(){
		if($("#password1").val().length >= 1){
			$("#8char").removeClass("glyphicon-remove");
			$("#8char").addClass("glyphicon-ok");
			$("#8char").css("color","#00A41E");
		}else{
			$("#8char").removeClass("glyphicon-ok");
			$("#8char").addClass("glyphicon-remove");
			$("#8char").css("color","#FF0004");
		}

		if($("#password1").val() == $("#password2").val()){
			$("#pwmatch").removeClass("glyphicon-remove");
			$("#pwmatch").addClass("glyphicon-ok");
			$("#pwmatch").css("color","#00A41E");
		}else{
			$("#pwmatch").removeClass("glyphicon-ok");
			$("#pwmatch").addClass("glyphicon-remove");
			$("#pwmatch").css("color","#FF0004");
		}
	});

	$(".avatar").click(function() {
	  $(".avatar").removeClass("selected");
	  $avatar = $(this);
	  $avatar.addClass("selected");
	  $("#avatarselection").attr("name", "avatar").val($avatar.attr("selection"));
	});

});


