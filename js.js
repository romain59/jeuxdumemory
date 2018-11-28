var DosCarte = [1,1,2,2,3,3,4,4,5,5,6,6];

var CarteRetourne = [0,0,0,0,0,0,0,0,0,0,0,0];

var PaireTrouve = [];

var NbPaireTrouve = 0;

var ImageCarte = document.getElementById('PlanDeJeux').getElementsByTagName("img");

var pseudo;

var myvar;

// Programme du Jeux

for ( var i = 0; i < ImageCarte.length; i++) {

            ImageCarte[i].CarteNo = i;
            ImageCarte[i].onclick = function () {
            ProgrammeJeux(this.CarteNo);
    }
};

InitialisationJeux();

function AffichageCarte(CarteNo) {

    switch ( CarteRetourne[CarteNo]) {

        case 0:
            ImageCarte[CarteNo].src="logo-pokemon-go.png";
            break;
        case 1:

            ImageCarte[CarteNo].src="pokemon"+DosCarte[CarteNo]+".png";
            console.log('test');
            break;
        case -1:
            ImageCarte[CarteNo].style.visibility="hidden";
            break;


    }
}

function InitialisationJeux () {

    for ( var m = DosCarte.length - 1; m >= 1; m--) {

        var random = Math.floor(Math.random()*( m + 1 ));
        var SauvegardeCarte = DosCarte[m];
        DosCarte[m] = DosCarte[random];
        DosCarte[random] = SauvegardeCarte;
    }}

function ProgrammeJeux(CarteNo) {
    
    if ( PaireTrouve.length < 2) {
        
        if (CarteRetourne [CarteNo] == 0 ) {

            CarteRetourne [CarteNo] = 1;
            PaireTrouve.push(CarteNo);
            AffichageCarte(CarteNo);
        }

        if(PaireTrouve.length==2){

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

                if(NbPaireTrouve ==6 ){

                    document.getElementById('modal').style.top ='90px';
                    document.getElementById('texte').innerHTML = 'Bien Joué vous avez gagné !!';

                    clearTimeout(Tps);
                    clearTimeout(myvar);

                    document.getElementById('classement').innerHTML += pseudo + ' à reussi le jeux en ' + ( Sec - seconde) + ' Seconde !' ;

                }},1000)

        }}};

// Classementf

document.getElementById('Submit').addEventListener("click",

    function () {

            pseudo = document.getElementById('input').value;


    });

// Modal

function myFunction() {


    TimeOut();

    myvar = setTimeout(function(){

        document.getElementById('modal').style.top ='110px';
        document.getElementById('texte').innerHTML = 'Désolé le temps est ecoulé, vous avez perdu !!'



    }, 45000);}

function ResetModal() {
        window.location.reload(false);
    }

    // timer

var Minute = document.getElementById('Minute');
var Seconde = document.getElementById('Seconde');

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
            secondeDisplay = '0' + seconde;
        }
        else {
            var secondeDisplay = seconde;
        }

        Seconde.innerHTML = secondeDisplay;

    }

    if ( minute < 10) {

        minuteDisplay = '0' + minute;

    }
    else {
        var minuteDisplay = minute;
    }

    Minute.innerHTML = minuteDisplay;


    if ( seconde == 0) {


        if ( minute > 0) {

            minute = minute - 1;

            if ( minute < 10 ) {
                MinuteDisplay = '0' + minute;
            }
            else {
                var MinuteDisplay = minute;
            }

            Minute.innerHTML = MinuteDisplay;
            seconde = 45;


        }

        Seconde.innerHTML = seconde;

    }};

