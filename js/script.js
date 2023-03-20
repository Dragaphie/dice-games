/*
DICE GAME
Règles du jeu:

Le jeu comprend 2 joueurs sur un seul et même écran.
Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).
À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le
résultat d’un lancer est ajouté au ROUND.
Lors de son tour, le joueur peut décider à tout moment de:
- Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le
tour de l’autre joueur.
- Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
Le premier joueur qui atteint les 100 points sur global gagne le jeu.*/



// les deux boutons avec lesquels on joue
let rollDice = document.querySelector('#roll-dice');
let hold = document.querySelector('#hold');
let newParty =document.querySelector('#newparty');


//l'image de mon dé
let dePicture = document.querySelector('#resultdice');

//Début de la partie mes variables
 let nbr = 0;
 let currentScore = 0;
 let playerActif = '1';
 let finalResult =[];
     finalResult['1'] = 0;
     finalResult['2'] =0;


//cliquer sur bouton rollDice:
//un nonbre aléatoire compris entre 1 et 6 s'affiche dans "your currentScore"
//fonction nombre aléatoire

let nbrRandom =(max,min)=>{

  return Math.floor(Math.random() * 6 + 1);
};

//SI le nombre aléatoire est différent de 1 je continue à incrémenter currentScore
//SINON le nombre est égale à 0, on change de joueur

//fonction changer de joueur

let changePlayer = ()=>{

  if (playerActif == '1'){
    playerActif = '2';

  }else{
    playerActif = '1'    
  }  
 
  document.querySelector('.card-body-1').classList.toggle('actif');
  document.querySelector('.card-body-2').classList.toggle('actif');
};

//lancer le dé

rollDice.addEventListener('click',() =>{

  nbr = nbrRandom();

  if (nbr !== 1) {
    currentScore += nbr;
    document.querySelector('.current-score-'+ playerActif).innerHTML= currentScore;
    
  } else {
    currentScore = 0;
    document.querySelector('.current-score-'+playerActif).innerHTML= currentScore;
    document.querySelector('.globalScore' + playerActif).innerHTML= 0;
    changePlayer()
  }
  dePicture.innerHTML = "<img src= images/"+ nbr +".png >";
  
});

//SI je clique sur le bouton "Hold"le current-score s'additionne sur
//le globalScore; le premier joueur qui a un globalScore >= 100 gagne
//SINON on continue de jouer
//pour continuer de jouer CLIQUER sur "New Gamme"
//les quatres Scores sont réinitialisés à 0 et le dé disparait

//Attibution des Scores
  hold.addEventListener('click', ()=>{
    finalResult[playerActif] += currentScore;

    document.querySelector('.globalScore'+ playerActif).innerHTML= finalResult[playerActif];
    document.querySelector('.current-score-'+ playerActif).innerHTML =0;

    if(finalResult[playerActif] >= 10){
      document.querySelector('.globalScore'+playerActif).innerHTML = "<img src= images/winner.png >";

      document.querySelector('.player1').classList.remove('actif');
            

    }else{
      currentScore=0;
      changePlayer()
      
    }
});
  // Lancer une nouvelle partie

newParty.addEventListener('click', ()=>{
     currentScore = 0;   
     dePicture.innerHTML =' ';
     finalResult =[];
     finalResult['1'] = 0;
     finalResult['2'] =0;
    
    document.querySelector('.globalScore1').innerHTML= 0 ;
    document.querySelector('.globalScore2').innerHTML =0;

    document.querySelector('.current-score-1').innerHTML = 0;
    document.querySelector('.current-score-2').innerHTML = 0;

    document.querySelector('.card-body-1').classList.add('actif');
    document.querySelector('.card-body-2').classList.remove('actif');
    
    
})


