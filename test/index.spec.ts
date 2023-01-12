import myTest from '../src';

describe('index', () => {
  describe('myTest', () => {
    it('should return a string containing the message', () => {
      const message = 'Hello';

      const result = myTest();

      expect(result).toMatch(message);
    });
  });
});
