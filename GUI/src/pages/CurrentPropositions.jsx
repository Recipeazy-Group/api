import React from 'react';
import { CandidatePageUser } from '../models/CandidatePageUser'
export class CurrentPropositions extends React.Component {




  render() {
    return (

      <ul className="list-group">

        {this.props.propositions.map(currentCampaign => <div key={currentCampaign.campaignId}>

          <div className="list-group-item rounded-0">{currentCampaign.campaignName}</div>
          <div className="editView">

            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={e => this.onDelete(currentCampaign.campaignId)}
            >
              X
                </button>
          </div>
        </div>)



        }
      </ul>


    );
  }

  onDelete(tempCampaignId) {
    if (window.confirm('Are you sure you want to delete the proposition?')) {
      this.props.deleteProposition(tempCampaignId);
      // this.props.propositions.splice(tempCampaignId, 1);
      // let i = 0;
      // this.props.propositions.forEach(element => {
      //   element.campaignId = i
      //   i = i + 1;
      // });
    };
  }
}