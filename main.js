/*generate the grid*/
$("document").ready(function(){  
  generateGrid();
  $(".clear").click(function(){
    var squares = prompt("How many squares per side?");
    $(".grid").empty();
    generateGrid(squares);
  })
  $("#toggle").click(function(){
    if($(".square").css("border-top-width") === "0px")
      $(".square").css("border-width", "1px");
    else
      $(".square").css("border-width", "0px");
  })
})
/*generate grid with sqPerSide x sqPerSide ratio*/
function generateGrid(sqPerSide=16){
  var squares = sqPerSide * sqPerSide;
  Array.apply(0, Array(squares))
        .map(function (element) { 
            $(".grid").append("<div class='square'></div>");
      });
  // start styling
  var pixels = 512 / sqPerSide;
  $(".square").css({width: pixels, height: pixels});
  var rand = function() {return Math.floor(Math.random() * (255 - 0 + 1)) + 0;};
  $(".square").mouseover(function(){
    $(this).css("background-color", "rgb("+rand()+","+rand()+","+rand()+")");
  })
}