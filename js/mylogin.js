function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.userid.value == "sajibkumar8668" && form.pswrd.value == "SAjib8668@")
  {
    open('Personal/index.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("You Are Not Sajib")/*displays error message*/
  }
}



// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}