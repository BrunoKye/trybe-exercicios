const upperCase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it ('Verifica a chamada da função upperCase', (runTest) => {
  upperCase('test', jurema => {
    try{
      const actual = jurema;
      const expected = 'TEST';

      expect(actual).toBe(expected);
      runTest();
    } catch (error) {
      runTest(error);
    }
  });
});