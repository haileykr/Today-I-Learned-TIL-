/*
H-Index

Given the list of number of citations of each paper,
return the H-index!!

01/2021
*/

function solution(citations) {
    citations.sort((a,b) => b-a)
    
    let lenCit = citations.length;
    let checkH = lenCit, count = checkH;
    
    while (checkH != 0){
        for (let i=0;i<lenCit;i++){
            if(checkH <= citations[i]){
                count -= 1
                if (count === 0){
                    return checkH
                }
            }
            else break;
        }
        checkH -= 1      
        count = checkH
    }  
    return checkH;
}