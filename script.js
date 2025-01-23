//your code here
let randomImage ="img"+ Math.floor(Math.random()*5+1);
let images = ["img1","img2","img3","img4","img5",randomImage];
let verifyBtn = document.querySelector("#verify");
let resetBtn = document.querySelector("#reset");
let para = document.querySelector("#para")

shuffle =(arr) => {
    for(let index = arr.length-1; index > 0; index--){
        let jindex = Math.floor(Math.random()*(index+1));
        [arr[index],arr[jindex]] = [arr[jindex],arr[index]];
    }
}

shuffle(images);

// here we display images

let imageElement = document.querySelectorAll("img");
imageElement.forEach((image,index) => {
    image.className = images[index];
});

let selectedArray = [] // it will be keeps track of selected images

for(let image of imageElement){
    image.addEventListener("click", () => {
        
        image.classList.add("selected");
        resetBtn.style.display = "block";
        selectedArray.push(image);
        
        if(selectedArray.length === 2){
            verifyBtn.style.display = "block";
        }
    });
}

reset = () => {
    for(let image of imageElement){
        image.classList.remove("selected");
    }

    resetBtn.style.display = "none";
    verifyBtn.style.display = "none";

    para.innerHTML= "";
    para.style.display = "none";
}

verify = () =>{
    para.style.display = "block";
    if(selectedArray[0].className === selectedArray[1].className){
        para.innerHTML=" You are a human. Congratulations!.";
    }else {
        para.innerHTML = "We can't verify you as a human. You selected the non-identical tiles."
        verifyBtn.style.display ="none";
    }

    
} 

resetBtn.addEventListener("click", reset);
verifyBtn.addEventListener("click",verify);
