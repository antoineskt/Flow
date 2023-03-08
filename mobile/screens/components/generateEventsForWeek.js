import moment from 'moment';

const generateEventsForWeek = (daysOfWeek, startDate, endDate) => {
  const events = [];
  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  for (let i = 0; i < 7; i++) {
    const dayName = dayNames[i];
    if (daysOfWeek[dayName]) {
      const eventDate = moment(startDate).isoWeekday(i + 1);
      while (eventDate.isSameOrBefore(endDate)) {
        events.push({
          title: 'My Goal',
          start: eventDate.format('YYYY-MM-DD'),
          end: eventDate.format('YYYY-MM-DD'),
          color: 'blue',
        });
        eventDate.add(1, 'week');
      }
    }
  }

  return events;
};
