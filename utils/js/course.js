var fullData=[{
    "cName":"Exploring C",
    "offered":"University of Michigan",
    "instructor":"Charles Russell Severance",
    "module":[
        {
            "mainTit":"Historical Content",
            "body":[
                {
                    'title':"Lecture",
                    "content":[
                        {
                            "subtitile":"Syllabus",
                            "type":"Reading",
                            "content":"",
                            "time":"10 min"
                        },
                        {
                            "subtitile":"Welcome to C Programming for Everybody",
                            "type":"Video",
                            "content":"",
                            "time":'2 min'
                        },
                        {
                            "subtitile":"A History of C, UNIX, and Computation before and after 1978",
                            "type":"Video",
                            "content":"",
                            "time":'24 min'
                        },
                        {
                            "subtitile":"Syllabus",
                            "type":"Video",
                            "content":"",
                            "time":'8 min'
                        },
                    ]
                },
                {
                    "title":"Assignment",
                    "content":[
                        {
                            "subtitile":"History/Introduction",
                            "type":"Assignment",
                            "content":"",
                            "time":'10 min'
                        },
                    ]
                }
            ]
        },
        {
            "mainTit":"Part 1:From Python to C",
            "body":[
                {
                    "title":"Lecture",
                    "content":[
                        {
                            "subtitile":"Part 1:From Python to C -The Rosetta Stone Lecture",
                            "type":"Video",
                            "content":"",
                            "time":'25 min'
                        },
                        {
                            "subtitile":"Textbook Chapter 1:A Tutorial Introduction",
                            "type":"Reading",
                            "content":"",
                            "time":'10 min'
                        },
                    ]
                },
                {
                    "title":"Assignment",
                    "content":[
                        {
                            "subtitile":"Autograder: Write Hello World",
                            "type":"Assignment",
                            "content":"",
                            "time":'25 min'
                        },
                        {
                            "subtitile":"Exercise RS-1: Produce output",
                            "type":"Assignment",
                            "content":"",
                            "time":'25 min'
                        },
                        {
                            "subtitile":"Exercise RS-2: Read Input",
                            "type":"Assignment",
                            "content":"",
                            "time":'25 min'
                        },
                        {
                            "subtitile":"Exercise RS-3: Input / Output",
                            "type":"Assignment",
                            "content":"",
                            "time":'25 min'
                        },
                        {
                            "subtitile":"Exercise RS-4: Reading Lines of Input",
                            "type":"Assignment",
                            "content":"",
                            "time":'25 min'
                        },
                        {
                            "subtitile":"Exercise RS-5: Reading Lines of Input with fgets()",
                            "type":"Assignment",
                            "content":"",
                            "time":'25 min'
                        },
                    ]
                }
            ]
        },
        {
            "mainTit":"Part 2: From Python to C",
            "body":[
                {
                    "title":"Lecture",
                    "content":[
                        {
                            "subtitile":"Part 2: From Python to C - The Rosetta Stone Lecture",
                            "type":"Video",
                            "content":"",
                            "time":'25 min'
                        },
                        {
                            "subtitile":"Textbook Chapter 1: A Tutorial Introduction",
                            "type":"Reading",
                            "content":"",
                            "time":'10 min'
                        },
                    ]
                },
                {
                    "title":"Assignment",
                    "content":[
                        {
                            "subtitile":"Exercise RS-6: Write a simple for loop",
                            "type":"Assignment",
                            "content":"",
                            "time":'25 min'
                        },
                        {
                            "subtitile":"Exercise RS-7: Compute Minimum and Maximum",
                            "type":"Assignment",
                            "content":"",
                            "time":'25 min'
                        },
                        {
                            "subtitile":"Exercise RS-8: Write a Guessing Game",
                            "type":"Assignment",
                            "content":"",
                            "time":'25 min'
                        },
                        {
                            "subtitile":"Exercise RS-9: Write a Function",
                            "type":"Assignment",
                            "content":"",
                            "time":'25 min'
                        },
                       
                    ]
                }
            ]
        },

    ]
}
]
var selectedModule=-1;
var innerBoxHeight=0;
var totalContent=0;
var totalopened=0;
var urlEle = new URLSearchParams(window.location.search);
var course=parseInt(urlEle.get("course"));
var data=fullData[course];
document.getElementById("courseImg").setAttribute("src",`utils\\images\\offeres\\${data.offered}.png`)
document.getElementById("courseTit").textContent=data.cName;
document.getElementById("courseOfferer").textContent=data.offered
var moduleList=document.getElementById("moduleList");
for(var ii=0;ii<data.module.length;ii++){
    var ele=document.createElement("div");
    ele.classList.add("module");
    ele.id=ii;  
    ele.setAttribute("onclick",`moduleSelect(${ii},event)`);
    ele.innerHTML=`<i class='bx bxs-check-circle'></i>
                            <div class="moduleName">Module ${ii+1}</div>`
    //moduleList
    moduleList.append(ele);
}

