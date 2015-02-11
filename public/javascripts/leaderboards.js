$( document ).ready(function() {
    
    // $.get("https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&inname=michael curd - msft&site=stackoverflow", function(data, status){
    //      alert("Data: " + data.items[0].account_id + "\nStatus: " + status);
    //  });
	
	$(".container-fluid").children(".rank").hide();
	var start = "Today";
  	$(".timeline:contains(" + start + ")").parent().parent().parent().show();

	$(".forum").click(function() {
  		$("ul.nav-stacked").children().removeClass("active");
  		$(this).parent().addClass("active");

  		$(".container-fluid").children(".rank").hide();
  		var value = $(this).text();
  		$(".timeline:contains(" + value + ")").parent().parent().parent().show();
	});
});
