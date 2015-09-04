$(document).ready(function(){
  // get player 1's input
  var input = prompt("what word would you like to play with?");
  console.log(input);
  // get input's length
  var inputLength = input.length;
  console.log(inputLength);
  // make a string of unerscores with that length
  var underscoreString = "_ ".repeat(inputLength);
  console.log(underscoreString);
  // put in DOM
  $("div.game-word").text(underscoreString);

  $("#letter").keydown(function(evt) {
    if (evt.keyCode === 13) {
      inputValue = $(this).val();
      console.log(inputValue);
      // compare letter that was entered to each individual letter in the string
      var checkLetter = $(this).val();
      inputArray = input.split("");
      for (var i = 0; i < input.length; i++ ){
        if (inputArray[i] === checkLetter){
          var underscoreArray = underscoreString.split("")
          underscoreArray[i] = checkLetter
          underscoreString = underscoreArray.toString()
          //underscoreString = underscoreString.replace(/_/g,"")
          underscoreString = underscoreString.replace(/,/g,"")
          console.log(underscoreString);
          console.log(typeof(underscoreString))
          console.log(inputArray)
          console.log(typeof(inputArray))
          return $("div.game-word").text(underscoreString);
        }
        else {}
      }
      }
    })
          //do DOM manipulation
          //var hiddenArray = underscoreString.split(" ");
          //console.log(hiddenArray);
          //inputArray[i] = checkLetter;
          //console.log(hiddenArray[i]);
          //hiddenArray[i] = checkLetter;
          //console.log(hiddenArray[i]);
          //console.log("new hiddenArray is now " + hiddenArray);
          // underscoreString = hiddenArray.join("");
          // console.log(underscoreString);
          // $("div.game-word").text(underscoreString);

      /*
      for(i in input){
        var isInWord = input.indexOf(checkLetter);
      }
      */

  // when a player enters letter
    //

    function replaceAll(find, replace, str){
      return str.replace(new RegExp(find, ','), replace);
    }

})
