let downarrow = document.querySelector(".arrow");
let education = document.querySelector(".education");
let skills = document.querySelector(".skills");
let aspirations = document.querySelector(".aspirations");


if(downarrow !== null) {



downarrow.addEventListener('click', function() {
    
    window.scrollBy({
        top: 700,
        left: 0,
        behavior:'smooth'
    })

});
}

education.addEventListener('click',function(){
    let educationtitle = document.querySelector(".educationtitle");
    let educationtext = document.querySelector(".educationcontent");
    skills.style.display = "none";
    aspirations.style.display = "none";
    education.style.width = "1100px";
    education.style.height = "400px";
    education.style.marginLeft = "150px";
    let educationpicture = document.querySelector(".educationpicture");
    educationpicture.style.display = "block";
    educationpicture.style.height = "350px";
    educationpicture.style.width = "auto";
    educationtitle.style.marginTop = "-2%";
    educationtext.style.width = "70%";
});

education.addEventListener('mouseleave', function() {
    let educationtitle = document.querySelector(".educationtitle");
    let educationtext = document.querySelector(".educationcontent");
    let educationpicture = document.querySelector(".educationpicture");

    // Show the other sections again
    skills.style.display = "block";
    aspirations.style.display = "block";

    // Reset styles
    education.style.width = "";
    education.style.height = "";
    education.style.marginLeft = "";
    educationpicture.style.display = "";
    educationpicture.style.height = "";
    educationpicture.style.width = "";
    educationtitle.style.marginTop = "";
    educationtext.style.width = "";
});

skills.addEventListener('click', function() {
    let skillstitle = document.querySelector(".skillstitle");
    let skillslist = document.querySelector(".skillslist");
    let skillspicture = document.querySelector(".skillspicture");
    let skillscontent = document.querySelector(".skillscontent");

    education.style.display = "none";
    aspirations.style.display = "none";
    skills.style.width = "1000px";
    skills.style.height = "400px";
    skills.style.marginLeft = "150px";
    skillspicture.style.display = "block";
    skillspicture.style.height = "350px";
    skillspicture.style.width = "auto";
    skillspicture.style.marginRight = "20px";
    skillstitle.style.marginTop = "-2%";
    skillscontent.style.width = "50%";
    skillslist.style.marginLeft = "2%";
});

skills.addEventListener('mouseleave', function() {
    let skillstitle = document.querySelector(".skillstitle");
    let skillscontent = document.querySelector(".skillscontent");
    let skillspicture = document.querySelector(".skillspicture");

    education.style.display = "block";
    aspirations.style.display = "block";
    skills.style.width = "";
    skills.style.height = "";
    skillspicture.style.display = "";
    skillspicture.style.height = "";
    skillspicture.style.width = "";
    skillstitle.style.marginTop = "";
    skillscontent.style.width = "";
});