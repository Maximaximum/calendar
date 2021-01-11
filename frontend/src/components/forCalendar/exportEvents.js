import React from 'react';
import api from '../../api';

class ExportEvents extends React.Component {
  constructor(props) {
    super(props);

    this.export = this.export.bind(this);
  }

  async export() {
    const events = await api.downloadEvents({ user: this.props.isLogged });
    console.log(events.data);

    // events.data.data.forEach(event => {
    //   events.push(
    //     { start: event.start, duration: event.duration, title: event.title }
    //   );
    // });
  }

  render() {
    return (
      <>
        <button className="export" onClick={this.export}>Export events as JSON file</button>
      </>
    );
  }
}

export default ExportEvents; 