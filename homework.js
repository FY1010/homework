//第一题，增删改查
var ti1 = document.getElementById('ti1');
ti1.onclick = function () {
    let nav = document.getElementsByClassName('nav')[0];
    let Oli1 = document.createElement('li');
    let Oli2 = document.createElement('li');
    let Oli3 = document.createElement('li');
    let Item = document.getElementsByClassName('item');

    Oli3.innerHTML = '文章';
    Oli1.innerHTML = '首页';
    Oli2.innerHTML = '关于';

    nav.replaceChild(Oli3,Item[2]); //替换运动城文章
    nav.appendChild(Oli2); //插入关于 在结尾
    nav.insertBefore(Oli1,nav.childNodes[0]); //插入首页 在顶部
    for (let i = 0;i < Item.length;i++){
        if(Item[i].innerHTML == '评论'){
            nav.removeChild(Item[i]);
        }
    }
};

//第二题，改变按钮透明度
function inJs() {
    let inHtml = document.getElementById('button1');
    inHtml.style.opacity = 0.5;
    console.log('我的透明度从0.8变成了0.5');
}

var Obutton2 = document.getElementById('button2');
    Obutton2.onclick = function () {
        let inHtml = document.getElementById('button2');
        inHtml.style.opacity = 0.5;
        console.log('我的透明度也从0.8变成了0.5');
    };



//第三题，控制点击后改变
var Text = document.getElementsByClassName('text');
var listArr = ['list1','list2','list3','list4','list4'];
for (let i = 0;i < Text.length; i++){
    Text[i].onclick = function () {
        Text[i].innerHTML = listArr[i];
    }
}


//第四题，备忘录
function todo() {
    var todoText = document.getElementById('todoText');     //顶端文本框
    var todoUl = document.getElementById('todoUl');       //UL
    var todoList = document.createElement('li');            //一行空li
    var todoListDel = document.createElement('input');      //删除按钮
    var todoListEdit = document.createElement('input');     //修改按钮
    var todoContent = document.createElement('h2');
    todoList.className = 'Otodo';//内容
    var ali = document.getElementsByClassName('Otodo');
    var todoListEditConfirm = document.createElement('input');
    var editText = document.createElement('input');


    todoContent.innerHTML = todoText.value;
    todoUl.insertBefore(todoList,ali[0]);        //给UL加一行空LI
    todoList.appendChild(todoContent);      //向空LI中加内容
    todoList.appendChild(todoListDel);      //向空LI中加删除按钮
    todoList.appendChild(todoListEdit);    //向空LI中加修改按钮

    todoListEdit.type = 'button';    //修改按钮
    todoListEdit.value = '修改';

    todoListDel.type = 'button';              //删除按钮
    todoListDel.value = '删除';
    todoListDel.onclick = function(){
        todoUl.removeChild(todoList);         //删除整个li
    };

    todoListEdit.onclick = function(){
        editText.type = "text";
        todoList.replaceChild(editText,todoContent);
        todoListEditConfirm.type = 'button';
        todoListEditConfirm.value = '确认修改';
        todoList.replaceChild(todoListEditConfirm,todoListEdit);
    };
    todoListEditConfirm.onclick = function (){
        todoContent.innerHTML = editText.value;
        todoList.replaceChild(todoContent,editText);
        todoList.replaceChild(todoListEdit,todoListEditConfirm);
    };
}


//第五题
let sortText = document.getElementById('sortText');
let screen = document.getElementById('range');
let Obtn = document.getElementsByClassName('btn');
let Osort = document.getElementsByClassName('sort');

Obtn[0].onclick = function () {
    let project = document.createElement('div');
    project.className = 'sort';
    project.style.height = sortText.value + '%';
    project.innerHTML = sortText.value;
    project.style.backgroundColor = 'pink';
    screen.insertBefore(project,Osort[0]);
};
Obtn[1].onclick = function () {
    let project1 = document.createElement('div');
    project1.className = 'sort';
    project1.style.height = sortText.value + '%';
    project1.innerHTML = sortText.value;
    project1.style.backgroundColor = 'pink';
    screen.appendChild(project1);
};

Obtn[2].onclick = function () {
    screen.removeChild(Osort[0]);

};
Obtn[3].onclick = function () {
    let theLast = Osort.length - 1;
    screen.removeChild(Osort[theLast]);
};
Obtn[4].onclick = function  () {
    console.log(Osort.length);
    for (let i = 0 ;i < Osort.length-1;i++){
        console.log(111);
        for (let j = 0;j < Osort.length - 1;j++){
            parseInt(Osort[j].innerHTML);
            if (Osort[j].style.height > Osort[j+1].style.height){
                let height = Osort[j].style.height;
                let inner = Osort[j].innerHTML;
                Osort[j].style.height = Osort[j+1].style.height;
                Osort[j].innerHTML = Osort[j+1].innerHTML;
                Osort[j+1].style.height = height;
                Osort[j+1].innerHTML = inner;
            }
        }
    }
};
Obtn[5].onclick = function () {
    // console.log(Osort.length);
    // Osort.length = 0;
    // console.log(Osort.length);
    for (i = Osort.length-1; i >= 0;i-- ){
        screen.removeChild(Osort[i])
    }
};
Obtn[6].onclick = function () {
    for (let k = 1; k <= 20;k++){
        console.log(k);
        let project3 = document.createElement('div');
        project3.className = 'sort';
        project3.style.backgroundColor = 'pink';
        let num = Math.floor(Math.random()*91+10)
        project3.style.height = num + '%';
        project3.innerHTML = num;
        console.log(project3.style.height);
        screen.insertBefore(project3,Osort[0]);
    }
};