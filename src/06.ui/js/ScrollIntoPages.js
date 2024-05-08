import {MapActualPosition} from './MapActualPosition.js'

const actualPositionUI = new MapActualPosition('chessboard','actual-position','row', 'col');

// Simulation 
var currentCol=9;
    setInterval(()=>{
        currentCol++;
        if (currentCol > 28) {
            currentCol = 10;
        }
        actualPositionUI.update(6,currentCol,6, 10);  
    }, 500);

 //   actualPositionUI.update(1, 20, 1, 28);  


function scrollToSection(sectionId, callback) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Listen for scroll event to determine when scrolling is completed
    var scrollHandler = function() {
        // Check if the scroll position matches the target section
        if (Math.abs(section.getBoundingClientRect().top) <= 1) {
            // Remove the event listener once the scroll is completed
            window.removeEventListener('scroll', scrollHandler);
            // Execute the callback function
            if (typeof callback === 'function') {
                callback();
            }
        }
    };

    window.addEventListener('scroll', scrollHandler);
}


export function ScrollIntoPages(){
    document.querySelectorAll(".buttonNavToPages").forEach(button => {
        button.addEventListener("click", function() {
            // Add "selected" class to the clicked button
            this.classList.add("selected");
    
            // Remove "selected" class from all other buttons
            document.querySelectorAll(".buttonNavToPages").forEach(otherButton => {
                if (otherButton !== this) {
                    otherButton.classList.remove("selected");
                }
            });
        });
    });
    
    
    document.getElementById("buttonSection1").addEventListener("click", function() {
        scrollToSection("section1", function() {
       //      actualPositionUI.enableAutoScroll();
            actualPositionUI.disableAutoScroll();
       //      actualPositionUI.update(1, 20, 1, 28); 
        });
        
        // scrollToSection("section1");
        // actualPositionUI.enableAutoScroll();
    });
    document.getElementById("buttonSection2").addEventListener("click", function() {
        actualPositionUI.disableAutoScroll();
        scrollToSection("section2");
    });
    
    document.getElementById("buttonSection3").addEventListener("click", function() {
        actualPositionUI.disableAutoScroll();
        scrollToSection("section3");
    });
    
    document.getElementById("buttonSection4").addEventListener("click", function() {
        actualPositionUI.disableAutoScroll();
        scrollToSection("section4");
    });
    
    // document.getElementById("buttonSection5").addEventListener("click", function() {
    //     scrollToSection("section5");
    // });
    
    // document.getElementById("buttonSection6").addEventListener("click", function() {
    //     scrollToSection("section6");
    // });
}