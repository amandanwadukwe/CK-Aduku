let smallScreenPrimaryNavLinks = document.querySelectorAll(".small-screen-header .primary-nav ul li a");
let allPrimaryNavLinks = document.querySelectorAll(".primary-nav ul li a");
let primaryNav = document.getElementById("primary-nav");
let hamburger = document.getElementById("hamburger");
let learnContents = document.querySelectorAll(".learn .learn-content .content");
let learnButtons = document.querySelectorAll(".learn .learn-content button");
let search = document.getElementById("search");
let allLearningResources = document.getElementById("learn");

hamburger.addEventListener("click", () => {
    primaryNav.classList.toggle("hide");
})

smallScreenPrimaryNavLinks.forEach((link,index) => {
    link.addEventListener("click", (e) => {
        // e.preventDefault();
        primaryNav.classList.add("hide");
    })
})

allPrimaryNavLinks.forEach((link,index) => {
    link.addEventListener("click", (e) => {
        // e.preventDefault();

        allPrimaryNavLinks.forEach((primaryLink,primaryLinkIndex) => {
            index == primaryLinkIndex ? (
                primaryLink.classList.add("active")
                
                ) : primaryLink.classList.remove("active")
        })
        
    })
})



learnButtons.forEach((button,index) => {
    button.addEventListener("click", () => {
        learnContents[index].classList.add("reveal");

        learnContents.forEach((content, contentIndex) => {
            index !== contentIndex ? content.classList.remove("reveal"):null;
        } )
    })
})



