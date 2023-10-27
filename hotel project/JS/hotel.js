
const BUTTON1 = document.getElementById('gym');
BUTTON1.addEventListener("click", triggerClick1)
let btnId1 = BUTTON1.id;
function triggerClick1() {
    console.log(btnId1)
    sessionStorage.setItem('show-more1', btnId1);
    console.log(sessionStorage.getItem('show-more1'));
}



const BUTTON2 = document.getElementById('Jacuzzi');
BUTTON2.addEventListener("click", triggerClick2)
let btnId2 = BUTTON2.id;
function triggerClick2() {
    console.log(btnId2)
    sessionStorage.setItem('show-more2', btnId2);
    console.log(sessionStorage.getItem('show-more2'));
}

const BUTTON3 = document.getElementById('Overlooking');
BUTTON3.addEventListener("click", triggerClick3)
let btnId3 = BUTTON3.id;
function triggerClick3() {
    console.log(btnId3)
    sessionStorage.setItem('show-more3', btnId3);
    console.log(sessionStorage.getItem('show-more3'));
}

const BUTTON4 = document.getElementById('FreshDrinks');
BUTTON4.addEventListener("click", triggerClick4)
let btnId4 = BUTTON4.id;
function triggerClick4() {
    console.log(btnId4)
    sessionStorage.setItem('show-more4', btnId4);
    console.log(sessionStorage.getItem('show-more4'));
}


const BUTTON5 = document.getElementById('GoodRestaurant');
BUTTON5.addEventListener("click", triggerClick5)
let btnId5 = BUTTON5.id;
function triggerClick5() {
    console.log(btnId5)
    sessionStorage.setItem('show-more5', btnId5);
    console.log(sessionStorage.getItem('show-more5'));
}


const BUTTON6 = document.getElementById('SpectacularView');
BUTTON6.addEventListener("click", triggerClick6)
let btnId6 = BUTTON6.id;
function triggerClick6() {
    console.log(btnId6)
    sessionStorage.setItem('show-more6', btnId6);
    console.log(sessionStorage.getItem('show-more6'));
}


function find_max(nums) {
     let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
     for (let num of nums) {
         if (num > max_num) {
             // (Fill in the missing line here)
            
        }
        
    }
     return max_num;
    
}
