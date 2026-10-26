
function myFunction() {
document.getElementById("myHeading").innerHTML = "This is me!";
document.getElementById('myTestEvent').addEventListener('click', function(ev) {
  console.dir(ev);
});
}