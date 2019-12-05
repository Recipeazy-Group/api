import React from 'react';
import { CandidatePageUser } from '../models/CandidatePageUser'
export class CurrentCalendarEvents extends React.Component {




  render() {
    return (

      <div className="list-group">

        {this.props.calendarEvents.map(currentCampaign => <div key={currentCampaign.campaignId}>

          <div className="list-group-item rounded-0">{currentCampaign.eventName}</div>
          <div className="editView">

            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={e => this.onDelete(currentCampaign.eventId)}
            >
              X
                </button>
          </div>
        </div>)



        }
      </div>


    );
  }

  onDelete(tempCampaignId) {
    if (window.confirm('Are you sure you want to delete the calendar event?')) {
      this.props.deleteCalendarEvent(tempCampaignId);
      // this.props.calendarEvents.splice(tempCampaignId, 1);
      // let i = 0;
      // this.props.calendarEvents.forEach(element => {
      //   element.eventId = i
      //   i = i + 1;
      // });
    };
  }
}