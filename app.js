
document.getElementById("addListInput").style.visibility = "hidden";


$(document).ready(
    function(){
        $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();

                 $('#mylist').append(`<li class="list-group-item ">
                                    <div class="checkbox">
                                        <input type="checkbox" id="checkbox2" />
                                        <label for="checkbox2">
                                            `+toAdd+`
                                        </label>

                                        <div class="pull-right action-buttons">
                                                <a href="http://www.jquery2dotnet.com"><span class="glyphicon glyphicon-pencil"></span></a>
                                                <a href="http://www.jquery2dotnet.com" class="trash"><span class="glyphicon glyphicon-trash"></span></a>
                                                <a href="http://www.jquery2dotnet.com" class="flag"><span class="glyphicon glyphicon-flag"></span></a>
                                            </div>
                                    </div>

                                 
                            </li>`);



                         





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


// $(document).ready(
//     function(){


//         $('#add-list-btn').click(
//             function(){
//                 alert("The paragraph was clicked.");

//                 document.getElementById("addListInput").style.visibility = "visible";
//                 var toAdd = $('input[name=addListInput]').val();
//                 $('#my-menu').append(`<a href="#">`+toAdd+`</a>`);

//             });
      
//     }
// );

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
    var toAdd = $('input[name=menu-list]').val();

    //  alert("The paragraph was clicked.");
     document.getElementById("addListInput").style.visibility = "visible";
    // $('#my-menu').append(`<a href="#">`+toAdd+`</a>`);
    console.log(toAdd);

    // document.getElementById("add-list-btn").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
  }
  