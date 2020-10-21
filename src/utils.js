export const rangeDates = (startDate, endDate) => {
  let dates = [],
  currentDate = startDate,
  addDays = function(days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = addDays.call(currentDate, 1);
  }
  return dates;
}

export const currencyFormat = (value, currency = 'Rp') => {
  return currency + ' ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}