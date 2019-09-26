
document.getElementById("addListInput").style.visibility = "hidden";
document.getElementById("op-btn-group").style.visibility = "hidden";


function addNewTask(){
    $(document).ready(
        function(){
            $('#button').click(
                function(){
                    var toAdd = $('input[name=ListItem]').val();
    
          
                                            $('#mylist').append(`                    <li class="list-group-item ">Sh<span class="close">&times;</span></li>
                                            `);

                                            update();
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
}

 function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


  function insertList() {
     document.getElementById("addListInput").style.visibility = "visible";  
  }
  
 function addNewList(){
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
 }

function setEventHandler(){

    addNewTask();
    addNewList();
    // edit();
}

function init(){
    setEventHandler();
}

init();




     
var items = document.querySelectorAll(".list-group-item");

var tab = [];
var index;

var inputText = document.getElementById("input-task");














    for(var i = 0; i <items.length; ++i){
        tab.push(items[i].innerHTML);
        items[i].onclick = function(){
            
            index = tab.indexOf(this.innerHTML);
             var res = this.innerHTML.split(`<span`);
             console.log(res);
             document.getElementById("input-task").value = res[0];
            console.log(this.innerHTML + " " + index);
            document.getElementById("op-btn-group").style.visibility = "visible";
            // document.getElementById("op-btn-group").style.visibility = "visible";

        };
    }
    



function editTask(){
    items[index].innerHTML = inputText.value;
    refresh();

}

// for(var i = 0; i <items.length; ++i){
//     tab.push(items[i].innerHTML);
//     items[i].onclick = function(){
//         index = tab.indexOf(this.innerHTML);
//         // var res = this.innerHTML.split(`<div`);
//         // document.getElementById("input-task").value = res[0];
//         console.log(this.innerHTML + " " + index);
//         document.getElementById("op-btn-group").style.visibility = "visible";
        

//     };
// }


var closebtns = document.getElementsByClassName("close");
var i;

function refresh(){
    tab.length = 0;
    for(var i = 0; i <items.length; ++i){
        tab.push(items[i].innerHTML);
    }
    
}

function update(){
    for (i = 0; i < closebtns.length; i++) {
        closebtns[i].addEventListener("click", function() {
          this.parentElement.style.display = 'none';
        });
      }
      
}






// var items = document.querySelectorAll(".list-group-item");
// var tab = [], index;


// for(var i = 0; i < items.length; ++i){
//     tab.push(items[i].innerHTML);
// }

// // get li index on click
// for(var i = 0; i < items.length; ++i){
//     items[i].onclick = function(){
//         index = tab.indexOf(this.innerHTML);
//         console.log(this.innerHTML + "index: " + index);
//     };
// }

          //  $('#mylist').append(`<li class="list-group-item ">
                    //                     <div class="checkbox">
                    //                         <input type="checkbox" id="checkbox2" />
                    //                         <label for="checkbox2">`+toAdd+`</label>
                    //                         <div class="pull-right action-buttons">
                    //                                 <a href="http://www.jquery2dotnet.com"><span class="glyphicon glyphicon-pencil"></span></a>
                    //                                 <a href="http://www.jquery2dotnet.com" class="trash"><span class="glyphicon glyphicon-trash"></span></a>
                    //                                 <a href="http://www.jquery2dotnet.com" class="flag"><span class="glyphicon glyphicon-flag"></span></a>
                    //                         </div></div></li>`);

