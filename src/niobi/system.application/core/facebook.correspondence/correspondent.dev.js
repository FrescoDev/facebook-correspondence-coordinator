let correspondent = require('fb-local-chat-bot')

import settings from '../../configuration'

correspondent.init(settings.fb.myPageToken, settings.fb.myVerification, settings.fb.useLocalChat)

correspondent.on('text', async(event) => {
    const { id } = event.sender
    correspondent.sendText(id, 'Hi')

    correspondent.sendButtons(
        id,
        'Some text', [
            correspondent.createPostbackButton(
                'button 1',
                'BUTTON_TYPE_1',
            ),
            correspondent.createPostbackButton(
                'button 2',
                'BUTTON_TYPE_2',
            ),
        ]
    );
})

export default correspondent