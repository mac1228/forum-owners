$( document ).ready(function() {
    
    $.get("https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&inname=michael curd - msft&site=stackoverflow", function(data, status){
         alert("Data: " + data.items[0].account_id + "\nStatus: " + status);
     });
});
