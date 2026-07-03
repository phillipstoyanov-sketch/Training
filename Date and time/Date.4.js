function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date = new Date(2018, 3, 2);

alert( getDateAgo(date, 1) ); 
alert( getDateAgo(date, 2) ); 
alert( getDateAgo(date, 365) );