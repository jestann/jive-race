/*

// Flaticon Credit Author

<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

// User Schema

const userSchema = new Schema({
    // _id gives ObjectId
    createdAt: Date,
    updatedAt: Date,
    inactivatedAt: Date,
    email: { type: String, required: true, unique: true }, // only contact info saved when inactivating users
    username: { type: String, unique: true }, // not required in mongoose to allow for inactivating users
    password: { type: String }, // not required in mongoose to allow for inactivating users
    role: { type: String, required: true, default: 'member' }, // three roles currently available: 'member' 'admin' and 'inactive'
    firstName: String,
    lastName: String,
    bio: String,
    photo: String, // use gravatar?
    birthdate: Date,
    address: String,
    city: String,
    state: String,
    zip: String,
    phone: String,
    races: [ObjectId], // array of race ids
    teams: [ObjectId], // array of team ids
    results: [ObjectId], // array of result ids
    isCurrent: Boolean, // if paid to register for a currently open race
    currentRaceId: { type: ObjectId, default: null }, // id of last race registered
    dateRegistered: Date, // date last registered
    currentTeamId: { type: ObjectId, default: null } // id of current team
})



// Race Schema

const raceSchema = new Schema({
    createdAt: Date,
    updatedAt: Date,
    year: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    description: String,
    date: { type: Date, required: true },
    startingLocation: String,
    endingLocation: String,
    coordinatorId: ObjectId, // user id of coordinator
    isOpen: Boolean, // open for registration
    runners: [ObjectId], // array of user ids
    teams: [ObjectId], // array of team ids
    results: [ObjectId] // array of result ids
})



// Team Schema

const teamSchema = new Schema({
    createdAt: Date,
    updatedAt: Date,
    raceId: { type: ObjectId, required: true },
    name: { type: String, required: true, unique: true },
    description: String,
    slackChannel: String,
    meetingLocation: String,
    ownerId: { type: ObjectId, required: true }, // user id
    members: [ObjectId], // array of user ids
    results: [ObjectId] // array of result ids
})



// Result Schema

const resultSchema = new Schema({
    createdAt: Date,
    updatedAt: Date,
    raceId: { type: ObjectId, required: true },
    teamId: { type: ObjectId, required: true },
    runnerId: { type: ObjectId, required: true }, // user id of runner
    time: Number, // placing will be calculated by race or team
    note: String
})


*/