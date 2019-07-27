//alert('Hi');
$('#result').hide();
$(".result-loading").hide();
setTimeout(function(){
 // alert('time ok');
 //$('#result').show();
  //$('#result').addClass('flipInX');
}, 1000);


$("#dominSearchForm").submit(function(){
$('#result').hide();
$(".result-loading").show();
let domain = $(this[0]).val();

//alert(domain);

$.ajax({
url: "https://sarjsk991.000webhostapp.com/domain-finder-api/api.php",
type: "get",
data: {domain: domain},
success: function(data){
$(".result-loading").hide();
// data = JSON.parse(data);
// console.log(data["msg"]);
$('#result').show();
$("#result").removeClass("alert-success alert-danger").addClass("alert-"+data["status"]);

// icon
$('#result p i').removeClass("fa-check-circle fa-times-circle").addClass(data["icon"]);


// message
$('#result p span').html(data["msg"]);
$('#result').addClass('flipInX');
//alert(data["status"]);
},
error: function(e){
alert(e);
}
});






return false;
});
