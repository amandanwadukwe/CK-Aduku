let smallScreenPrimaryNavLinks = document.querySelectorAll(".small-screen-header .primary-nav ul li a");
let allPrimaryNavLinks = document.querySelectorAll(".primary-nav ul li a");
let primaryNav = document.getElementById("primary-nav");
let hamburger = document.getElementById("hamburger");
let learnContents = document.querySelectorAll(".learn .learn-content .content");
let learnContentsForSearch = document.querySelectorAll("#learn .learn-content")
let learnButtons = document.querySelectorAll(".learn .learn-content button");
let search = document.getElementById("search");
let learnSection = document.getElementById("#learn .learn-content-container");

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

        if (button.innerText == "Close"){ 
             learnContents[index].classList.remove("reveal"); 
             learnButtons[index].innerText = "Learn"
             return "";
            }

        learnContents[index].classList.add("reveal");
        learnButtons[index].innerText = "Close"


        learnContents.forEach((content, contentIndex) => {
            index !== contentIndex ? content.classList.remove("reveal"):null; 
        } )

        learnButtons.forEach((button2,buttonIndex)=>{
            buttonIndex !== index ? button2.innerText = "Learn":null;
        })

        
    })
})

// search.addEventListener("input", function(e) {
//     let searchValue = e.target.value;
//     console.log("contents",learnContents[0].outerHTML.includes("inefficiencies"))
//     console.log("search value",searchValue)

//     if (searchValue.length == 0 ){
//         learnContentsForSearch.innerHTML = ""
//     }

//     learnContentsForSearch.innerHTML = "";


//     console.log(Array.from(learnContents).filter(content=> content.outerHTML.includes(searchValue)))
    
//     // divsToSearch.forEach(function(div) {
//     //     let divText = div.textContent.toLowerCase();
//     //     if (divText.includes(searchValue)) {
//     //         div.style.display = "block";
//     //     } else {
//     //         div.style.display = "none";
//     //     }
//     // });
// });

document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function() {
        var searchText = searchInput.value.toLowerCase();
        var learnContents = document.querySelectorAll('.learn-content');
        learnContents.forEach(function(learnContent) {
            var contentText = learnContent.querySelector('.content').textContent.toLowerCase();
            var contentTitleText = learnContent.querySelector('.title').textContent.toLowerCase();
            if (contentText.includes(searchText.toLowerCase()) || contentTitleText.includes(searchText.toLowerCase())) {
                learnContent.style.display = 'block';
            } else {
                learnContent.style.display = 'none';
            }
        });
    });
});






