var DosCarte = [1,1,2,2,3,3,4,4,5,5,6,6];

var CarteRetourne = [0,0,0,0,0,0,0,0,0,0,0,0];

var PaireTrouve = [];

var NbPaireTrouve = 0;

var ImageCarte = document.getElementById('PlanDeJeux').getElementsByTagName("img");

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
    }

}

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

    },1000)

        }}};

function myFunction() {

    setTimeout(function(){

        document.getElementById('modal').style.top ='180px';

    }, 30000);}
    
    function ResetModal() {
        window.location.reload(false);
    }