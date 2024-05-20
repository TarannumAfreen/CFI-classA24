let taravote=0;
let zeevote=0;
let salvote=0;
let totalVotes=0;


function tarannum(){
    taravote++;
    totalVotes++;
    stopVote(totalVotes);

}

function zeenath(){
    zeevote++;
    totalVotes++;
    stopVote(totalVotes);

}

function salma(){
    salvote++;
    totalVotes++;
    stopVote(totalVotes);

}

function stopVote(content){
    if(content>=8){
    document.getElementById("tara").disabled=true;
    document.getElementById("zee").disabled=true;
    document.getElementById("sal").disabled=true;
    document.getElementById('end').innerHTML="votings are closed";
    alert("Voting line is closed");
   
    console.log(`total votes of tara ${taravote}`)
    console.log(`total votes of zeenath ${zeevote}`)
    console.log(`total votes of salma ${salvote}`)

    console.log(`Winner among Tarannum , Zeenath , Salma`)
    let winner=((taravote>zeevote&&taravote>salvote)?"Tarannum":((salvote>zeevote)?"Salma":"Zeenath"))
   
    alert(`The Winner is ${winner}`);
    document.getElementById('result').innerHTML=`The winner is ${winner}`
    }

}



