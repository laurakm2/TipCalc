//script.js


//calculateTip function
function calculateTip() {
    
  //Store input data
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;
    
    //quick validation
    if(billAmount === "" || serviceQuality == 0){
       return alert("Please enter a value to use the Calculator!");
    } 
    
    //Is there an input in Number of People?
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
     document.getElementById("each").style.display = "none";   
        
    }else{
    document.getElementById("each").style.display = "block";
    
    }
    
    //The math section
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100)/100;
    total = total.toFixed(2);
  
    //Display the actual Tip Amount
    
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
};







//Hide Tip Amount on Load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Click the button to call my function
document.getElementById("calculate").onclick = function(){ calculateTip(); };
