function play()
{
   
    var x = document.getElementsByClassName("bloc");
    var y = document.getElementsByClassName("para");
    for (var i=0; i < x.length; i++)
    {
        y[i].classList.toggle("decoP");
        x[i].classList.toggle("decobloc");

    }
    
}
