const textEl = document.getElementById('text1');
const textE2 = document.getElementById('text2');
const textE3 = document.getElementById('text3');
const speedE = document.getElementById('speed')
const text = 'Welcome To My Website '
const text2 = "I'm Ahmed Hussien";
const text3 = "Front-End Developer";
let i = 1, j = 1, k = 1;

let speed = 300 / speedE.value

writeText1();


function writeText1() {
    textEl.innerText = text.slice(0, i);
    i++;
    if (i > text.length) {
       
        textE2.innerText = text2.slice(0, j)
         j++;
        if (j > text2.length) {
           
            textE3.innerText = text3.slice(0, k)
             k++;
            if (k > text3.length) {
                i = j = k = 0;
                textE2.innerText = textE3.innerText = '';
                writeText1();
    } 
        }  
       }   
    setTimeout(writeText1, speed)
    
}
speedE.addEventListener('input', (e) => speed = 300 / e.target.value)


    