import React from 'react';

class ExportEvents extends React.Component {
  render() {
    const url = `http://localhost:3000/api/download/${this.props.isLogged}`;
    return (
      <>
        <a className="export" href={url}>Download events as JSON file</a>
      </>
    );
  }
}

export default ExportEvents; 