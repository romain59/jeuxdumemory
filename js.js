var DosCarte = [1,1,2,2,3,3,4,4,5,5,6,6];

var CarteRetourne = [0,0,0,0,0,0,0,0,0,0,0,0];

var PaireTrouve = [];

var NbPaireTrouve = 0;

var ImageCarte = document.getElementById("PlanDeJeux").getElementsByTagName("img");

var pseudo;

var myvar;

// Programme du Jeux

for ( i = 0; i < ImageCarte.length; i++) { // The function thus defined is executed each time the user clicks on the Diagramme his role is to call controleJeu with the number of the clicked Diagramme.

    console.log(i);
            ImageCarte[i].CarteNo = i; // Adding the CarteNo property to the img object
            ImageCarte[i].onclick = function () {
            ProgrammeJeux (this.CarteNo);
    };
}

InitialisationJeux();

function AffichageCarte(CarteNo) {

    switch ( CarteRetourne[CarteNo]) {

        case 0:
            ImageCarte[CarteNo].src="logo-pokemon-go.png"; // state 0: card face down, we display the Diagramme of card back: fondcarte.png ,
            break;
        case 1:

            ImageCarte[CarteNo].src="pokemon"+DosCarte[CarteNo]+".png"; // state 1: card returned, one displays the Diagramme of the corresponding pattern, note that the different images of the patterns are in the files named carte1.png , carte2.png , etc.,
            console.log("test");
            break;
        case -1:
            ImageCarte[CarteNo].style.visibility="hidden"; // state -1: card removed from the game, we hide the element img .
            break;


    }
}

function InitialisationJeux () {

    for ( m = DosCarte.length - 1; m >= 1; m--) {

        var random = Math.floor(Math.random()*( m + 1 )); // This loop allows to mix the card game
        console.log(random);
        var SauvegardeCarte = DosCarte[m];
        console.log(SauvegardeCarte);
        DosCarte[m] = DosCarte[random];
        DosCarte[random] = SauvegardeCarte;
    }}

function ProgrammeJeux(CarteNo) {
    
    if ( PaireTrouve.length < 2) { // this function allows you to return two maximun cards.
        
        if (CarteRetourne [CarteNo] == 0 ) {

            CarteRetourne [CarteNo] = 1;
            PaireTrouve.push(CarteNo);
            AffichageCarte(CarteNo);
        }

        if(PaireTrouve.length==2){ // If the player finds a pair this code is done.

            var nouveauEtat=0;
            if(DosCarte[PaireTrouve[0]]==DosCarte[PaireTrouve[1]]){
                nouveauEtat=-1;
                NbPaireTrouve++;
            }

            CarteRetourne[PaireTrouve[0]]=nouveauEtat;
            CarteRetourne[PaireTrouve[1]]=nouveauEtat;

            setTimeout(function(){

                AffichageCarte(PaireTrouve[0]);
                AffichageCarte(PaireTrouve[1]);
                PaireTrouve =[];

                if(NbPaireTrouve ==6 ){ // If the player finds the six pairs this code is done.

                    document.getElementById("modal").style.top ="90px";
                    document.getElementById("texte").innerHTML = "Bien Joué vous avez gagné !!";

                    clearTimeout(Tps);
                    clearTimeout(myvar);

                    document.getElementById("classement").innerHTML += pseudo + " à reussi le jeux en " + ( Sec - seconde) + " Seconde !" ;

                }},1000)

        }}};

// Classement

document.getElementById("Submit").addEventListener("click",

    function () {

            pseudo = document.getElementById("input").value; // Get the value returned by the user.
    });

// Modal

function myFunction() {


    TimeOut();

    myvar = setTimeout(function(){ // If the player does not find all the pair in the given time this code is done.

        document.getElementById("modal").style.top ="110px";
        document.getElementById("texte").innerHTML = "Désolé le temps est ecoulé, vous avez perdu !!";
        document.getElementById("titre").innerHTML = "";
        console.log("titre");
        document.getElementById("Pairs").innerHTML = "Vous avez trouvez " + NbPaireTrouve + " Paire";



    }, 45000);}

function ResetModal() {
        window.location.reload(false);
    }

    // timer

var Minute = document.getElementById("Minute");
var Seconde = document.getElementById("Seconde");

var minute = 0;
var seconde = 45;

var Sec = 45;

var Tps;

var TimeOut = function () {

    clearTimeout(Tps);

    Tps = setTimeout(TimeOut, 1000);

    if ( seconde > 0 ) {
        seconde = seconde - 1;

        if(seconde<10)
        {
            secondeDisplay = "0" + seconde;
        }
        else {
            var secondeDisplay = seconde;
        }

        Seconde.innerHTML = secondeDisplay;

    }

    if ( minute < 10) {

        minuteDisplay = "0"+ minute;

    }
    else {
        var minuteDisplay = minute;
    }

    Minute.innerHTML = minuteDisplay;


    if ( seconde == 0) {


        if ( minute > 0) {

            minute = minute - 1;

            if ( minute < 10 ) {
                MinuteDisplay = "0" + minute;
            }
            else {
                var MinuteDisplay = minute;
            }

            Minute.innerHTML = MinuteDisplay;
            seconde = 45;


        }

        Seconde.innerHTML = seconde;

    }};

