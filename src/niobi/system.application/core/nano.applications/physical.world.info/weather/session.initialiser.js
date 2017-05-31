import uuidV4 from 'uuid/v4'

const sessionInitialiser = () => {
    const applicationSession = {
        id: uuidV4(),
        application: {
            name: 'Weather Data Provider',
            descrition: 'Allows users to get the current weather at a provided location',
            permittedActions: [{
                id: 'SHOW_ME_WEATHER',
                descrition: 'Show Me The Weather in...'
            }]
        }
    }
    return applicationSession
}

export default sessionInitialiser