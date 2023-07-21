import React, { useRef, useState } from 'react';
import { CalendarIcon } from '@heroicons/react/outline';
import EventForm from './components/EventForm';
import EventCalendar from './components/EventCalendar';
import EventManagement from './components/EventManagement';

const App = () => {
  const bottomRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventCreate = (eventData) => {
    const newEvent = { ...eventData, id: Date.now().toString() };
    setEvents([...events, newEvent]);
    console.log(events);
  };

  const handleEventSelect = (eventId) => {
    const selectedEvent = events.find((event) => event.id === eventId.id);
    setSelectedEvent(selectedEvent);

    // Scroll to the bottomRef element only if selectedEvent is truthy
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEventEdit = (editedEvent) => {
    console.log(editedEvent, 'evntEdit clg');
    const updatedEvents = events.map((event) =>
      event.id === editedEvent.id ? editedEvent : event
    );
    setEvents(updatedEvents);
  };

  const handleEventDelete = (deletedEvent) => {
    setEvents(events.filter((event) => event.id !== deletedEvent.id));
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0">
                <CalendarIcon className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="hidden md:block">
                <h1 className="ml-4 text-xl font-bold text-gray-900">
                  Event Scheduler
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="flex flex-col md:flex-col gap-4 mt-8">
              <div className="bg-white shadow sm:rounded-lg px-4 py-4 flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg leading-6 font-bold text-gray-900 mb-5">
                    Upcoming Events
                  </h2>
                </div>
                <EventForm onSubmit={handleEventCreate} />
                <EventCalendar
                  events={events}
                  onSelectEvent={handleEventSelect}
                />
              </div>
              {selectedEvent && (
                <div className="bg-white shadow sm:rounded-lg px-4 py-4">
                  <div className="flex items-center justify-between">
                    <h2 ref={bottomRef} className="text-lg leading-6 font-bold text-gray-900">
                      Event Details
                    </h2>
                  </div>
                  <EventManagement
                    event={selectedEvent}
                    onEdit={handleEventEdit}
                    onDelete={handleEventDelete}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
