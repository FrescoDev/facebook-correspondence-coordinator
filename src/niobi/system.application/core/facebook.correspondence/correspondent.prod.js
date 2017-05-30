import { correspondent, response } from './correspondent.factory'

correspondent.on('message', async message => {
    const { sender } = message
    try {
        response.add({ text: 'Hi! :)' })
        await correspondent.send(sender.id, response)
    } catch (err) {
        console.error(err)
        response.add({ text: 'For some reason that broke me, try again?' })
        await correspondent.send(sender.id, response)
    }
})

export default correspondent