const courses = [

{code:"CSE110", credits:2, subject:"CSE", completed:true},
{code:"CSE111", credits:2, subject:"CSE", completed:true},
{code:"CSE210", credits:2, subject:"CSE", completed:false},

{code:"WDD130", credits:2, subject:"WDD", completed:true},
{code:"WDD131", credits:2, subject:"WDD", completed:true},
{code:"WDD231", credits:2, subject:"WDD", completed:false}

];

const courseContainer = document.querySelector("#courses");
const creditDisplay = document.querySelector("#totalCredits");

function displayCourses(courseList){

courseContainer.innerHTML="";

courseList.forEach(course => {

const card = document.createElement("div");

card.classList.add("course");

if(course.completed){
card.classList.add("completed");
}

card.textContent = course.code;

courseContainer.appendChild(card);

});

const totalCredits = courseList.reduce((sum, course)=> sum + course.credits,0);

creditDisplay.textContent = totalCredits;

}

displayCourses(courses);

document.querySelector("#all").addEventListener("click", ()=>{
displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", ()=>{
displayCourses(courses.filter(course => course.subject === "WDD"));
});

document.querySelector("#cse").addEventListener("click", ()=>{
displayCourses(courses.filter(course => course.subject === "CSE"));
});