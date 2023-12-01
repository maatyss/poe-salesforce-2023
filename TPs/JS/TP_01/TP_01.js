function genererNombreAleatoire() {
  return Math.floor(Math.random() * 100) + 1
}

function jouerAuJeu() {
  // Init
  let toFind = genererNombreAleatoire()
  let turn = 0
  let score = 0
  
  const newGame = confirm('Souhaitez-vous démarrer une nouvelle partie ?')
  
  // Si l'utilisateur ne souhaite pas démarrer une nouvelle partie, sortir de la fonction
  if (!newGame) {
    return
  }
  
  // Main while
  while (turn < 10) {
    // Get the user Input
    let userInput = prompt(`Choisissez un nombre entre 1 et 100 (${turn}/10)`)
    
    // Check if userInput is valid
    if (userInput === null || isNaN(userInput) || userInput < 1 || userInput > 100) {
      alert('Réponse invalide !')
      continue // Annule le tour en cours
    }
    
    // Parse userInput into Integer
    userInput = parseInt(userInput)
    
    // Check if User find the answer
    if (userInput === toFind) {
      score = (10 - turn) * 10
      alert(`Bravo ! Vous avez trouvé le bon nombre en ${10 - turn + 1} essais ! Vous avez fait un score de ${score} points.`)
      break
    } else {
      // Return if Input is greater or smaller than toFind
      alert(`Le chiffre à trouver est ${userInput < toFind? 'plus grand' : 'plus petit'} que ${userInput} !`)
    }
    
    turn++
  }
  
  // If turn > 10
  if (turn >= 10) {
    alert(`ECHEC : Le nombre à trouver était ${toFind} !`)
  }
}

jouerAuJeu()