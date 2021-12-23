const Intern = require ('../lib/Intern');

//test that creating intern works
test('test that object is created with same employee parameters with school and role override', () => {
    const intern = new Intern('Adam', 3, 'mail@intern.com', 'UofT');
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.getRole()).toEqual("Intern");
})