changeProperty("--courseMaterialHeight",`${60+45*data.module.length}px`);
moduleSelect(0);


function outerBoxHeightCalc(){
    var hei=100;
    hei+=innerBoxHeight;
    changeProperty("--outterBoxHeight",`calc(${hei}px + ${totalopened==0?4*totalContent:((2*totalContent+1)+2*totalContent)}vw)`);
    console.log(`OutterHeight:       calc(${hei}px + ${totalopened==0?4*totalContent:(4*totalContent+2*totalContent)}vw)`);
}
function moduleSelect(index){
    if(index==selectedModule) return;
    var moduleSelected=document.querySelector(".moduleSelected");
    try{
        moduleSelected.classList.remove("moduleSelected");
    }
    catch(e){
    }
    var mm=document.querySelectorAll(".module");
    mm[index].classList.add("moduleSelected");

    changeModule(index);
    selectedModule=index;
    changeInnerBoxHeight();
}

function changeModule(i){
    var mainTit = document.querySelector(".mainTitText");
    mainTit.textContent=data.module[i].mainTit;
    console.log(mainTit)
    var innerListCon=document.getElementById("innerListCon");
    innerListCon.innerHTML="";
    for(var inn=0;inn<data.module[i].body.length;inn++){
        innerListCon.append(createInnerBox(inn,data.module[i].body[inn]));
    }
    console.log(innerListCon);
}
function createInnerBox(index,content){
    var ele = document.createElement("div");
    ele.classList.add("innerBox");
    var checkBox=document.createElement("input");
    checkBox.setAttribute("type","checkbox");
    checkBox.classList.add("check");
    checkBox.id=`innerBox${index}`;
    ele.append(checkBox);
    var tit=content.title;
    var titBox=document.createElement("label");
    titBox.innerHTML=`<div class="titBox">
                                <i class='bx bxs-chevron-down'></i>
                                ${tit}
                            </div>`;
    titBox.setAttribute("onclick",`toggleInnerCheckBox(${index})`);
    ele.append(titBox);
    var innerBoxList=document.createElement("div");
    innerBoxList.classList.add("innerBoxList");
    console.log(content);
    for(var con=0;con<content.content.length;con++){
        var a = document.createElement("a");
        a.href="video.html"
        var innerBoxContent=document.createElement("div");
        innerBoxContent.classList.add("innerBoxContent");
        innerBoxContent.innerHTML=` <i class='bx bxs-check-circle'></i>
                                    <div class="contentDet">
                                        <div class="contentTit">${content.content[con].subtitile}</div>
                                        <div class="contentDes">${content.content[con].type} &bull; ${content.content[con].time}</div>
                                    </div>`
        a.append(innerBoxContent);
        innerBoxList.append(a);
    }
    ele.append(innerBoxList);
    return ele;
}
function changeProperty(variable,value){
    var root=document.documentElement;
    root.style.setProperty(variable,value);
}

function toggleInnerCheckBox(index){
    var check=document.querySelectorAll(".check");
    check[index].checked=!check[index].checked;

    changeInnerBoxHeight();    
}
function changeInnerBoxHeight(){
    var check=document.querySelectorAll(".check");
    totalContent=check.length;
    var innerEle=document.querySelectorAll(".innerBox")
    innerBoxHeight=0;
    totalopened=0;
    for(var i=0;i<check.length;i++){
        let h=innerBocHeightCalc(i,check);
        console.log(h);
        console.log(innerEle[i]);
        if(h==50) innerEle[i].style.height=`${h}px`;
        else{totalopened++;
            innerEle[i].style.height=`calc(${h}px + 2vw)`};
        innerBoxHeight+=h;
    }
    outerBoxHeightCalc();
}
function innerBocHeightCalc(inner,check){
    var innerBoxHeight=50;
    if(check[inner].checked) return innerBoxHeight;
    innerBoxHeight+=70*(data.module[selectedModule].body[inner].content.length);
    return innerBoxHeight;
}