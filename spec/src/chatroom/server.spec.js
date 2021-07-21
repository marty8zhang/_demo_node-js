const bent = require('bent')
const getStream = bent('http://localhost:3000')

describe('Gets all messages', () => {
  it('should return 200', async () => {
    const res = await getStream('/messages')

    expect(res.statusCode).toBe(200)
  })

  it('should return x messages', async () => {
    const res = await getStream('/messages')
    const messages = await res.json()

    /*
     * The exact number is determined by how many messages are in the CURRENTLY RUNNING MongoDB
     * instance. Please change the number accordingly.
     * Obviously, preparing the dummy data can be done in `beforeEach()`, but that's not the main
     * focus of this tutorial example.
     */
    expect(messages.length).toBe(8)
  })
})

describe('Gets all messages of a user', () => {
  it('should return 200', async () => {
    const res = await getStream('/messages/Marty')

    expect(res.statusCode).toBe(200)
  })

  it('should return x messages', async () => {
    const res = await getStream('/messages/Doc')
    const messages = await res.json()

    /*
     * The exact number is determined by how many messages are in the CURRENTLY RUNNING MongoDB
     * instance. Please change the number accordingly.
     * Obviously, preparing the dummy data can be done in `beforeEach()`, but that's not the main
     * focus of this tutorial example.
     */
    expect(messages.length).toBe(3)
  })
})
