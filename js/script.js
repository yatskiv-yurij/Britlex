let screen = document.body.clientWidth;

if(screen<=767){
    console.log("Hello");
    let parent = document.getElementById('about-us__container');
    let child = document.getElementById('about-us__title');
    parent.prepend(child);

    parent = document.getElementById('contact__container');
    child = document.getElementById('contact__title');
    parent.prepend(child);
}

function menu(){
    const body = document.body;
    body.classList.toggle("show");
}
