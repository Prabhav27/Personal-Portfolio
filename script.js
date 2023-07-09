// toggle icon navbar //
let menuIcon= document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// scroll sections active link //

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
         let id=sec.getAttribute('id');


         if(top>=offset && top <offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });

    // sticky navbar //
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);


    // remove toggle icon and navbar // 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};












// skills row change
const filterContainer=document.querySelector(".skills-filter-inner"),
filterBtns=filterContainer.children;
// console.log(filterBtns);
totalFilterBtn=filterBtns.length;
skillsItem=document.querySelectorAll(".skills-item");
// console.log(skillsItem);
totalSkillsItem=skillsItem.length;


for(let i=0;i<totalFilterBtn;i++){
    filterBtns[i].addEventListener("click", function()
    {
        // console.log(this.innerHTML);
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue=this.getAttribute("data-filter");
       for(let k=0;k<totalSkillsItem;k++){
        if(filterValue===skillsItem[k].getAttribute("data-category")){
            skillsItem[k].classList.remove("hide");
skillsItem[k].classList.add("show");
}
else{
    skillsItem[k].classList.add("hide");
    skillsItem[k].classList.remove("show");

        }
        if(filterValue==="all"){
            skillsItem[k].classList.remove("hide");
skillsItem[k].classList.add("show");

        }
       }
    })
}

// scroll reveal //

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
})

ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
ScrollReveal().reveal('.home-img,.edu-container,.experience-container,.skillscontainer,.contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1', { origin:'left' });
ScrollReveal().reveal('.home-content p', { origin:'right' });



// typedjs //
const typed =new Typed('.multiple-text',{
strings:['Web Developer','Coder','Tech Enthusiast'],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true   
});