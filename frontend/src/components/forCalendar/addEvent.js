import React from 'react';

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    
    this.addNewEvent = this.addNewEvent.bind(this);
  }

  addNewEvent(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;

    const start = parseInt((document.getElementById('startHours').value * 60)) +
                  parseInt(document.getElementById('startMinuts').value) - 480;

    const duration = parseInt((document.getElementById('durationHours').value * 60)) +
                     parseInt(document.getElementById('durationMinuts').value);

    let firstLetter = title[0].toUpperCase();
    title = title.split('')
    title.splice(0, 1, firstLetter);

    if(start + duration > (17 * 60 - 480)) {
      alert('Your event duration is too long!');
    }

    else if(duration < 1) {
      alert('Your event duration is 0');
    }

    else {
      const newEvent = {
        title: title.join(''),
        start: start,
        duration: duration,
        user: this.props.isLogged
      }

      this.props.addEvent(newEvent);
    } 
  }

  render() {
    const minuts = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
    const hours = ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17'];
    const minutsOptions = [];
    const startHoursOptions = [];
    const durationHoursOptions = [];

    minuts.forEach(elem => {
      minutsOptions.push(
        <option key={elem}>{elem}</option>
      );
    });

    hours.forEach(elem => {
      if(elem === '17') return;
      startHoursOptions.push(
        <option key={elem}>{elem}</option>
      );
    });

    hours.forEach(elem => {
      durationHoursOptions.push(
        <option key={elem - 8}>{elem - 8}</option>
      );
    });

    return (
      <form className="calendarPage-form" onSubmit={this.addNewEvent}>
        <h3>Create a new event</h3>
        <label>
          <p>Title:</p>
          <input id="title" type="text" placeholder="What I'll do" required/>
        </label>

        <label>
          <p>Start at:</p>
          <select id="startHours">
            {startHoursOptions}
          </select>
          <span> : </span>
          <select id="startMinuts">
            {minutsOptions}
          </select>
        </label>

        <label>
          <p>Duration:</p>
          <select id="durationHours">
            {durationHoursOptions}
          </select>
          <span> : </span>
          <select id="durationMinuts">
            {minutsOptions}
          </select>
          </label>

          <input type="submit" id="addEvent" value="CREATE"/>
        </form>
    );
  }
}

export default AddEvent;