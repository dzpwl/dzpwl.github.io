document.addEventListener('keydown', keyHandle);

function resetSearchField() {
  document.getElementById("search-field").value="";
}

function getTime() {
  let date = new Date(),
  year = date.getFullYear(),
  month = date.getMonth() + 1,
  day = date.getDate(),
  min = date.getMinutes(),
  hour = date.getHours();

  return day + "/" + month + "/" + year + "   " +
    (hour < 10 ? ("0" + hour) : hour) + ":" +
    (min < 10 ? ("0" + min) : min);
}

function search(e) {
  if (e.code == 'Enter') {
    let searchTerm = document.getElementById("search-field").value;
    if (searchTerm !== "") {
      window.open("https://duckduckgo.com/?q=" + searchTerm, "_blank");
      resetSearchField();
      document.getElementById("search-field").blur();
    }
  }
}

window.onload = () => {
  resetSearchField();
  document.getElementById("calendar").innerHTML = getTime();
  document.getElementById("search-field").focus();
}
