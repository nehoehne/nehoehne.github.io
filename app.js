const red = "#bc4749";
const lightGrey = "#fcfcfc"; 

let activeTab = null; 

class Tab {
    constructor(btn, content) {
        this.btn = btn 
        this.content = content
        this.isActive = false
    }
    activate(isActive) {
        if(isActive) {
            this.btn.style.color = red; 
            this.btn.style.backgroundColor = lightGrey; 
            this.content.style.display = "block"
        } else {
            this.btn.style.color = "black"; 
            this.btn.style.backgroundColor = "white"; 
            this.content.style.display = "none"
        }
        this.isActive = isActive; 
    }

}

const enableNavigation = () => {
    const numPages = 4;
    const navBtns = document.querySelectorAll(".nav-button")
    const pages = document.querySelectorAll("section");
    const tabs = []

    if(navBtns.length !== pages.length) {
        throw new Error("Internal error: nav and content mismatched...")
    }

    else if(navBtns.length > numPages || pages.length > numPages) {
        throw new Error("Internal error: missing content..."); 
    }

    //make tab objects 
    for(let i = 0; i < numPages; i++) 
        tabs.push(new Tab(navBtns[i], pages[i]));
    
    for(let i = 0; i < numPages; i++) {
        navBtns[i].addEventListener("click", function() {
            let currTab = tabs[i];
            
            if(activeTab)
                activeTab.activate(false)

            if(currTab !== activeTab) {
                currTab.activate(true);
                activeTab = currTab; 
            } else {
                activeTab = null;
            }
        })
    }
}

const isActive = (page) => {
    return activePage === page; 
}

// const setActiveTab = (shouldActivate, tab, page) {
//     showContent(shouldActivate, page);
//     setStyles(shouldActivate, tab); 
// }

// const toggleDisplay = (element) => {
//     if(element === null) return; 

//     if(element.style.display === "block") {
//         element.style.display = "none";
//     } else {
//         element.style.display = "block";
//     }
// }

// const toggleActiveTab = (tab) => {
//     if(!tab) throw new Error(`Unexpected null pointer: page = ${tab}`); 
    
//     if(element.style.display === "block") {
//         element.style.display = "none";
//     } else {
//         element.style.display = "block";
//     }
// }

const main = () => {
    console.log("called main!")
    enableNavigation(); 
}

main(); 