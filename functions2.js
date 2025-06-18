/* CALCULATING STUDENTS MARKS WITHOUT USING FUNCTIONS */

let studentMarks = 63;
let studentTotal = 100;
let studentPercentage;
let studentGrade;

studentPercentage = (studentMarks/studentTotal)*100;

if(studentPercentage >= 90)
{
    studentGrade = "A";
}
else if(studentPercentage >= 80)
{
    studentGrade = "B";
}
else if(studentPercentage >= 70)
{
    studentGrade = "c";
}
else if(studentPercentage >= 60)
{
    studentGrade = "D";
}
else
{
    studentGrade = "E";
}
console.log(studentGrade);


function studentsMarks(studentMarks,studentTotal)
{
    let studentPercentage;
let studentGrade;

studentPercentage = (studentMarks/studentTotal)*100;

if(studentPercentage >= 90)
{
    studentGrade = "A";
}
else if(studentPercentage >= 80)
{
    studentGrade = "B";
}
else if(studentPercentage >= 70)
{
    studentGrade = "c";
}
else if(studentPercentage >= 60)
{
    studentGrade = "D";
}
else
{
    studentGrade = "E";
}
console.log(studentGrade);
}
studentsMarks(93,100);
studentsMarks(73,100);