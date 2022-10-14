$("#check-1").change(function() {
    if(this.checked) {
        $("#p-6").css("color" , "#1bc150");
    }else{
        $("#p-6").css("color" , "black");
    
}});
$("#check-2").change(function() {
    if(this.checked) {
        $("#p-5").css("color" , "#1bc150");
    }else{
        $("#p-5").css("color" , "black");
    
}});

function filterBar(){

    $("#filter-bar").css("display" , "grid");
    $("#black-bg").css("display" , "block");

  }
function filterBar1(){

    $("#filter-bar").css("display" , "none");
    $("#black-bg").css("display" , "none");
 
  }

