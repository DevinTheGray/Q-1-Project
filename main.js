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

 
