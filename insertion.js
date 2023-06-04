async function insertion(){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    const numbar=document.querySelectorAll(".chil");
    const time2=document.querySelector("#com");
    const ss=document.querySelector("#is");
    let time1=0;
    // color
    ele[0].style.background = 'green';

    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;
        // color
        ele[i].style.background = 'blue';

        time1+=parseInt(delay);
        await waitforme(delay);
        const t=document.createElement('div');
        time2.innerHTML='Time complexity ☺️';
        t.textContent=`${time1}ms`;
        time2.appendChild(t);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            console.log('In while loop');
            // color
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            numbar[j].style.background = 'blue';
            numbar[j + 1].style.height = numbar[j].style.height;
            j--;

            time1+=parseInt(delay);
                await waitforme(delay);
                const t=document.createElement('div');
                time2.innerHTML='Time complexity ☺️';
                t.textContent=`${time1}ms`;
                time2.appendChild(t);

            // color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        // color
        ele[i].style.background = 'green';
        numbar[j + 1].style.height = key;
        // color
        numbar[i].style.background = 'green';
    }
    const ss1=document.createElement('div');
    ss1.textContent=`${time1}ms`;
    ss1.style.color=`red`;
    ss.appendChild(ss1);
    
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

