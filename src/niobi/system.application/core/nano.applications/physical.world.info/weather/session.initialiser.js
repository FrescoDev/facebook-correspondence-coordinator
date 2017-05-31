import uuidV4 from 'uuid/v4'

/**
 * Initialises a new weather data provider application session object
 * @returns  {object} applicationSession The created new session application entity
 */
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