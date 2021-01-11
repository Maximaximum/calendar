import React from 'react';
import { connect } from 'react-redux';
import { getEvents, addEvent, deleteEvent } from '../actions';

import VisualCalendar from '../components/forCalendar/visualCalendar';
import EventsList from '../components/forCalendar/eventslist';
import AddEvent from '../components/forCalendar/addEvent';
import ExportEvents from '../components/forCalendar/exportEvents';

class Calendar extends React.Component {
  
  componentDidMount() {
    if(this.props.isLogged) {
      this.props.getEvents(this.props.isLogged);
    }
  }

  render() {
    return (
      <div className="calendar">
        <h1>Your plan for today</h1>

        <div className="flexContainer">
          <VisualCalendar events={this.props.events} />

          <div className="eventsPanel">
            <AddEvent addEvent={this.props.addEvent}
                      isLogged={this.props.isLogged} />
                      
            <EventsList events={this.props.events}
                        deleteEvent={this.props.deleteEvent} />
            <ExportEvents isLogged={this.props.isLogged}
                          getEvents={this.props.getEvents} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    isLogged: store.isLogged,
    events: store.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEvents: (dataFromUser) => dispatch(getEvents(dataFromUser)),
    addEvent: (dataFromUser) => dispatch(addEvent(dataFromUser)),
    deleteEvent: (dataFromUser) => dispatch(deleteEvent(dataFromUser))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);