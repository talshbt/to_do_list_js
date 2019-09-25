
document.getElementById("addListInput").style.visibility = "hidden";


$(document).ready(
    function(){
        $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();

                 $('#mylist').append(`<li class="list-group-item ">
                                    <div class="checkbox">
                                        <input type="checkbox" id="checkbox2" />
                                        <label for="checkbox2">`+toAdd+`</label>
                                        <div class="pull-right action-buttons">
                                                <a href="http://www.jquery2dotnet.com"><span class="glyphicon glyphicon-pencil"></span></a>
                                                <a href="http://www.jquery2dotnet.com" class="trash"><span class="glyphicon glyphicon-trash"></span></a>
                                                <a href="http://www.jquery2dotnet.com" class="flag"><span class="glyphicon glyphicon-flag"></span></a>
                                        </div></div></li>`);
            });


          
       
     $("input[name=ListItem]").keyup(function(event){
          if(event.keyCode == 13){
            $("#button").click();
          }         
      });
      
      $(document).on('dblclick','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');    
      });
      
      $('input').focus(function() {
        $(this).val('');
      }); 
    }
);

$(document).ready(function(){
    $('a[href="#add-list-btn"]').click(function(){
       alert('Sign new href executed.'); 
    }); 
 });

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


  function addList() {

     document.getElementById("addListInput").style.visibility = "visible";
  }
  
  
 
  $('#addListInput').keypress(function(event){
    var toAdd = $('input[name=menu-list]').val();
    console.log(toAdd)

    var code = event.keyCode || event.which;
    if(code == '13'){
        console.log("enter preessed");
         $('#my-menu').append(`<a href="#"><i class="fa fa-book"></i>
         <span>`+toAdd+`</span></a>`);
         document.getElementById("addListInput").style.visibility = "hidden";
    }
   
    event.stopPropagation();
});


var items = document.querySelectorAll(".list-group-item");
var tab = [], index;
// get tje selected li index using array
// populate array with li values

for(var i = 0; i < items.length; ++i){
    tab.push(items[i].innerHTML);
}

// get li index on click
for(var i = 0; i < items.length; ++i){
    items[i].onclick = function(){
        index = tab.indexOf(this.innerHTML);
        console.log(this.innerHTML + "index: " + index);
    };
}