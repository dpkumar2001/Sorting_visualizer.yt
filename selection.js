async function selection(){
    console.log('In selection()');
    const ele = document.querySelectorAll(".bar");
    const numbar=document.querySelectorAll(".chil");
   const time2=document.querySelector("#com");
    let time1=0;
    const ss=document.querySelector("#ss");
    for(let i = 0; i < ele.length; i++){
        console.log('In ith loop');
        let min_index = i;
        // Change color of the position to swap with the next min
        ele[i].style.background = 'blue';
        numbar[i].style.background='blue';
        for(let j = i+1; j < ele.length; j++){
            console.log('In jth loop');
            // Change color for the current comparision (in consideration for min_index)
            ele[j].style.background = 'white';
            numbar[j].style.background = 'white';
            time1+=parseInt(delay);
            await waitforme(delay);
            const t=document.createElement('div');
            time2.innerHTML='Time complexity ☺️';
            t.textContent=`${time1}ms`;
            time2.appendChild(t);            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                console.log('In if condition height comparision');
                if(min_index !== i){
                    // new min_index is found so change prev min_index color back to normal
                    ele[min_index].style.background = 'cyan';
                    numbar[min_index].style.background = 'cyan';
                }
                min_index = j;
            } 
            else{
                // if the currnent comparision is more than min_index change is back to normal
                ele[j].style.background = 'cyan';
               numbar[j].style.background = 'cyan';
            }   
        }
        time1+=parseInt(delay);
        await waitforme(delay);
        const t=document.createElement('div');
        time2.innerHTML='Time complexity ☺️';
        t.textContent=`${time1}ms`;
        time2.appendChild(t);        swap(ele[min_index], ele[i]);
        swap1(numbar[min_index], numbar[i]);
        // change the min element index back to normal as it is swapped 
        ele[min_index].style.background = 'cyan';
       numbar[min_index].style.background = 'cyan';
        // change the sorted elements color to green
        ele[i].style.background = 'orange';
       numbar[i].style.background = 'orange';
    }
    const ss1=document.createElement('div');
    ss1.textContent=`${time1}ms`;
    ss1.style.color=`red`;
    ss.appendChild(ss1);
    
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});