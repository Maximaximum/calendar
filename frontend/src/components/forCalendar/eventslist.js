import React from 'react';

class EventsList extends React.Component {
  constructor(props) {
    super(props);
    
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  deleteEvent(e) {
    this.props.deleteEvent(e.target.id);
  }

  render() {
    const events = [];

    if(this.props.events) {
      this.props.events.forEach(event => {
        const hours = Math.floor((event.start + 480) / 60);
        const minutes = (event.start + 480) % 60;

        const durationHours = Math.floor(event.duration / 60);
        const durationMinutes = event.duration % 60

        events.push(
          <li key={event._id}>
            <h6>{event.title}</h6><br/>
            <span>Start at: <strong>{hours} : {minutes < 10 ? 0 : ''}{minutes}</strong></span><br/>
            <span>Duration: {' '}
              <strong>
                {durationHours} 
                {durationHours === 1 ? ' hour' : ' hours'} and 
                {durationMinutes < 10 ? ' 0' : ' '}{durationMinutes} minutes
              </strong>
            </span>
            <button id={event._id} onClick={this.deleteEvent}>X</button>
          </li>
        )
      });
    }
    
    return (
      !events.length ?
      <h4>You have not active events, now.</h4> :
      <ul>{events}</ul>
    );
  }
}

export default EventsList;