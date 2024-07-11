console.log('hi');

const getUserChoice = (userInput) => {
  userInput= userInput.toLowerCase();
    if(userInput === 'rock'){
    return userInput;
    }else if(userInput === 'paper'){
      return userInput;
    }else if(userInput === 'scissors'){
      return userInput;
    }else if(userInput === 'bomb'){
      return userInput;
    }else{
      console.log('Error');
      return;
    }
}

/*console.log(getUserChoice('pAper')); //can delete */

const getComputerChoice = () => {
  randomNum = Math.floor(Math.random()* 3);
  if(randomNum === 0){
    return 'rock';}
  if(randomNum === 1){
    return 'paper';}
  if(randomNum === 2){
    return 'scissors';}
  else {
    return 'error';}
}

/*console.log(getComputerChoice()); //can delete*/

const userInput ='rOck'
const userChoice = getUserChoice(userInput);
const computerChoice = getComputerChoice();

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice==='bomb'){
    return 'You used the cheat code. BAM You won!'; }
  if(userChoice===computerChoice){
    return 'It\'s a tie.';}
  if(userChoice==='rock'){
    if(computerChoice==='paper'){
      return 'You Won!'; }
    else if(computerChoice === 'scissors'){
      return 'You Won!'; }
    else{
      return 'Error.'; }
  }
  if(userChoice==='paper'){
    if(computerChoice==='rock'){
      return 'You Lost.'; }
    if(computerChoice === 'scissors'){
      return 'You Lost.'; }
    else{
      return 'Error.'; }
  }
  if(userChoice==='scissors'){
    if(computerChoice==='rock'){
      return 'You Lost.'; }
    if(computerChoice === 'paper'){
      return 'You Won!'; }
    else{
      return 'Error.'; }
  }
  else{
      return 'Error.'; }
};

/*console.log(determineWinner(userChoice, computerChoice)); //can delete*/

const playGame = () => {
  const userChoice=getUserChoice('bOmb');
  const computerChoice=getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();
