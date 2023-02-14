import { fetchUser, fetchUsers } from './index';

// to run the tests, remove the `.skip` from the `describe` blocks
describe.skip('fetchUser', () => {
  test('should return user information for a valid ID', async () => {
    const user = await fetchUser(1);
    expect(user.name).toEqual('Leanne Graham');
    expect(user.email).toEqual('Sincere@april.biz');
  });

  test('should reject with an error message for an invalid ID', async () => {
    await expect(fetchUser(0)).rejects.toThrow('User not found');
  });
});

// to run the tests, remove the `.skip` from the `describe` blocks
describe.skip('fetchUsers', () => {
  test('should return an array of user information for valid IDs', async () => {
    const users = await fetchUsers([1, 2, 3]);
    expect(users).toHaveLength(3);
    expect(users[0].name).toEqual('Leanne Graham');
    expect(users[1].name).toEqual('Ervin Howell');
    expect(users[2].name).toEqual('Clementine Bauch');
  });

  test('should reject with an error message if any ID is invalid', async () => {
    await expect(fetchUsers([1, 0, 3])).rejects.toThrow('User not found');
  });
});
