const correspondent = require('fb-local-chat-bot');
import settings from '../app/configuration';

correspondent.init(settings.fb.myPageToken, settings.fb.myVerification, true, false);

correspondent.on('text', (event) => {
  const senderID = event.sender.id;
  correspondent.sendText(senderID, 'Hi')
});

export default correspondent;