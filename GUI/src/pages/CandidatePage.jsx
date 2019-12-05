import React from "react";
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import { CandidatePageUser } from "../models/CandidatePageUser";
import { CandidateCampaigns } from "../models/CandidateCampaigns";
import { CandidateCalendarEvent } from "../models/CandidateCalendarEvent";
import { CurrentCampaigns } from "./CurrentCampaigns";
import { CurrentPropositions } from "./CurrentPropositions";
import { CurrentCalendarEvents } from "./CurrentCalendarEvents";
import { User_DB } from "../api/User_DB"
export class CandidatePage extends React.Component {
  constructor(props) {
    super(props)

    this.deleteCampaign = this.deleteCampaign.bind(this)
    this.deleteProposition = this.deleteProposition.bind(this)
    this.deleteCalendarEvent = this.deleteCalendarEvent.bind(this)

  }
  UserDBApi = new User_DB();
  onEdit(edit) {
    this.setState({ editing: false });
    this.setState(prevState => {
      if (edit.name) {
        prevState.user.name = edit.name;

      }
      if (edit.profilePicture) {
        //prevState.user.profilePicture = edit.profilePicture;
        this.UserDBApi.photoUpdate(edit.profilePicture);
      }
      if (edit.politicalAlignment) {
        prevState.user.politicalAlignment = edit.politicalAlignment;
      }
      if (edit.campaigns.length > 0) {
        let tempCampaign = new CandidateCampaigns(
          prevState.user.campaigns.length,
          edit.campaigns
        );
        //prevState.user.campaigns.push(tempCampaign);
        this.UserDBApi.postCampaign(tempCampaign);
      }
      if (edit.propositions.length > 0) {
        let tempPropositions = new CandidateCampaigns(
          prevState.user.propositions.length,
          edit.propositions
        );
        //prevState.user.propositions.push(tempPropositions);
        this.UserDBApi.postProposition(tempPropositions);
      }
      if (edit.calendarEvents.length > 0) {
        let tempCalendarEvent = new CandidateCalendarEvent(
          prevState.user.calendarEvents.length,
          edit.calendarEvents
        );
        //prevState.user.calendarEvents.push(tempCalendarEvent);
        this.UserDBApi.postCalendarEvent(tempCalendarEvent);
      }
      if (edit.footer) {
        prevState.user.footer = edit.footer;
      }

      return prevState;
    });


    this.setState({
      name: "",
      profilePicture: "",
      politicalAlignment: "",
      campaigns: [],
      propositions: [],
      calendarEvents: [],
      footer: ""
    });
    let sections = document.querySelectorAll(".editView");
    sections.forEach(function (section) {
      section.classList.remove("active");
    });
  }

  deleteCampaign(CId) {
    this.setState(prevState => {
      prevState.user.campaigns.splice(CId, 1);
      let i = 0;
      prevState.user.campaigns.forEach(element => {
        element.campaignId = i
        i = i + 1;
      });
      return prevState;
    });

  };

  deleteProposition(CId) {
    this.setState(prevState => {
      prevState.user.propositions.splice(CId, 1);
      let i = 0;
      prevState.user.propositions.forEach(element => {
        element.campaignId = i
        i = i + 1;
      });
      return prevState;
    });

  };

  deleteCalendarEvent(CId) {
    this.setState(prevState => {
      prevState.user.calendarEvents.splice(CId, 1);
      let i = 0;
      prevState.user.calendarEvents.forEach(element => {
        element.eventId = i
        i = i + 1;
      });
      return prevState;
    });

  };

  editView() {
    this.setState({ editing: true });
    let sections = document.querySelectorAll(".editView");
    // sections.forEach(function (section) {
    //         section.classList.remove('active');
    // });
    //let view = document.getElementById("editView");
    sections.forEach(function (section) {
      section.classList.add("active");
    });
    // if (view) {
    //   view.classList.add("active");
    // }
  }
  campaign1 = new CandidateCampaigns(0, "Save the Turtles!");
  prop1 = new CandidateCampaigns(0, "Local City Council!");
  prop2 = new CandidateCampaigns(1, "State Govener 2020");
  prop3 = new CandidateCampaigns(2, "President 2024!");
  event1 = new CandidateCalendarEvent(0, "12/25/2019: Rally at the school!");

  state = {
    candidatesId: "",
    name: "",
    profilePicture: "",
    politicalAlignment: "",
    campaigns: [],
    propositions: [],
    calendarEvents: [],
    footer: ""
    // user: new CandidatePageUser(
    //   "Barack Obama",
    //   "https://www.mymotherlode.com/wp-content/uploads/2014/01/571815-BID-barack-obama-capital-300x300.jpg",
    //   "Democrat",
    //   [this.campaign1],
    //   [this.prop1, this.prop2, this.prop3],
    //   [this.event1],
    //   "Please Vote for me!"
    // )
  };
  // componentDidMount(){
  //   let campaign1 = new CandidateCampaigns(1, "Save the Turtles!");
  //   this.setState(prevState => {
  //     prevState.campaigns.push(campaign1);
  //     return prevState;
  //   });
  // }

