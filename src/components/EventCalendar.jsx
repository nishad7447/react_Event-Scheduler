import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const views = {
  month: true,
  week: true,
  agenda: true,
};

const EventCalendar = ({ events, onSelectEvent }) => {
  return (
    <div className='h-screen'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        selectable
        onSelectEvent={onSelectEvent}
        views={views} // Pass the views prop to customize available views
        defaultView='month' // Set the default view to 'month'
      />
    </div>
  );
};

export default EventCalendar;
