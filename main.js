console.log("js connected!");



$(document).ready(function() {

   $('select').material_select();




 });
// click climate
 $('#dropdown1').click(function(event){
   console.log(event.target.innerHTML);
   document.querySelector('#textFieldId').textContent = "selected climate: "
   document.querySelector('#textFieldId').append(event.target.innerHTML);
 })
// click terrain
 $('#dropdown2').click(function(event){
   console.log(event.target.innerHTML);
   document.querySelector('#secondText').textContent = "selected climate: "
   document.querySelector('#secondText').append(event.target.innerHTML);
 })

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
