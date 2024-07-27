
// cheek localStorage
let mainColors = localStorage.getItem("Options");

if (mainColors !== null) {
    // console.log ("locla storge is not empty");
    // console.log (mainColors)

    document.documentElement.style.setProperty( '--main-color' , mainColors);

      // remove class active  all form li color 
        document.querySelectorAll(".color-list li").forEach(s => {
            s.classList.remove("active")

        // add class active on elment with data color === local stroge
        if (s.dataset.color === mainColors){
            s.classList.add("active")
        }    
        });

}

//reandon background images
let backgroundOption = true;

// varible to control the intervail 
    let interval;

/// check if there's lacal stroge random background items 
let backgroundLocalItems = localStorage.getItem("background-option");

if(backgroundLocalItems !== null){
    
    

    if (backgroundLocalItems === 'true'){
        backgroundOption = true;
    }else{
        backgroundOption = false;
    }
    // console.log (backgroundLocalItems)

 // remove active classlist form all elements 
    document.querySelectorAll(".reandom span").forEach(s => {
        s.classList.remove("active")

    });


    if (backgroundLocalItems === 'true'){
    
        document.querySelector(".reandom .yas").classList.add("active")
    }else{
        document.querySelector(".reandom .no").classList.add("active")
    }
} 



// toggle spain calss on icon
document.querySelector(".toggle i").onclick = function()  {
    // toggel class fa-spin for roteted on self 
    this.classList.toggle("fa-spin")
    
    // toggel class open on main setting 
    document.querySelector(".setting").classList.toggle("open");
};
    

// switch color 

let colorsli = document.querySelectorAll(".color-list li");
// loop on li color
colorsli.forEach(li => {
    //click  on evry list item 
    li.addEventListener("click" , (e) => {

        //set color in root 
        document.documentElement.style.setProperty( '--main-color' , e.target.dataset.color);


        // set color localStorage
        localStorage.setItem("Options" , e.target.dataset.color );


        handilActive(e);

        // // remove class active  all form li childrens 
        // e.target.parentElement.querySelectorAll(".active").forEach(s => {
        //     s.classList.remove("active")
        // });

        // //add active class o target 
        // e.target.classList.add("active")
    });
});


// switch background 

const backgroundel = document.querySelectorAll(".reandom span");
// loop on li sapns 

backgroundel.forEach(sapn => {
    //click  on evry list item 
    sapn.addEventListener("click" , (e) => {

        
        handilActive(e);

        // // remove class active  all form SAPNS 
        // e.target.parentElement.querySelectorAll(".active").forEach(s => {
        //     s.classList.remove("active")
        // });

        // //add active class o target 
        // e.target.classList.add("active")

        if (e.target.dataset.background === 'yas'){

            backgroundOption =true;
            reandomizeImage()

            localStorage.setItem("background-option" , true);
        } 
        else {
            
            backgroundOption =false; 
            clearInterval(interval)

            localStorage.setItem("background-option" , false);
        }

    });
});




// select landing page element 
let page = document.querySelector(".landing");

// get Array of image 
let image = ["../image/1.png" , "../image/2.png" , "../image/3.png" , "../image/4.png" , "../image/5.png"];


// function to reandomize
function reandomizeImage() {
    if (backgroundOption === true){
        interval = setInterval( () =>{

    // get renadom number 
    let renadomNumber = Math.floor(Math.random() * image.length);

    // change background image url 
    page.style.backgroundImage = 'url("../image/' +image[renadomNumber] +'")'

}, 5000)
    
};

};

reandomizeImage()

// oul skills

// select skliis seletor 

let ourSkills = document.querySelector(".skillss");

window.onscroll = function (){
    //skills offser top 
    let skillsOutsetTop = ourSkills.offsetTop;
    
    // skills outer hight 
    let skillsOuterHight = ourSkills.offsetHeight;
    
    // window hight 
    let windowHight = this.innerHeight;
    
    // window scroll top
    let windowScrolToppp = this.pageYOffset;
    

    if (windowScrolToppp > (skillsOutsetTop + skillsOuterHight - windowHight)) {

        let allskills = document.querySelectorAll(".box .progress span");

        allskills.forEach(skill => {
            skill.style.width = skill.dataset.progress;

        });
        
    };


};

