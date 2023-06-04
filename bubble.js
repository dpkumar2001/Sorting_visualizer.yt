async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    const numbar=document.querySelectorAll(".chil");
    const time2=document.querySelector("#com");
    const ss=document.querySelector("#bs");
    let time1=0;
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            numbar[j].style.background = 'blue';
            numbar[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                time1+=parseInt(delay);
                await waitforme(delay);
                const t=document.createElement('div');
                time2.innerHTML='Time complexity ☺️';
                t.textContent=`${time1}ms`;
                time2.appendChild(t);
                swap(ele[j], ele[j+1]);
                swap1(numbar[j],numbar[j+1])
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
            numbar[j].style.background = 'cyan';
            numbar[j+1].style.background = 'cyan';
        }
        ele[ele.length-1-i].style.background = 'green';
        numbar[ele.length-1-i].style.background = 'green';
    }

    ele[0].style.background = 'green';
    numbar[0].style.background = 'green';
    const ss1=document.createElement('div');
    ss1.textContent=`${time1}ms`;
    ss1.style.color=`red`;
    ss.appendChild(ss1);
    

}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});