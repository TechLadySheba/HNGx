
document.addEventListener("DOMContentLoaded", 
function () {
  const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
  
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  const utcTime = currentDate.toISOString().split('T')[1].split('.')[0] + " UTC";
  
  dayOfWeekElement.textContent = dayOfWeek;
  utcTimeElement.textContent = utcTime;
});
