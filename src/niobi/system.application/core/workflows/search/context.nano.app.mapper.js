import sessionInitialiser from '../../../core/nano.applications/physical.world.info/weather/session.initialiser'

const APP_DOMAIN_REGISTRY = {
    WEATHER_DOMAIN_ID: 'weather'
}

/**
 * Maps the domain context to a nano app domain
 * @param  {string} contextId The domain context identifier
 * @return  {object} Returns an instantiation of the interaction application session object
 */
const mapContextToNanoApp = (contextId) => {
    if (contextId === APP_DOMAIN_REGISTRY.WEATHER_DOMAIN_ID) {
        return sessionInitialiser
    }
}

export default mapContextToNanoApp