//Made by:Imants Zvīdris (iz23053)

function valiDate(elem){
    if (Date (elem.value) < Date (elem.min)){
        alert ("You inputed wrong date, it was changed");
        elem.value = elem.min;
    }
    if (Date (elem.value) > Date (elem.max)){
        alert ("You inputed wrong date, it was changed");
        elem.value = elem.max;
    }
    return elem;
}
function makeAvaibleTimeOptions(elem){
    const consultTimeSelector = document.getElementById("consultation-time");
    const consultationDateInput = document.getElementById("consultation-date");
    while (consultTimeSelector.childNodes[0]){
        consultTimeSelector.childNodes[0].remove();
    }
    elem = valiDate(elem);
    let avaibleTimeList = [];
    for (let date of avaibleDateTime.data){
        if (date.date == elem.value)
            for (let time of date.times)
                if (time.avaible) avaibleTimeList.push(time.time);
    }
    if (!avaibleTimeList.length) consultationDateInput.classList.add("not-valide");
    else consultationDateInput.classList.remove("not-valide");
    for (let time of avaibleTimeList){
        let option = document.createElement("option");
        option.value = time;
        option.textContent = time;
        consultTimeSelector.appendChild(option);
    }
}
function formAction (){
    alert ("You have successfully made an entry");
}

document.addEventListener('DOMContentLoaded', (e) =>{
    const consultDate = document.getElementById("consultation-date");
    const minDate = avaibleDateTime.data[0].date;
    const maxDate = avaibleDateTime.data[6].date;
    consultDate.min = minDate;
    consultDate.max = maxDate;
})