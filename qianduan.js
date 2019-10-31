window.onload = function() {
    const items = document.getElementsByClassName('item');
    const week = ['!_!', '@_@', '#_#', '$_$', '^_^'];
    // const itemscopy = document.getElementsByClassName('item');
    for(let i = 0; i < items.length; i++){

        items[i].onclick = function () {
            items[i].innerHTML = week[i];
            items[i].style.color = 'black';

            for(let j = 0; j < items.length; j++){
                if (j != i && items[j].innerHTML == week[j]){
                    /*items[j].innerHTML = itemscopy[j].innerHTML;*/
                    items[j].innerHTML = j + 1;
                    items[j].style.color = 'aqua';
                    items[j].style.width = '200px';
                    items[j].style.height = '200px';
                }
            }
        }
    }
};

function sunOfSquares(a,b) {
    let res = a * a + b * b;
    console.log(res);
}



function qubeishu() {
    let oBeishu = document.getElementById('beishu');
    for(i = 1;i < 100;i++){
        if(i % 3 == 0){
            console.log(i);
        }
    }
}

function pingfanghe() {
    let oText1 = document.getElementById('text1');
    let oText2 = document.getElementById('text2');
    let oText3 = document.getElementById('text3');
    parseFloat(oText1,oText2);
    oText3.value = oText1.value * oText1.value + oText2.value * oText2.value;
    return oText3.value;
}

function exchange() {
    let oNum1 = document.getElementById('num1');
    let oNum2 = document.getElementById('num2');
    let oMiddle = oNum1.value;
    oNum1.value = oNum2.value;
    oNum2.value = oMiddle;
    return oNum1,oNum2;

}
function arr() {
    const num = [['a', 0], ['b', 3],['c', 6],['d',9]];
        list = [];
        for(i = 1;i<num.length;i++){
            list.push(num[i]);
        }
    console.log(list);
}

function selectorP() {
    let myElementP = $('p');
    console.log(myElementP);
}
function selectorId() {
    let myElementId = $('#myid');
    console.log(myElementId);
}
function selectorClass() {
    let myElementClass = $('.myclass');
    console.log(myElementClass);
}

const arr1 = [1,1,1,2,2,3,4,4,5,5,5];

function uniq() {
    let rebuild = [];
    for (let i = 0;i < arr1.length;i++){
        for(let j = i + 1 ; j < arr1.length ; j++){
            if(arr1[i] === arr1[j]){
                i++;
            }
        }
        rebuild.push(arr1[i]);
    }
    console.log(rebuild);
    return rebuild;
}
const arr2 = [5,3,8,1];
function myFilter() {
    var arr3 = arr2.filter(function (value) {
        return value >=1 && value <4;
    })
    alert(arr3);
}




function fullname() {
    let john = {name: "John", surname: "Smith", id: 1};
    let pete = {name: "Pete", surname: "Hunt", id: 2};
    let mary = {name: "Mary", surname: "Key", id: 3};

    let users = [john, pete, mary];
    let usersMapped = [];

    for (i = 0 ; i < users.length ; i++){
        usersMapped[i] = users[i];
        let fullName = users[i].name + users[i].surname;
        let id = users[i].id;
        usersMapped[i] = {fullName,id};
    }

    alert(usersMapped[0].id); // 1
    alert(usersMapped[0].fullName); // John Smith
}



