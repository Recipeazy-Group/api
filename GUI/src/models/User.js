//only .js because it's a class, not a component
export class User {
    constructor(userName, password, email, name, politicalAlignment, profilePicture) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.name = name;
        this.politicalAlignment = politicalAlignment;
        this.profilePicture = profilePicture;
    }
}