  componentDidMount() {
    this.props.updateScreenSplit(false);
    let candidatePageId = +this.props.match.params.userId;
    this.UserDBApi.getCanidateById(candidatePageId)
      .then(user => this.setState({ user }));
  }

  render() {
    return (
      <div className=" card">
        <h1 className="display-4 card-header" style={{ textAlign: 'center' }}>{this.state.user.name}</h1>
        <form
          className="form-group row"
        // className=" col-md-4 col-md-offset-4 align-items-center"
        // id="candidatePageCSS"
        >
          <div className="">
            <header className="name">
              {" "}
            </header>
          </div>
          <div className="normalView">
            <img
              src={this.state.user.profilePicture}
              alt="profilePicture.png"
              className="col-12 ml-2 mt-2 "
            />
            <div className="editView">
              <input
                type="text"
                id="editBox"
                name="profilePicture"
                className="form-control bg-light border border-primary"
                value={this.state.profilePicture}
                placeholder="Enter a url of a picture"
                onChange={e =>
                  this.setState({ profilePicture: e.target.value })
                }
              />
            </div>
            <div className="clear"></div>

          </div>
          <div className="col mr-2">
            <div className="">
              <div className="mt-2 party badge badge-secondary btn-block" style={{ backgroundColor: this.state.user.politicalAlignment === 'Democrat' ? 'blue' : 'red' }} >
                {this.state.user.politicalAlignment}
              </div>
              <div className="editView">
                <input
                  type="text"
                  id="editBox"
                  name="politicalAlignment"
                  className="form-control bg-light border border-primary"
                  placeholder="Enter a new political stance"
                  value={this.state.politicalAlignment}
                  onChange={e =>
                    this.setState({ politicalAlignment: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="campaigns mt-4">
              <h2>Current Campaigns: </h2>
              <span className="events" id="events">
                <CurrentCampaigns campaigns={this.state.user.campaigns} deleteCampaign={this.deleteCampaign} />
                <div className="editView">
                  <input
                    type="text"
                    id="editBox"
                    name="campaigns"
                    className="form-control bg-light border border-primary"
                    placeholder="Enter a new campaign"
                    value={this.state.campaigns}
                    onChange={e => this.setState({ campaigns: e.target.value })}
                  />
                </div>
              </span>
            </div>
            <h2 className="mt-4">Propositions: </h2>
            <CurrentPropositions
              propositions={this.state.user.propositions}
              deleteProposition={this.deleteProposition}
            />

            <div className="editView">
              <input
                type="text"
                id="editBox"
                name="props"
                className="form-control bg-light border border-primary"
                placeholder="Enter a new proposition"
                value={this.state.propositions}
                onChange={e =>
                  this.setState({ propositions: e.target.value })
                }
              />
            </div>
            <div className="calendarEvents mt-4">
              <h2>Upcoming Events: </h2>
              <span className="calendarEvents" id="calendarEvents">
                <CurrentCalendarEvents
                  calendarEvents={this.state.user.calendarEvents}
                  deleteCalendarEvent={this.deleteCalendarEvent}
                />
                <div className="editView">
                  <input
                    type="text"
                    id="editBox"
                    name="calendarEvents"
                    className="form-control bg-light border border-primary"
                    placeholder="Enter a new event"
                    value={this.state.calendarEvents}
                    onChange={e =>
                      this.setState({ calendarEvents: e.target.value })
                    }
                  />
                </div>
              </span>
            </div>
          </div>
        </form>
        <div className="card-footer">
          <footer>
            <h2>{this.state.user.footer}</h2>
            <h3><NavLink to="/moreinfo">Policy Info</NavLink></h3>
            <div className="editView">
              <input
                type="text"
                id="editBox"
                name="footer"
                className="form-control bg-light border border-primary"
                placeholder="Enter a new footer"
                value={this.state.footer}
                onChange={e => this.setState({ footer: e.target.value })}
              />
            </div>
          </footer>
        </div>
        <div className="editView">
          <button
            type="submit"
            className=" btn btn-success btn-lg btn-block"
            id="button"
            onClick={() => this.onEdit(this.state)}
          >
            Submit
            </button>
        </div>
        <div className="edit card-footer">
          {!this.state.editing && (
            <button
              type="button"
              className="btn btn-success btn-lg btn-block mt-2"
              id="edit"
              onClick={() => this.editView()}
            >
              Edit Profile
              </button>
          )}
        </div>

      </div >
    );
  }
}

export default CandidatePage;
