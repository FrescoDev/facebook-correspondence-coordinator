const correspondent = require('fb-local-chat-bot');

import findContextualDomain from './core/workflows/semantic-space-reduction';
import settings from '../app/configuration';

correspondent.init(settings.fb.myPageToken, settings.fb.myVerification, true, false);

correspondent.on('text', (event) => {
    const senderId = event.sender.id;

    //---search workflow---
    //reduce semantic space of message to resolve a domain
    //when domain is found find the corresponding nano app
    //send back a button that allows you to start a session with this nano app
    const domainId = findContextualDomain(event.text);
    //const getObject

    correspondent.sendText(senderId, 'Hi')
});

export default correspondent;