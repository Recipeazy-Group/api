import React from 'react'

export class CurrentCampaigns extends React.Component {
  render() {
    return (

      <div className="list-group">

        {this.props.campaigns.map(currentCampaign => <div key={currentCampaign.campaignId}>

          <div className="list-group-item rounded-0">{currentCampaign.campaignName}</div>
          <div className="editView">

            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={() => this.onDelete(currentCampaign.campaignId)}
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
    if (window.confirm('Are you sure you want to delete the campaign?')) {
      this.props.deleteCampaign(tempCampaignId);
      // this.props.campaigns.splice(tempCampaignId, 1);
      // let i = 0;
      // this.props.campaigns.forEach(element => {
      //   element.campaignId = i
      //   i = i + 1;
      // });
    };
  }
}