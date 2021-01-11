import React from 'react';

class VisualCalendar extends React.Component {
  render() {
    const hoursLines = [];
    const fullHours = [];
    const halfHours = [];
    const events = [];  

    for(let i = 0; i < 10; i++) {
      hoursLines.push(
        <hr key={i} style={{ top: i * 60 * 2}}/>
      )

      fullHours.push(
        <p key={i} style={{ top: i * 60 * 2 }}>{i + 8 + ':00'}</p>
      )

      if(i === 9) continue;

      halfHours.push(
        <small key={i} style={{ top: i * 60 * 2 + 60 }}>{i + 8 + ':30'}</small>
      )
    }

    this.props.events.forEach(event => {
      events.push(
        event
      );
    });

    const blocks = [[events[0]]];

    for (let j = 1; j < events.length; j++) {
      const event = events[j];
      let pushNewBlock = true;

      for (let i = 0; i < blocks.length; i++) {
        const start = blocks[i][blocks[i].length - 1].start;

        blocks[i].sort((a, b) => {
          return (a.start + a.duration) - (b.start + b.duration)
        })

        const finish = start + blocks[i][blocks[i].length - 1].duration;
          
        if((start <= event.start && finish >= (event.start + event.duration)) || 
          (start <= event.start && finish >= event.start) ||
          (start <= event.start && finish >= (event.start + event.duration))){
          
          blocks[i].push(
            event
          );
          pushNewBlock = false;
        }

        blocks[i].sort((a, b) => {
          return (a.start === b.start) ? (b.duration - a.duration) : (a.start - b.start);
        });
      }
      if (pushNewBlock){
        blocks.push(
          [event]
        );
      }
    }

    if(this.props.events && blocks[0][0]) {
      for (let i = 0; i < blocks.length; i++) {
        for (let j = 0; j < blocks[i].length; j++) {
          const event = blocks[i][j];
  
          blocks[i][j] = 
          <div className="visualCalendar-event" 
               style={{ top: event.start * 2,
               maxWidth: 200 / blocks[i].length,
               height: event.duration * 2 }}
               id={event._id}
               key={event._id}>
               <span>{event.title}</span>
          </div>;
        }
      }
    }

    for (let i = 0; i < blocks.length; i++) {
      blocks[i] = <div key={i} className="confictEventsContainer">{blocks[i]}</div>
    }

    return (
      <div className="visualCalendar">
        {hoursLines}
        {fullHours}
        {halfHours}
        {blocks}
      </div>
    );
  }
}

export default VisualCalendar;