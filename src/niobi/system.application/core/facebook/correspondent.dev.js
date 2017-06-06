import estimateContext from '../workflows/search/semantic.context.space.reducer'
import mapContextToNanoApp from '../workflows/search/context.nano.app.mapper'
import settings from '../../configuration'

const correspondent = require('fb-local-chat-bot')

// Correspondent initialiser: specify fb bot credentials, and whether to to launch local chat web app. 
correspondent.init(settings.fb.myPageToken,
    settings.fb.myVerification,
    settings.fb.useLocalChat)

// Define "postback" event handler, provides a switch case statement for each postback type, mapping these to adequate actions.
correspondent.on('postback', event => {
    const { id } = event.sender

    switch (event.postback.payload) {
        case 'SHOW_ME_WEATHER':
            correspondent.sendText(id, 'What location?')
    }
})

// Define inbound "text" message event handler - acts as the search input box.
correspondent.on('text', (event) => {
    const { id } = event.sender
    const { text } = event.message

    // notify the user the query was successfully recieved.
    correspondent.sendText(id, 'Ok, Cool ')

    // Find the appropriate search term's domain of context.
    const domainContextId = estimateContext(text)

    // If the context is "known" map the query to the appropriate "nano app" a.k.a. Function.
    if (domainContextId !== 'unknown') {
        const sessionInitialiser = mapContextToNanoApp(domainContextId)

        // Initialise a new stateful nano app interaction session 
        const appSession = sessionInitialiser()

        // Retrieve the response interface specification from the app session 
        const replyOption = appSession.application.permittedActions[0].descrition
        const replyOptionId = appSession.application.permittedActions[0].id

        // Present the response interface to the user
        correspondent.sendButtons(
            id,
            'Here\'s Some Options:', [
                correspondent.createPostbackButton(
                    replyOption,
                    replyOptionId,
                )
            ]
        )
    } else {
        // If the context of the query is unknown, let the user know :(
        correspondent.sendText(id, 'Sorry, couldn\'t find anything useful')
    }
})

export default correspondent