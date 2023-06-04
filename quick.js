let time11=0;
async function partitionLomuto(ele, l, r){
    console.log('In partitionLomuto()');
    const time2=document.querySelector("#com");
    let numbar=document.querySelectorAll(".chil");
    let i = l - 1;
    // color pivot element
    ele[r].style.background = 'red';
    numbar[r].style.background = 'red';

    for(let j = l; j <= r - 1; j++){
        console.log('In partitionLomuto for j');
        // color current element
        ele[j].style.background = 'yellow';
        numbar[j].style.background = 'yellow';
        // pauseChamp
        time11+=parseInt(delay);
        await waitforme(delay);
        const t0=document.createElement('div');
        time2.innerHTML='Time complexity ☺️';
        t0.textContent=`${time11}ms`;
        time2.appendChild(t0);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            console.log('In partitionLomuto for j if');
            i++;
            swap(ele[i], ele[j]);
            swap1(numbar[i], numbar[j]);
            // color 
            ele[i].style.background = 'orange';
            numbar[i].style.background = 'orange';
            if(i != j){ 
                ele[j].style.background = 'orange';
                numbar[j].style.background = 'orange';
        }
            // pauseChamp
            time11+=parseInt(delay);
        await waitforme(delay);
        time2.innerHTML='Time complexity ☺️';
        const t0=document.createElement('div');
        t0.textContent=`${time11}ms`;
        time2.appendChild(t0);
       
        }
        else{
            // color if not less than pivot
            ele[j].style.background = 'pink';
            numbar[j].style.background = 'pink';
        }
    }
    i++; 
    // pauseChamp
    time11+=parseInt(delay);
    await waitforme(delay);
    time2.innerHTML='Time complexity ☺️';
    const t1=document.createElement('div');
    t1.textContent=`${time11}ms`;
    time2.appendChild(t1);
    swap(ele[i], ele[r]);
    swap1(numbar[i], numbar[r]); // pivot height one
    console.log(`i = ${i}`, typeof(i));
    // color
    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';
    numbar[r].style.background = 'pink';
    numbar[i].style.background = 'green';

    // pauseChamp
    time11+=parseInt(delay);
    await waitforme(delay);
    time2.innerHTML='Time complexity ☺️';
    const t0=document.createElement('div');
    t0.textContent=`${time11}ms`;
    time2.appendChild(t0);
    
    // color
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
            numbar[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(ele, l, r){
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let numbar=document.querySelectorAll(".chil");
    let ss=document.querySelector("#qs");
    let l = 0;
    let r = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, l, r);
    const ss1=document.createElement('div');
    ss1.textContent=`${time11}ms`;
    ss1.style.color=`red`;
    ss.appendChild(ss1);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});