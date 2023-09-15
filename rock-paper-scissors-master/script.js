const alertBtn = document.getElementById("alertBtn");
const disableRuleBox = document.getElementById("disableRuleBox")
const showRulesMsg = document.getElementById("showRulesMsg")
const container = document.getElementById("container");
const footer = document.getElementById("footer");
const attribution = document.getElementById("attribution") 

const gamePlayScreen = document.getElementById("gamePlayScreen");
const pentaShapeContainer = document.getElementById("penta-shape-container")


const showGamePlayScreenInput = (val)=>{
    console.log(val);
    gamePlayScreen.style.display="flex";
    if (pentaShapeContainer.style.display="block") {
       pentaShapeContainer.style.display="none"; 
    }
    
}


const showAlert =()=>{
    showRulesMsg.style.display='block';
    container.style.display='none';
    footer.style.display='none'
    attribution.style.display='none'

}


disableRuleBox.addEventListener('click',()=>{

    if (showRulesMsg.style.display='block') {
        showRulesMsg.style.display ='none';
        container.style.display='flex';
        footer.style.display='flex'
        attribution.style.display='block'
    }
    


})