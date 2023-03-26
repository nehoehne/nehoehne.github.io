let activePage = null; 

const activateNavigation = () => {
    const numPages = 4;
    const navButtons = document.querySelectorAll(".nav-button")
    const pages = document.querySelectorAll("section");

    if(navButtons.length !== pages.length) {
        throw new Error("Internal error: nav and content mismatched...")
    }

    else if(navButtons.length > numPages || pages.length > numPages) {
        throw new Error("Internal error: missing content..."); 
    }

    for(let i = 0; i < numPages; i++) {
        navButtons[i].addEventListener("click", () => {
            let currPage = pages[i];
            if(!isActive(currPage)) {
                toggleDisplay(activePage);
                activePage = currPage; 
            } else {
                activePage = null;
            }
            toggleDisplay(currPage);
        })
    }
}

const isActive = (page) => {
    return activePage === page; 
}

const toggleDisplay = (element) => {
    if(element === null) return; 

    if(element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

const main = () => {
    console.log("called main!")
    activateNavigation(); 
}

main(); 