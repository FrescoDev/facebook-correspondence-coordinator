const queryFulfimentPrerequisites = {
    coordinates: {
        long: '',
        lat: ''
    },
    address: {
        postcode: '',
        city: '',
        town: '',
        street: '',
        country: ''
    }
}

/**
 * Get weather query handling function
 * @param {object} query paramaters
 * @returns  {object} queryResult 
 */
const handle = (queryParams) => {
    if (queryParams) {
        return {}
    }
}

export default handle