let downarrow = document.querySelector(".arrow");
let education = document.querySelector(".education");
let skills = document.querySelector(".skills");
let aspirations = document.querySelector(".aspirations");


if(downarrow !== null) {

    
    downarrow.addEventListener('click', function() {
        let target = document.querySelector('.aboutmecontainer');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
function resetSections() {
    // Education
    let educationtitle = document.querySelector(".educationtitle");
    let educationtext = document.querySelector(".educationcontent");
    let educationpicture = document.querySelector(".educationpicture");
    if (education) {
        education.style.display = "";
        education.style.width = "";
        education.style.height = "";
        education.style.marginLeft = "";
    }
    if (educationpicture) {
        educationpicture.style.display = "none";
        educationpicture.style.height = "";
        educationpicture.style.width = "";
    }
    if (educationtitle) educationtitle.style.marginTop = "";
    if (educationtext) educationtext.style.width = "";

    // Skills
    let skillstitle = document.querySelector(".skillstitle");
    let skillslist = document.querySelector(".skillslist");
    let skillspicture = document.querySelector(".skillspicture");
    let skillscontent = document.querySelector(".skillscontent");
    if (skills) {
        skills.style.display = "";
        skills.style.width = "";
        skills.style.height = "";
        skills.style.marginLeft = "";
    }
    if (skillspicture) {
        skillspicture.style.display = "none";
        skillspicture.style.height = "";
        skillspicture.style.width = "";
        skillspicture.style.marginRight = "";
    }
    if (skillstitle) skillstitle.style.marginTop = "";
    if (skillscontent) skillscontent.style.width = "";
    if (skillslist) skillslist.style.marginLeft = "";

    // Aspirations
    let aspirationstitle = document.querySelector(".aspirationsstitle");
    let aspirationstext = document.querySelector(".aspirationstext");
    let aspirationscontent = document.querySelector(".aspirationscontent");
    let aspirationsimage = document.querySelector(".aspirationspicture");
    if (aspirations) {
        aspirations.style.display = "";
        aspirations.style.width = "";
        aspirations.style.height = "";
        aspirations.style.marginLeft = "";
    }
    if (aspirationsimage) {
        aspirationsimage.style.display = "none";
        aspirationsimage.style.height = "";
        aspirationsimage.style.width = "";
        aspirationsimage.style.marginRight = "";
    }
    if (aspirationstitle) aspirationstitle.style.marginTop = "";
    if (aspirationscontent) aspirationscontent.style.width = "";
    if (aspirationstext) aspirationstext.style.marginLeft = "";
}
document.addEventListener('click', function(event) {
    // If the click is NOT inside any of the three sections
    if (
        !education.contains(event.target) &&
        !skills.contains(event.target) &&
        !aspirations.contains(event.target)
    ) {
        resetSections();
    }
});

education.addEventListener('click',function(){
    let educationtitle = document.querySelector(".educationtitle");
    let educationtext = document.querySelector(".educationcontent");
    skills.style.display = "none";
    aspirations.style.display = "none";
    education.style.width = "1100px";
    education.style.height = "400px";
    education.style.marginLeft = "150px";
    educationtitle.style.marginTop = "-2%";
    let educationpicture = document.querySelector(".educationpicture");
    educationpicture.style.display = "block";
    educationpicture.style.height = "350px";
    educationpicture.style.width = "auto";
    educationtext.style.width = "70%";
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
aspirations.addEventListener('click', function() {
    let aspirationstitle = document.querySelector(".aspirationsstitle");
    let aspirationstext = document.querySelector(".aspirationstext");
    let aspirationscontent = document.querySelector(".aspirationscontent");
    let aspirationsimage = document.querySelector(".aspirationspicture");

    education.style.display = "none";
    skills.style.display = "none";
    aspirations.style.width = "1000px";
    aspirations.style.height = "400px";
    aspirations.style.marginLeft = "150px";
    aspirationsimage.style.display = "block";
    aspirationsimage.style.height = "350px";
    aspirationsimage.style.width = "auto";
    aspirationsimage.style.marginRight = "20px";
    aspirationstitle.style.marginTop = "-2%";
    aspirationscontent.style.width = "50%";
    aspirationstext.style.marginLeft = "2%";
});
document.addEventListener('click', function(event) {
    // If the click is NOT inside any of the three sections
    if (
        !education.contains(event.target) &&
        !skills.contains(event.target) &&
        !aspirations.contains(event.target)
    ) {
        resetSections();
    }
});