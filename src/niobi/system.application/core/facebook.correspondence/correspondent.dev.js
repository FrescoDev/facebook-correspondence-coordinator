import estimateContext from '../workflows/search/semantic.context.space.reducer'
import mapContextToNanoApp from '../workflows/search/context.nano.app.mapper'
import settings from '../../configuration'

let correspondent = require('fb-local-chat-bot')

correspondent.init(settings.fb.myPageToken,
    settings.fb.myVerification,
    settings.fb.useLocalChat)

correspondent.on('postback', event => {
    const senderID = event.sender.id;
    switch (event.postback.payload) {
        case 'SHOW_ME_THE_WEATHER':
            correspondent.sendText(senderID, 'What location?');
    }
})

correspondent.on('text', (event) => {
    const { id } = event.sender
    const { text } = event.message

    correspondent.sendText(id, 'Ok, Cool ')

    const domainContextId = estimateContext(text)

    if (domainContextId !== 'unknown') {
        const sessionInitialiser = mapContextToNanoApp(domainContextId)
        let appSession = sessionInitialiser()

        const replyOption = appSession.application.permittedActions[0].descrition
        const replyOptionId = appSession.application.permittedActions[0].id

        correspondent.sendButtons(
            id,
            'Here\'s Some Options:', [
                correspondent.createPostbackButton(
                    replyOption,
                    replyOptionId,
                )
            ]
        );
    } else {
        correspondent.sendText(id, 'Sorry, couldn\'t find anything useful')
    }
})

export default correspondent