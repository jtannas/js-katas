var moment = require('moment');

var talkingCalendar = function(dateString) {
  return moment(dateString, 'YYYY/MM/DD').format('MMMM Do, YYYY');
};

console.log(talkingCalendar('2017/12/02'));
  // expected 'December 2nd, 2017'
console.log(talkingCalendar('2007/11/11'));
  // expected 'November 11th, 2007'
console.log(talkingCalendar('1987/08/24'));
  // expected 'August 24th, 1987'
