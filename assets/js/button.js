let calendars = document.getElementsByClassName("tnd-addtocal__wrapper");

for (let i = 0; i < calendars.length; i++){
  calendars[i].addEventListener("click", toggleCalendar);
}

function toggleCalendar(event){
  collapseAllCalendars()
  event.target.toggleAttribute('aria-expanded')
}

function collapseAllCalendars(){
  for (let i = 0; i < calendars.length; i++){
    if(calendars[i].querySelector('[aria-expanded]')){
      calendars[i].querySelector('[aria-expanded]').removeAttribute('aria-expanded')
    }
  }
}