// objet de question et objet de reponse par ex
//
// objet reponse question . si elle juste ou pas
// event : click sur l'option 
// si juste increment score et passe à la question suivant
// score? 

// Tableu d'objet , chaque question est un objet. à l'interieur du quelle

let Questions = [
    {
    question:"Quel est l'organe responsable du pompage du sang dans le corps humain?",
    options:["Coeur","Poumon","Foie","Estomac"],
    reponse: "Coeur"
    },

    {
        question :"Quelle est la planète la plus proche du Soleil dans notre système solaire?",
        options:["Mars","Vénus","Mercure","Jupiter"],
        reponse: "Mercure"
    },
        {
            question:"Quel est l'élément chimique le plus abondant dans l'univers?",
            options:["Oxygène","Hydrogène"," Carbone","Azote"],
            reponse: "Oxygène"
            },

        {
                question:"Quelle loi de la physique affirme que pour chaque action, il y a une réaction égale et opposée",
                options:["Loi d'Ohm"," Loi de Hooke","Loi de Newton","Loi de Boyle"],
                reponse: "Loi de Newton"
                },
        {
            question:"Quelle est la force qui maintient les objets sur la surface de la Terre ?",
            options:["La gravité","La friction","La pression atmosphérique","La force magnétique"],
            reponse:"La gravité",
        },
        {
            question:"Quel est l'organe du corps humain chargé de la digestion des aliments ?",
            options:["L'estomac","Le cerveau","Le foie","Les reins"],
            reponse:"L'estomac",
        },
        {
            question:"Quel est le processus par lequel les plantes convertissent la lumière en énergie chimique ?",
            options:["Photosynthèse","Respiration","Transpiration","Évaporation"],
            reponse:"Photosynthèse",
        },
        {
            question:"Quel est le nom de la plus petite unité de matière ?",
            options:["Molécule","Cellule","Atome","Électron"],
            reponse:"Atome",
        },
        {
            question:"Quel est le nom du processus par lequel un solide se transforme directement en gaz sans passer par l'état liquide ?",
            options:["Fusion","Condensation","Sublimation","Évaporation"],
            reponse:"Sublimation",
        },
        {
            question:"Quelle est l'unité de mesure de la force dans le Système International d'unités ?",
            options:["Newton","Joule","Pascal","Watt"],
            reponse:"Newton",
        }
        

];


console.log(Questions);


//  // 
//  for (let index = 0; index < Questions.length; index++) {
//     const questionActuelle = Questions[index];
    
//     // je prend la div ou je veux afficher la question
//     let questionAffichage = document.getElementById('question');
//     let optionAffichage = document.querySelectorAll('option')


//     // Update  div mettendo la mia domanda
//     questionAffichage.textContent = questionActuelle.question;
//     optionAffichage.textContent = questionActuelle.options[index];

//  }



let currentQuestionIndex = 0;
let score = 0;

// Function to check the user's answer and update the score
function checkAnswer(selectedOption) {
    const currentQuestion = Questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.reponse) {
        score += 10; // incremente de 10 la barre
        alert('YESS SSIR' ) // message reponse correcte
    } else{
        alert('Oupsie!Reponse pas correcte tu fera mieux à la prochaine ' );// message reponse fausse

    }

    // Actualiser l'affichage de la barre , label et niveau
    const scoreContainer = document.querySelector('.score');
    scoreContainer.innerHTML = `
    <label for="score">Score:${score}%</label>
    <progress id="file" max="100" value="${score}"></progress>
`;
    // passer à la question d'apres ou finir le jeux
    currentQuestionIndex++;

    if (currentQuestionIndex < Questions.length) {
        updateQuestion(); // si <totalité des question je continue
    } else {
        // Fin du quiz avec les points
        alert('Bravo ton score final est: ' + score);
    }
}

// Mettre à jour les option correspondante à la question actuelle
    function updateQuestion() {
        const questionActuelle = Questions[currentQuestionIndex];
        const questionAffichage = document.getElementById('question'); // affiche dans la div question
        const optionsAffichage = document.querySelector('.Reponses');// les option dans la div reponses

    // nouvelle question qui s'affiche
    questionAffichage.textContent = questionActuelle.question; 

    // refresh les options 
    optionsAffichage.innerHTML = ''; // en les enleveant

    // crée à nouveau les options pour la question actuelle avec append
    questionActuelle.options.forEach((option, index) => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        optionsAffichage.appendChild(optionElement);

        // rajoute un event listenerpour chaque option
        optionElement.addEventListener('click', () => {
            checkAnswer(option);
        });
    });
}

// Initial question update
updateQuestion();
// // button pour reload la page et rejouer à nouveua
// let joueEncore = document.createElement('button');

// document.quizContainer.appendChild(joueEncore)


