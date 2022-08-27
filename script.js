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


var buttonSend = document.getElementById("submit");
var tabUsers = [];
buttonSend.addEventListener("click", Afficher);

function Afficher()
 {
   var list = document.getElementById("list");
   var prenom = document.getElementById("username").value;
   var nom = document.getElementById("name").value;
   var mail = document.getElementById("mail").value;
   var phone = document.getElementById("phone").value;
   var message = document.getElementById("message").value;

   list.innerHTML = "<p>Prenom :"+ prenom +"</p>"+"<p>Nom :"+ nom +"</p>"+"<p>Adresse mail:"
                    + mail +"</p>"
                    +"<p>Numéro: "+ phone +"</p>"+"<p>Message: "+ message +"</p>";
    
    var objUsers = 
    {
        PRENOM : prenom,
        NOM: nom,
        MAIL: mail,
        PHONE: phone,
        MESSAGE : message,

    }
  
   tabUsers.push(objUsers);
   console.log(tabUsers)

}