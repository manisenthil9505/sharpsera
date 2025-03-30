var pageSelected=0;

//===================general========================
function selectPage(a,event){
    pageSelected=a;
    var ele = document.querySelector(".pageSelected");
    ele.classList.remove("pageSelected");
    console.log(ele);
    console.log(event);
    event.srcElement.classList.add("pageSelected");
}


//===================course=========================
