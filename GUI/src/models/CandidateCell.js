export class CandidateCell {
    // candidates[
    //     new CandidateCell("Troy", "New York", "image", "Senator", "None")
    // ];
    constructor(name, location, running, position) {
        this.name = name;
        this.location = location;
        this.running = running;
        this.position = position;
    }
    getCandidates() {
        return this.candidates;
    }
}