// Test
// Given the arrays of the answer, and how each person guesses the answer (t1, t2, t3),
// determined who got the highest score
// 01/15/21

function solution(answers) {
    var answer = [1];
    const t1 = [1,2,3,4,5];
    const t2 = [2,1,2,3,2,4,2,5];
    const t3 = [3,3,1,1,2,2,4,4,5,5];

    const count = {1:0, 2:0, 3:0};
    
    for (var i in answers){
        
        if (answers[i] === t1[i % 5]){
            count[1]++;
        }
        if (answers[i] === t2[i % 8]){
            count[2]++;
        }
        if (answers[i] === t3[i % 10]){
            count[3]++;
        }
    }
    
    for (let i=2; i<=3; i++){
        if (count[answer[0]] < count[i]){
            answer = [i]
        }
        else if (count[answer[0]] == count[i]){
            answer.push(i)
        }
    }

    return answer;
}