console.log("js connected!");



$(document).ready(function() {

   $('select').material_select();




 });
// click climate
 $('#dropdown1').click(function(event){
   console.log(event.target.innerHTML);
   document.querySelector('#textFieldId').textContent = "selected climate"
 })
// click terrain
 $('#dropdown2').click(function(event){
   console.log(event.target.innerHTML);
 })

// For customer input
 $(document).ready(function() {
    Materialize.updateTextFields();
  });

  $('#textarea1').val('');
$('#textarea1').trigger('autoresize');
