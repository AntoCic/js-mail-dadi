let emailList = ["anto@gmail.com", "filippo@gmail.com", "carlo@gmail.com"];

const email = document.getElementById("email");
const emailHelp = document.getElementById("emailHelp");
const check_email = document.getElementById("check_email");

const roll_dice = document.getElementById("roll_dice");
const result_my_d = document.getElementById("result_my_d");
const result_pc_d = document.getElementById("result_pc_d");
const info_vincitore = document.getElementById("info_vincitore");

check_email.addEventListener("click", function () {
  let emailHelpText = "";
  for (let index = 0; index < emailList.length; index++) {
    if (emailList[index] == email.value) {
      emailHelpText = emailList[index] + " accesso consentito";
      email.value = "";
    }
  }
  if (emailHelpText == "") {
    emailHelpText = "Accesso negato";
  }
  emailHelp.textContent = emailHelpText;
});

roll_dice.addEventListener("click", function () {
  const myDice = Math.round(Math.random() * 5) + 1;
  const pcDice = Math.round(Math.random() * 5) + 1;
  result_my_d.textContent = myDice;
  result_pc_d.textContent = pcDice;

  if (myDice === pcDice) {
    info_vincitore.textContent= "Pareggio";
  } else if (myDice > pcDice){
    info_vincitore.textContent= "Hai vinto";
  }else{
    info_vincitore.textContent= "Hai perso";
  }
});
