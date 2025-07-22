let score = prompt("enter your score (0-100):");
let grade;
if(score >= 90 && score <= 100) {
grade = "A";
} else if(score >= 70 && score <= 89) {
 grade = "B";   
} else if(score >= 70 && score <= 89) {
 grade = "C";    
} else if(score >= 70 && score <= 89) {
  grade = "D";  
} else if(score >= 70 && score <= 89) {
   grade = "F"; 
}
console.log("according to your scores, your grades was : ",grade)