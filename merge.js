//let delay = 30;
let time1=0;
async function merge(ele, low, mid, high){
    console.log('In merge()');
    let numbar=document.querySelectorAll(".chil");
    let time2=document.querySelector("#com");
    console.log(`low=${low}, mid=${mid}, high=${high}`);
    const n1 = mid - low + 1;
    const n2 = high - mid;
    console.log(`n1=${n1}, n2=${n2}`);
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        time1+=parseInt(delay);
        await waitforme(delay);
        const t=document.createElement('div');
        time2.innerHTML='Time complexity ☺️';
        t.textContent=`${time1}ms`;
        time2.appendChild(t);
        console.log('In merge left loop');
        console.log(ele[low + i].style.height + ' at ' + (low+i));
        // color
        ele[low + i].style.background = 'orange';
        numbar[low + i].style.background = 'orange';
        left[i] = ele[low + i].style.height;
        numbar[i].textContent= ele[low + i].textContent;
    }
    for(let i = 0; i < n2; i++){
        time1+=parseInt(delay);
        await waitforme(delay);
        const t=document.createElement('div');
        time2.innerHTML='Time complexity ☺️';
        t.textContent=`${time1}ms`;
        time2.appendChild(t);
        console.log('In merge right loop');
        console.log(ele[mid + 1 + i].style.height + ' at ' + (mid+1+i));
        // color
        ele[mid + 1 + i].style.background = 'yellow';
        numbar[mid + 1 + i].style.background = 'yellow';

        right[i] = ele[mid + 1 + i].style.height;
        numbar[n1+i].textContent = ele[mid + 1 + i].textContent;
    }
    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        time1+=parseInt(delay);
        await waitforme(delay);
        const t=document.createElement('div');
        time2.innerHTML='Time complexity ☺️';
        t.textContent=`${time1}ms`;
        time2.appendChild(t);
        console.log('In merge while loop');
        console.log(parseInt(left[i]), parseInt(right[j]));
        
        // To add color for which two r being compared for merging
        
        if(parseInt(left[i]) <= parseInt(right[j])){
            console.log('In merge while loop if');
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
                numbar[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
                numbar[k].style.background = 'lightgreen';
            }
            
            ele[k].style.height = left[i];
            numbar[k].textContent = left[i].textContent;
            i++;
            k++;
        }
        else{
            console.log('In merge while loop else');
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
                numbar[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
                numbar[k].style.background = 'lightgreen';
            } 
            ele[k].style.height = right[j];
            numbar[k].textContent = right[j].textContent;
            j++;
            k++;
        }
    }
    while(i < n1){
        time1+=parseInt(delay);
        await waitforme(delay);
        const t=document.createElement('div');
        time2.innerHTML='Time complexity ☺️';
        t.textContent=`${time1}ms`;
        time2.appendChild(t);
        console.log("In while if n1 is left");
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
            numbar[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
            numbar[k].style.background = 'lightgreen';
        }
        ele[k].style.height = left[i];
        numbar[k].textContent = left[i].textContent;
        i++;
        k++;
    }
    while(j < n2){
        time1+=parseInt(delay);
        await waitforme(delay);
        const t=document.createElement('div');
        time2.innerHTML='Time complexity ☺️';
        t.textContent=`${time1}ms`;
        time2.appendChild(t);
        console.log("In while if n2 is left");
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
            numbar[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
            numbar[k].style.background = 'lightgreen';
        }
        ele[k].style.height = right[j];
        numbar[k].textContent = right[j].textContent;
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r){
    console.log('In mergeSort()');
    if(l >= r){
        console.log(`return cause just 1 elemment l=${l}, r=${r}`);
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    console.log(`left=${l} mid=${m} right=${r}`, typeof(m));
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    const ele = document.querySelectorAll(".bar");
    let ss=document.querySelector("#ms");
    
    let l = 0;
    let r = parseInt(ele.length) - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(ele, l, r);
    const ss1=document.createElement('div');
    ss1.textContent=`${time1}ms`;
    ss1.style.color=`red`;
    ss.appendChild(ss1);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

