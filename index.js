const list=document.querySelector(".list").children;
const makeactive=(element)=>{
    Array.from(list).forEach(x=>{
        x.classList.remove('active')
    });
    element.parentElement.classList.add('active');
}
const makeunactive=(element)=>{
    element.parentElement.classList.remove('active');
}
const currentpage=(element)=>{
    Array.from(list).forEach(x=>{
        x.classList.remove('active');
        x.classList.remove('current');
    });
    element.parentElement.classList.add('current');
}