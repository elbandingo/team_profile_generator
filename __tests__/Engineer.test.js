//first, require and import the engineer script from lib
const Engineer = require('../lib/Engineer');

//test that the object is created
test('Test that obj is created, similar to employee test, but also has github', () => {
    const engineer = new Engineer('Adam', 2, 'mail@engineer.com', 'elbandingo');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

//test to see that the role is overridden to Engineer
test('testing to see if engineer is now role', () => { 
    const engineer = new Engineer('Adam', 2, 'mail@engineer.com', 'elbandingo');
    expect(engineer.getRole()).toEqual("Engineer");
});