// creat Popup with the image 
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach (img => {
    img.addEventListener("click" , (e)=> {

        // creat overlly elemetn 
        let overlly = document.createElement("div");

        // add class to overllay 
        overlly.className = 'Popup';

        // append overlly to body 
        document.body.appendChild(overlly)

        // creat the Popup Box 
        let PopupBox = document.createElement("div");
        
        // ccreat class name to PopupBox
        PopupBox.className = 'Popup-Box';

        
        // apennd alt text 
        if(img.alt !== null){

            // creat heading 
            let imhHadind = document.createElement("h3"); 

            // creat text on heading 
            let imgTwxt = document.createTextNode(img.alt)

            // apeend the text to headinng 
            imhHadind.appendChild(imgTwxt);

            //append the hradinf to popp
            PopupBox.appendChild(imhHadind)
        }



        // creat the image 
        let PopupImage = document.createElement("img");

        // change image src 
        PopupImage.src = img.src

        // add img from PopupBox
        PopupBox.appendChild (PopupImage);

        // append PopupImage to body 
        document.body.appendChild(PopupBox);

        // creat close span 
        let closeBouttom = document.createElement("span");

        // creat the close buttom text 
        let closeBouttomText = document.createTextNode("X");

        // append text forcolse button 
        closeBouttom.appendChild(closeBouttomText);

        //add class to clase bottom 
        closeBouttom.className = 'close-Bouttom';

        // append clase bottn for popp 
        PopupBox.appendChild(closeBouttom)
    });
});

// close popp 
document.addEventListener ("click" , (e) => {
    if (e.target.className =='close-Bouttom'){
        // remove the current popp 
        e.target.parentNode.remove();

        // remove overlly
        document.querySelector(".Popup").remove();
    };
});


// select all bullets

let bullets = document.querySelectorAll(".nav-bullets .bullets");

// console.log (bullets)
bullets.forEach(bullet => {
    
    bullet.addEventListener("click" , (e) => {
        
        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'

        });
    });

})
// select all linls

let links = document.querySelectorAll(".links a");

// console.log (bullets)
links.forEach(link => {
    
    link.addEventListener("click" , (e) => {
        
        e.preventDefault();

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'

        });
    });

})


// function handil active 
function handilActive(ev){
    
        // remove class active  all form li childrens 
        
        ev.target.parentElement.querySelectorAll(".active").forEach(s => {

            s.classList.remove("active")
        });

        //add active class o target 
        ev.target.classList.add("active")
}    


let bulltsSpan = document.querySelectorAll(".Bullets-option span");

let navBullts = document.querySelector(".nav-bullets");

let bulltLocalItem = localStorage.getItem("bullt-option");


if (bulltLocalItem !== null){
    // console.log ("modarae")

    bulltsSpan.forEach(span =>{
        
        span.classList.remove("active");


    });

    if (bulltLocalItem === 'block'){

        navBullts.style.display = 'block'

        document.querySelector(".Bullets-option .yas").classList.add("active");

    }else{

        navBullts.style.display = 'none'

        document.querySelector(".Bullets-option .no").classList.add("active");
    }

}

bulltsSpan.forEach(span =>{

    span.addEventListener("click" , (e) =>{

        if (span.dataset.display === 'show'){

            navBullts.style.display = 'block'

            localStorage.setItem("bullt-option" , 'block');

        }else{
            navBullts.style.display = 'none'

            localStorage.setItem("bullt-option" , 'none');
        }

        handilActive(e)
    });

});

// reser buttom 

document.querySelector(".reset").onclick = function (){

    // localStorage.clear();
    localStorage.removeItem("bullt-option")
    localStorage.removeItem("background-option")
    localStorage.removeItem("Options")
    
    window.location.reload();

}

// mene active 
let menueBtn =document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".links")

menueBtn.onclick = function (ele) {

    ele.stopPropagation()


    this.classList.toggle("active");

    tlinks.classList.toggle("open");

}

// click anywhre outside menu and toggle btn 

document.addEventListener("click" , (e) => {
    
    if ( e.target !== menueBtn && e.target !== tlinks ){ 

        // console.log ("modarsh");
        if (tlinks.classList.contains("open")){

            
    menueBtn.classList.toggle("active");

    tlinks.classList.toggle("open");    

        }

    }

    // console.log (e.target )

})

tlinks.onclick = (ele)=>{
    ele.stopPropagation()
}