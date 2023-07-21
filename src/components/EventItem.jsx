import React from 'react';
import EventItem from './EventItem';

const EventManagement = ({ events, onEdit, onDelete }) => {
  return (
    <div>
      {events.map((event) => (
        <EventItem
          key={event.id} // Assuming each event has a unique id
          event={event}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default EventManagement;
