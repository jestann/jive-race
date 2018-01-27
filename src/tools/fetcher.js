// Singleton class for fetching data from Jive Race API

class Fetcher {
    constructor () {
        this.url = 'https://jive-race-api.herokuapp.com'
        this.loggedIn = true
        this.token = null
        this.user = null
        this.isError = false
        this.message = null
        this.messageVisible = false
        this.data = null
    }
    
    // error maker function
    makeErr (error) {
        return { success: false, code: error.code || 500, message: error.error || error }
    }
    
    // universal fetch method
    async fetchIt (route, method, token=null, body=null) { // route + method + token are strings, body is an object
        try {
            let urlRoute = this.url + route
            let response = null
            if (body) {
                response = await fetch (urlRoute, {
                    method: method.toUpperCase(),
                    headers: {'Content-Type': 'application/json', 'token': token},
                    body: JSON.stringify(body)
                })
            } else { 
                response = await fetch (urlRoute, {
                    method: method.toUpperCase(),
                    headers: {'Content-Type': 'application/json', 'token': token}
                })
            }
            let data = await response.json()
            if (!data.success) { throw data }
            
            // save if received a token or current user back
            if (data.token) { this.token = data.token }
            if (data.currentUser) { this.user = data.currentUser }
            if (data.message) { 
                this.message = data.message
                this.messageVisible = true
            }
            this.isError = false
            this.data = data
            return data // { success: true, code: 200, currentUser: {currentUser}, data: (data), message: "message" }
            
        } catch (error) { 
            this.data = this.makeErr(error)
            this.message = error.message
            this.messageVisible = true
            this.isError = true
            return this.data // { success: false, code: (code), message: "error" }
        }
    }

    
    
    /* Authorization Routes -- no token */
  
    async authRegister (email, username, password) {
        let data = await this.fetchIt('/auth/register', 'POST', undefined, { email: email, username: username, password: password })
        if (data.success) { this.loggedIn = true }
        return data // { currentUser: {new user}, token: (token), message: "registered" }
    }
  
    async login (username, password) {
        let data = await this.fetchIt('/auth/login', 'PUT', undefined, { username: username, password: password })
        if (data.success) { this.loggedIn = true }
        return data // { currentUser: {logged in user}, token: (token), message: "logged in" }
    }
  
    async logout () {
        /*
        let data = await this.fetchIt('/auth/logout', 'PUT')
        return data // { message: "logged out" } -- route under construction, throws an error
        */
        this.data = { success: true, code: 200, message: "Successfully logged out." }
        this.token = null
        this.user = null
        this.loggedIn = false
        this.message = this.data.message
        this.messageVisible = true
        this.isError = false
        return this.data
    }



    /* Auth Test Routes -- no token */
    
    async getAuth (model, action, userId=null, modelId=null) {
        let route = '/authtest/' + model.toLowerCase() + '/' + action // action may include uppercase
        let body = undefined
        if (userId) { body = { userId: userId } }
        if (userId && modelId) { body.modelId = modelId }
            
        let data = await this.fetchIt(route, 'POST', undefined, body)
        return data // { auth: (auth) } // no currentUser
    }



    /* User Routes -- token needed */

    async userIndex (token) {
        let data = await this.fetchIt('/api/users', 'GET', token)
        return data // { users: (users) }
    }
    
    async userCreate (token, email, username, password) {
        let data = await this.fetchIt('/api/users/create', 'POST', token, { email: email, username: username, password: password })
        return data // { user: (new user), message: "created" }
    }
    
    async userShow (token, userId) {
        let route = '/api/users/' + userId
        let data = await this.fetchIt(route, 'GET', token)
        return data // { user: (user) }
    }
    
    async userUpdate (token, userId, updatesObject) {
        let route = '/api/users/' + userId
        let data = await this.fetchIt(route, 'PUT', token, updatesObject)
        return data // { user: (user), message: "updated" }
    }
    
    async userDestroy (token, userId) {
        let route = '/api/users/' + userId
        let data = await this.fetchIt(route, 'DELETE', token)
        return data // { message: "destroyed" }
    }
    
    async userRaces (token, userId) {
        let route = '/api/users/' + userId + '/races'
        let data = await this.fetchIt(route, 'GET', token)
        return data // { races: (races) }
    }

    async userTeams (token, userId) {
        let route = '/api/users/' + userId + '/teams'
        let data = await this.fetchIt(route, 'GET', token)
        return data // { teams: (teams) }
    }

    async userResults (token, userId) {
        let route = '/api/users/' + userId + '/results'
        let data = await this.fetchIt(route, 'GET', token)
        return data // { results: (results) }
    }
    
    // note name, differentiates from authRegister
    async raceRegister (token, userId, raceId) {
        let route = '/api/users/' + userId + '/register'
        let data = await this.fetchIt(route, 'PUT', token, { raceId: raceId })
        return data // { "[user, race]": [(user), (race)], message: "registered" }
    }

    async unregister (token, userId, raceId) {
        let route = '/api/users/' + userId + '/unregister'
        let data = await this.fetchIt(route, 'PUT', token, { raceId: raceId })
        return data // { "[user, race]": [(user), (race)], message: "unregistered" }
    }

    async joinTeam (token, userId, teamId) {
        let route = '/api/users/' + userId + '/jointeam'
        let data = await this.fetchIt(route, 'PUT', token, { teamId: teamId })
        return data // { "[user, team]": [(user), (team)], message: "joined" }
    }
    
    async leaveTeam (token, userId, teamId) {
        let route = '/api/users/' + userId + '/leaveteam'
        let data = await this.fetchIt(route, 'PUT', token, { teamId: teamId })
        return data // { "[user, team]": [(user), (team)], message: "left" }
    }

