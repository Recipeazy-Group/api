import React from 'react';
import { Cell } from './Cells';
import { CandidateCell } from '../models/CandidateCell';
export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidateCell: new CandidateCell(
                "Troy", "New York", true, "Senator"
            ),
            candidates: [new CandidateCell(
                "Troy", "New York", true, "Senator"
            ), new CandidateCell(
                "Amy", "New York", true, "Senator"
            ), new CandidateCell(
                "Bob", "New York", true, "Senator"
            )]
        };
    }
    findResults() {

    };
    //Grey out candidate if not running

    render() {
        return (
            <div>
                <div>
                    <select id="partySelect" class=" btn form-control form-control-lg bg-light border border-secondary" onChange={e => (this.setState({ isCandidate: e.target.value === 1 ? true : false }))}>
                        <option selected disabled></option>
                        <option value={0} className="form-control bg-light">Search by Candidate</option>
                        <option value={1} className="form-control bg-light" >Search by Location</option>
                        <option value={2} className="form-control bg-light">Search by Policy</option>
                        <option value={3} className="form-control bg-light" >Search by Proposition</option>
                    </select>
                </div>
                <div className="active-purple-3 active-purple-4 mb-4 ">
                    <input className="form-control border border-secondary" type="text" placeholder="Search" aria-label="Search" />
                </div>
                <Cell cells={this.state.candidates} />
            </div >

        );
        // componentDidMount() {
        //     this.candidateCell
        //         .then(accounts => this.setState({ accounts }));


        // }

    }
}
export default Search;