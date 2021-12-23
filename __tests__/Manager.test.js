//first we need to require the Manager js file
const Manager = require('../lib/Manager');

test('test that the manager is created same as others, but also includes office#', () => {
    const manager = new Manager('Adam', 4, 'mail@manager.com', 666);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getRole()).toEqual("Manager");

})