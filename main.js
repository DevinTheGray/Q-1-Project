
$(document).ready(function() {
  $('#dropdown1').click(function(event){
    console.log(event.target.innerHTML);
    document.querySelector('#textFieldId').textContent = "selected climate: "
    document.querySelector('#textFieldId').append(event.target.innerHTML);
    searchClimate()
  })

  $('#dropdown2').click(function(event){
    console.log(event.target.innerHTML);
    document.querySelector('#secondText').textContent = "selected terrain: "
    document.querySelector('#secondText').append(event.target.innerHTML);
    searchTerrain()
  })



 });

// get climate function
function searchClimate() {
  var url = "http://swapi.co/api/planets"
  $.get(url)
  .then(function(data){
    for (var i = 0; i < data.results.length; i++) {
      console.log(data.results[i].climate);

    }





    var name = data.results.length
    // console.log(name)
    // updatePageOne(name, tagline)
  })
}
//get terrain function

function searchTerrain() {
  var url = "http://swapi.co/api/planets"
  $.get(url)
  .then(function(data){
    for (var i = 0; i < data.results.length; i++) {
      console.log(data.results[i].terrain);

    }
    var name= data.results.length
  })
}



// For customer input
 $(document).ready(function() {
    Materialize.updateTextFields();
  });

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
