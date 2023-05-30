var refresh = document.getElementById("nav-pbi-refresh-label").parentElement;

setInterval(myMethod, 5000);

function myMethod( )
{
  refresh.click();
}