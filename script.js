let works = document.querySelectorAll(".our-work ul li");
let images = document.querySelectorAll(".our-work .row img")
// console.log(images) 


works.forEach(work => {

    work.onclick = (e) => {
        
        handleActive(e);

        if (work.innerHTML.toLowerCase() == "all") {
            images.forEach(img => {
                img.parentElement.parentElement.classList.remove('disable');
            })
            }
            else {
                images.forEach(img => {
            
            if(img.getAttribute('alt')  !== work.innerHTML.toLowerCase()) {
                img.parentElement.parentElement.classList.add('disable');
            } 
            else {
                img.parentElement.parentElement.classList.remove('disable');

            }
        }) }
    } 
});


function handleActive(e) {
    // remove active class from all 
    e.target.parentElement.querySelectorAll(".active").forEach(Element => {
        Element.classList.remove("active");
    })
    // add active to the clicked one 
    e.target.classList.add("active");
}