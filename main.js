var climate,terrain=""
var returnedPlanets
var matchClimate=[]
var matchTerrain=[]
function displayPlanet(){
  if(climate && terrain){
    var url="http://swapi.co/api/planets"
    $.get(url)

    .then(function(data){
      // console.log(data)
      for (var i = 0; i < data.results.length; i++) {
        // console.log(data.results[i].name)
        if(climate===data.results[i].climate && terrain===data.results[i].terrain){
          // console.log(data.results[i].name)

          returnedPlanets = data.results[i].name;
          var planet = returnedPlanets
          document.querySelector('#planetHere').textContent = "Vacation on: " + planet
          return data.results[i].name;
        }


      }

      return "Nothing matched that search, try again!"
    })
  }

}

$(document).ready(function() {
    Materialize.updateTextFields();

  $('#dropdown1').click(function(event){
    matchClimate=[]
    // console.log(event.target.innerHTML);
    document.querySelector('#textFieldId').textContent = "selected climate: "
    document.querySelector('#textFieldId').append(event.target.innerHTML);
    climate=event.target.innerHTML
    searchClimate(climate)
  })

  $('#dropdown2').click(function(event){
    matchTerrain=[]
    // console.log(event.target.innerHTML);
    document.querySelector('#secondText').textContent = "selected terrain: "
    document.querySelector('#secondText').append(event.target.innerHTML);
    terrain=event.target.innerHTML
    searchTerrain()
  })

  $('#findPlanet').click(function(event){
    displayPlanet()
    // console.log(returnedPlanets);
    var planet = returnedPlanets
    document.querySelector('#planetHere').textContent = "Vacation on: " + planet



  })
})

//get planet function





// get climate function
function searchClimate(climate) {
  var url = "http://swapi.co/api/planets"
  $.get(url)
  .then(function(data){
    console.log(data)
    for (var i = 0; i < data.results.length; i++) {
      var climateData= data.results[i].climate.split(", ");
      for (var j = 0; j < climateData.length; j++) {
        if (climateData[j] === climate) {
          matchClimate.push(data.results[i].name)
        } else {
          console.log("no match")
        }
      }
    }
          console.log("Matching Climates: " +matchClimate)
  })
}







    // var name = data.results.length
    // console.log(name)
    // updatePageOne(name, tagline)
//   })
// }
//get terrain function

function searchTerrain() {
  var url = "http://swapi.co/api/planets"
  $.get(url)
  .then(function(data){
    for (var i = 0; i < data.results.length; i++) {
      // console.log(data.results[i].terrain);

    }
    var name= data.results.length
  })
}



// For customer input


  $('#textarea1').val('');
$('#textarea1').trigger('autoresize');


// date picker
$('.datepicker').pickadate({
   selectMonths: true, // Creates a dropdown to control month
   selectYears: 15 // Creates a dropdown of 15 years to control year
 });

// index3html clear button
function eraseText() {
    document.getElementById("output").value = "";
    console.log("alert");
}
