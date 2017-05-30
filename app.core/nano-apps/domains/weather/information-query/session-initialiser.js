/**
 * Provides a factory function which instantiates new nano app session object.
 * @param  {object} queryParams The paramerters required to fulfill the query.
 * @param  {object} session This object encapsulates useful information regarding the state of the app interaction session.
 */
const initialiseSession = (queryParams) => {
    const session = {
        id: 'newSession',
        startedAt: new Date(),
        appDomain: {
            id: 'weather'
        },
        queryParams: queryParams
    }

    return session
}

export default initialiseSession