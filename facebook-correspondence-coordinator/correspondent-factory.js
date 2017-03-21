import {Bot, Elements as Response} from 'facebook-messenger-bot';
import settings from '../app/configuration';

export const correspondent = new Bot(settings.fb.myPageToken, settings.fb.myVerification);
export let response = new Response();
