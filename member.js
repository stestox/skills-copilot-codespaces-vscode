function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsBtn = document.getElementById("memberSkillsBtn");
    var memberSkillsBtnText = document.getElementById("memberSkillsBtnText");
    var memberSkillsBtnIcon = document.getElementById("memberSkillsBtnIcon");
    if (memberSkills.style.display === "none") {
        memberSkills.style.display = "block";
        memberSkillsBtnText.innerHTML = "Hide";
        memberSkillsBtnIcon.className = "fa fa-chevron-up";
    } else {
        memberSkills.style.display = "none";
        memberSkillsBtnText.innerHTML = "Show";
        memberSkillsBtnIcon.className = "fa fa-chevron-down";
    }
}