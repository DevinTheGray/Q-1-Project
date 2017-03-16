var climate,terrain=""
var returnedPlanets=[]
var matchClimate=[]
var matchTerrain=[]

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
    document.querySelector('#secondText').textContent = "selected terrain: "
    document.querySelector('#secondText').append(event.target.innerHTML);
    terrain=event.target.innerHTML
    searchTerrain(terrain)
  })

  $('#findPlanet').click(function(event){
    matchedPlanets(matchClimate, matchTerrain)
  })
})

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
          console.log("NAME? " + data.results[i].name)
        } else {
          console.log("no match")
        }
      }
    }
          console.log("Matching Climates: " +matchClimate)
  })
}

function searchTerrain() {
  var url = "http://swapi.co/api/planets"
  $.get(url)
  .then(function(data){
    console.log(data)
    for (var i = 0; i < data.results.length; i++) {
      var terrainData= data.results[i].terrain.split(", ");
      for (var j = 0; j < terrainData.length; j++) {
        if (terrainData[j] === terrain) {
          matchTerrain.push(data.results[i].name)
          console.log("NAME? " + data.results[i].name)
        } else {
          console.log("no match")
        }
      }
    }
          console.log("Matching Terrains: " +matchTerrain)
  })
}

function matchedPlanets(matchClimate, matchTerrain){
  console.log("matchTerrain looks like: " + matchTerrain)
  console.log("matchClimate looks like: " + matchClimate)
  for(var i=0; i<matchClimate.length;i++){
    for(var j=0; j<matchTerrain.length; j++){
      if (matchClimate[i]===matchTerrain[j]){
        returnedPlanets.push(matchClimate[i])
      }
    }
  }
  if (returnedPlanets.length>=1){
    console.log("returned planets "+ returnedPlanets)
    document.querySelector('#planetHere').textContent = "Vacation on: "
    document.querySelector('#planetHere').append(returnedPlanets.toString(", "))
  }else {
    console.log("vacation elsewhere")
  }


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
