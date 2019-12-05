import React from 'react';
import './../App.css';
import { CandidateCell } from '../models/CandidateCell';
import { Link } from 'react-router-dom';
export const Cell = (props) => {
    if (!props.cells) {
        return (<div>Loading...</div>);
    }
    return (
        <div>
            {
                console.log(props.cells),

                props.cells.map(cell =>
                    <div className="card">
                        <div className="card-body bg-black">
                            <h4 className="card-title">{cell.name}</h4>
                            <p className="card-text">{cell.position + " " + cell.location}</p>
                            <Link className="btn btn-primary" to="/candidate">See Profile</Link>
                        </div>
                    </div>
                )


            }
        </div>
    );

};
export default Cell;