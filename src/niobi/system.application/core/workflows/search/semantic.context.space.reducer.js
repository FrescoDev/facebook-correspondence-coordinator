/**
 * Disambiguates the inbound user message to some contextual domain of the system
 * @param  {string} message The inbound user message
 */
const estimateContext = (message) => {
    if (message.search('weather')) {
        return 'weather'
    }
    return 'unknown'
}

export default estimateContext