    async makeAdmin (token, userId) {
        let route = '/api/users/' + userId + '/makeadmin'
        let data = await this.fetchIt(route, 'PUT', token)
        return data // { user: (user), message: "updated" }
    }

    async makeMember (token, userId) {
        let route = '/api/users/' + userId + '/makemember'
        let data = await this.fetchIt(route, 'PUT', token)
        return data // { user: (user), message: "updated" }
    }


    
    /* Race Routes -- token needed */
    
    async raceIndex (token) {
        let data = await this.fetchIt('/api/races', 'GET', token)
        return data // { races: (races) }
    }
    
    async raceCreate (token, year, name, date, attributesObject) {
        let body = { year: year, name: name, date: date }
        for (let key in attributesObject) { body[key] = attributesObject[key] }
        let data = await this.fetchIt('/api/races/create', 'POST', token, body)
        return data // { race: (new race), message: "created" }
    }
    
    async raceShow (token, raceId) {
        let route = '/api/races/' + raceId
        let data = await this.fetchIt(route, 'GET', token)
        return data // { race: (race) }
    }
    
    async raceUpdate (token, raceId, updatesObject) {
        let route = '/api/races/' + raceId
        let data = await this.fetchIt(route, 'PUT', token, updatesObject)
        return data // { race: (race), message: "updated" }
    }
    
    async raceDestroy (token, raceId) {
        let route = '/api/races/' + raceId
        let data = await this.fetchIt(route, 'DELETE', token)
        return data // { message: "destroyed" }
    }
    
    async raceRunners (token, raceId) {
        let route = '/api/races/' + raceId + '/runners'
        let data = await this.fetchIt(route, 'GET', token)
        return data // { runnners: (runners) }
    }

    async raceTeams (token, raceId) {
        let route = '/api/races/' + raceId + '/teams'
        let data = await this.fetchIt(route, 'GET', token)
        return data // { teams: (teams) }
    }

    async raceResults (token, raceId) {
        let route = '/api/races/' + raceId + '/results'
        let data = await this.fetchIt(route, 'GET', token)
        return data // { results: (results) }
    }

    async open (token, raceId) {
        let route = '/api/races/' + raceId + '/open'
        let data = await this.fetchIt(route, 'PUT', token)
        return data // { race: (race), message: "opened" }
    }

    async archive (token, raceId) {
        let route = '/api/races/' + raceId + '/archive'
        let data = await this.fetchIt(route, 'PUT', token)
        return data // { race: (race), message: "archived" }
    }

    async setCoordinator (token, raceId, coordinatorId) {
        let route = '/api/races/' + raceId + '/setcoordinator'
        let data = await this.fetchIt(route, 'PUT', token, { coordinatorId: coordinatorId })
        return data // { race: (race), message: "updated" }
    }
    
    
    
    /* Team Routes -- token needed */
    
    async teamIndex (token) {
        let data = await this.fetchIt('/api/teams', 'GET', token)
        return data // { teams: (teams) }
    }
    
    async teamCreate (token, name, raceId, ownerId, attributesObject) {
        let body = { name: name, raceId: raceId, ownerId: ownerId }
        for (let key in attributesObject) { body[key] = attributesObject[key] }
        let data = await this.fetchIt('/api/teams/create', 'POST', token, body)
        return data // { team: (new team), message: "created" }
    }
    
    async teamShow (token, teamId) {
        let route = '/api/teams/' + teamId
        let data = await this.fetchIt(route, 'GET', token)
        return data // { team: (team) }
    }
    
    async teamUpdate (token, teamId, updatesObject) {
        let route = '/api/teams/' + teamId
        let data = await this.fetchIt(route, 'PUT', token, updatesObject)
        return data // { team: (team), message: "updated" }
    }
    
    async teamDestroy (token, teamId) {
        let route = '/api/teams/' + teamId
        let data = await this.fetchIt(route, 'DELETE', token)
        return data // { message: "destroyed" }
    }
    
    async teamMembers (token, teamId) {
        let route = '/api/teams/' + teamId + '/members'
        let data = await this.fetchIt(route, 'GET', token)
        return data // { members: (members) }
    }

    async teamResults (token, teamId) {
        let route = '/api/teams/' + teamId + '/results'
        let data = await this.fetchIt(route, 'GET', token)
        return data // { results: (results) }
    }

    async transfer (token, teamId, ownerId) {
        let route = '/api/teams/' + teamId + '/transfer'
        let data = await this.fetchIt(route, 'PUT', token, { ownerId: ownerId })
        return data // { "[owner, team]": [(owner), (team)], message: "transferred" }
    }

    
    
    /* Result Routes -- token needed */
    
    async resultIndex (token) {
        let data = await this.fetchIt('/api/results', 'GET', token)
        return data // { results: (results) }
    }
    
    async resultCreate (token, raceId, runnerId, time, note=null) {
        let body = { raceId: raceId, runnerId: runnerId, time: time }
        if (note) { body.note = note }
        let data = await this.fetchIt('/api/results/create', 'POST', token, body)
        return data // { result: (new result), message: "created" }
    }
    
    async resultShow (token, resultId) {
        let route = '/api/results/' + resultId
        let data = await this.fetchIt(route, 'GET', token)
        return data // { result: (result) }
    }
    
    async resultUpdate (token, resultId, updatesObject) {
        let route = '/api/results/' + resultId
        let data = await this.fetchIt(route, 'PUT', token, updatesObject)
        return data // { result: (result), message: "updated" }
    }
    
    async resultDestroy (token, resultId) {
        let route = '/api/results/' + resultId
        let data = await this.fetchIt(route, 'DELETE', token)
        return data // { message: "destroyed" }
    }

}

export default Fetcher