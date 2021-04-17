const users = require('./users')
// write some tests
describe('users', () => {
  test('findUser', async () => {
    const id = 2

    const user = await users.findUser(id)
    expect(user.id).toBe(id)
    expect(user.email).toBe(`readycoder${id}@gmail.com`)
  })
  test('deleteUser', async () => {
    expect.assertions(2)
    const id = 2
    const user = await users.deleteUser(id)
    expect(user.id).toBe(id)

    try {
      const user = await users.findUser(id)
    } catch (err) {
      expect(err).toBeTruthy()
    }
  })
})
