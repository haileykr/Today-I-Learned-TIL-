// Not Finished Runner
// Given the arrays of participants and runners who finished the race,
// return the participant who did not finish (there is only one who did not finish)

// 01/20/21
// programmers.co.kr

function solution(participant, completion) {
    var i;
    const lastIndex = completion.length;
    
    participant.sort();
    completion.sort();
    
    for (i=0; i<lastIndex;i++){
       if (participant[i]!= completion[i]){
           return participant[i];
       }
    }
    return participant[lastIndex];
}