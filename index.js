const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const iconPlace = document.querySelectorAll(".icons span");


let date = new Date();
currentYear = date.getFullYear();
currentMonth = date.getMonth();

const months = ['January', 'February', 'March', 
                'April', 'May', 'June', 
                'July', 'August', 'September',
                'October', 'November', 'December'];
const renderCalender = () => {
    let firstDay = new Date(currentYear, currentMonth, 1)
    .getDay();
    lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0)
    .getDate();
    lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth)
    .getDay();
    lastDateOfLastMonth = new Date(currentYear, currentMonth, 0)
    .getDate();

    let listTag = '';
    for(let i = firstDay; i > 0; i--) {//list of previous month last days
        listTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }

    for(let i = 1; i <= lastDateOfMonth; i++) { //current day in the month
        let presentDay = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
                listTag += `<li class="${presentDay}">${i}</li>`;
    }
    for (let i = lastDayOfMonth; i < 6; i++) { //list of next month first days
        listTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;        
    }
    currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
    daysTag.innerHTML = listTag;
}
renderCalender();

Array.from(iconPlace).forEach(icon => {
    icon.addEventListener("click", () => { //click event for both icons
       currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;

       if(currentMonth < 0 || currentMonth > 11) {
        date = new Date(currentYear, currentMonth);
        currentYear = date.getFullYear(); //to update current year with a new year
        currentMonth = date.getMonth();  //to update current year with a new month
       }else { //else pass a new date as a value
        date = new Date();
       }
       renderCalender();
    });
});