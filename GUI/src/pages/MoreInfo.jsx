import React from "react";
import { MoreInfoCard } from "../models/MoreInfoCard";
export class MoreInfo extends React.Component {
  moreinfo1 = new MoreInfoCard(
    "Gun Control",
    "We need to control the guns!",
    "https://www.momsrising.org/sites/default/files/styles/large/public/BanAssaultRifles.png?itok=UrHy3zZY"
  );

  state = {
    MoreInfoCardArray: [this.moreinfo1, this.moreinfo1, this.moreinfo1]
  };

  render() {
    return (
      <div>

        {this.state.MoreInfoCardArray.map(card => (
          <div className="card" key={card.topicName}>
            <h1
              className="display-4 card-header"
              style={{ textAlign: "center" }}
            >{card.topicName}</h1>
            <div className="row">
              <div className="col">
                <img
                  src={card.image}
                  alt="profilePicture.png"
                  className="col-4 mt-2 rounded"
                />
              </div>
              <div className="col">
                <p className="card-text">{card.moreInfo}</p>
              </div>
              <div className="clear"></div>
            </div>





          </div>
        ))}

      </div>
    );
  }
}
