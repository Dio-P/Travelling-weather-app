const { apiCall } = require("../src/server/apiCall.js")


describe("Test=> 'apiCall()'", () => {
    test('Should be defined', () => {
        expect(apiCall).toBeDefined();
    });

    test('apiCall should be a function', () => {
        expect(typeof apiCall).toBe("function");
    });
});