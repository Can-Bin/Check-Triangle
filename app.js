const length1 = document.getElementById("length1");
const length2 = document.getElementById("length2");
const length3 = document.getElementById("length3");
const output = document.getElementById("output");
const button = document.querySelector(".checkBtn");

button.addEventListener("click", () => {
    let l1 = parseInt(length1.value);
    let l2 = parseInt(length2.value); 
    let l3 = parseInt(length3.value);
    if(l1 > 0 && l2 > 0 && l3 > 0){
        if((l1 + l2 > l3) && (l1 + l3 > l2) && (l2 + l3 > l1)){
            if (l1==l2 && l2==l3 && l1==l3){
                output.innerHTML = "This is an quilateral triangle "
            }
            else if (l1==l2 || l2==l3 || l1==l3){
                output.innerHTML = "This is an isosceles triangle"
            }

            else{
                output.innerHTML = "This is a scalene triangle"
            }
        }
        else{
            output.innerHTML = "Invalid Triangle. Please enter valid number to create a triangle"
        }
    }
    else{
        output.innerHTML = "Please enter a greater number than 0"
    }
});




