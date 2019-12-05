import axios from 'axios';

export class User_DB {
    url = "localhost:8000";
    //User
    createNewUser(userName, password, type, email) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/signup`, userName, password, type, email)
                .then(response => resolve(response.data))
                .catch(response => alert(response));
        });
    };
    getUserLogIn(userName, password) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/login`, userName, password)
                .then(response => resolve(response.data))
                .catch(response => alert(response));
        });
    };
    getUserById(userId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/user/:${this.userId}/`)
                .then(response => resolve(response.data))
                .catch(response => alert(response));
        });
    };
    //Candidate
    getCandidateById(userId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/candidate/:${this.userId}/`)
                .then(response => resolve(response.data))
                .catch(response => alert(response));
        });
    };
    getCandidates() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/search`)
                .then(response => resolve(response.data))
                .catch(response => alert(response));

        });
    };
    //PUT for photo
    photoUpdate(photoId) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/candidatephotoupdate/${photoId}`)
                .then(response => resolve(response.data))
                .catch(response => alert(response));
        });
    };

    infoUpdate(userId) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/candidateinfoupdate`, userId)
                .then(response => resolve(response.data))
                .catch(response => alert(response));
        });
    };
    candidateDrop(userId) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/candidatedrop`, userId)
                .then(response => resolve(response.data))
                .catch(response => alert(response));
        });
    };
    //Policies
    policyControl(userId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/policies`, userId)
                .then(response => resolve(response.data))
                .catch(response => alert(response));
        })
    };
    //Campaign

    //Proposition
    getPropositions(userId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/propositions`, userId)
                .then(response => resolve(response.data))
                .catch(response => alert(response));
        })
    };
    //Events
    getEvent(userId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/events`, userId)
                .then(response => resolve(response.data))
                .catch(response => alert(response));
        })
    };
    postEvent(userId) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/addEvent`, userId)
                .then(response => resolve(response.data))
                .catch(response => alert(response));
        })
    };
    postProposition(userId) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/addNewProposition`, userId)
                .then(response => resolve(response.data))
                .catch(response => alert(response));
        })
    };
    postCampaign(userId) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/addNewCampaign`, userId)
                .then(response => resolve(response.data))
                .catch(response => alert(response));
        })
    };
   

}