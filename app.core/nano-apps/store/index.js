import getWeatherQuery from '../domains/weather/information-query/get.weather.query'

/**
 * Provides a key-value store mechanism to resolve a nano app based on some domain identifier
 * @param  {string} domainId Domain identifier
 */
const store = (domainId) => {
    switch (domainId) {
        case 'weather':
            return getWeatherQuery()
    }
}

export default store