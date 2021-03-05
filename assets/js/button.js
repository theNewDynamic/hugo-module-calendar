let calendars = document.getElementsByClassName("tnd-addtocal__wrapper");

for (let i = 0; i < calendars.length; i++){
  calendars[i].addEventListener("click", toggleCalendar);
}

function toggleCalendar(){
  let serviceList = this.getElementsByClassName("tnd-addtocal__dropdown")[0];

  if (serviceList.classList.contains("hidden")){
    collapseAllCalendars();
    serviceList.classList.remove('hidden')
    this.classList.add("active");
  }
  else{
    serviceList.classList.add('hidden')
    this.classList.remove("active");
  }
}

function collapseAllCalendars(){
  for (let i = 0; i < calendars.length; i++){
    calendars[i].classList.remove("active");
    calendars[i].getElementsByClassName("tnd-addtocal__dropdown")[0].classList.add('hidden');
  }
}