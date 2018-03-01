const GameEngine = require('../game-engine');

describe('GameEngine', function () {
  describe('#calculateChecksum', function () {
    describe('it returns the correct checksum for code ABCD', function () {
      function subject() {
        return new GameEngine("ABCD");
      }

      test('returns OOOO for the guess CADB', function () {
        expect(subject().calculateChecksum('CADB')).toBe('OOOO');
      });

      test('returns ---- for the guess EFGH', function () {
        expect(subject().calculateChecksum('EFGH')).toBe('----');
      });

      test('returns XX-- for the guess ABEA', function () {
        expect(subject().calculateChecksum('ABEA')).toBe('XX--');
      });

      test('returns XO-- for the guess FBDE', function () {
        expect(subject().calculateChecksum('FBDE')).toBe('XO--');
      });

      test('returns O--- for the guess DEFG', function () {
        expect(subject().calculateChecksum('DEFG')).toBe('O---');
      });

      test('returns XO-- for the guess DECG', function () {
        expect(subject().calculateChecksum('DECG')).toBe('XO--');
      });

      test('returns XXXX for the guess ABCD', function () {
        expect(subject().calculateChecksum('ABCD')).toBe('XXXX');
      });
    });

    describe('it returns the correct checksum for code EFED', function () {
      function subject() {
        return new GameEngine("EFED");
      }

      test('returns XX-- for the guess EEEE', function () {
        expect(subject().calculateChecksum('EEEE')).toBe('XX--');
      });

      test('returns XO-- for the guess CEEB', function () {
        expect(subject().calculateChecksum('CEEB')).toBe('XO--');
      });

      test('returns XXX- for the guess EEED', function () {
        expect(subject().calculateChecksum('EEED')).toBe('XXX-');
      });

      test('returns XX-- for the guess EEEE', function () {
        expect(subject().calculateChecksum('EEEE')).toBe('XX--');
      });

      test('returns XOO- for the guess DEEE', function () {
        expect(subject().calculateChecksum('DEEE')).toBe('XOO-');
      });

      test('returns XOOO for the guess DEEF', function () {
        expect(subject().calculateChecksum('DEEF')).toBe('XOOO');
      });

      test('returns ---- for the guess AACG', function () {
        expect(subject().calculateChecksum('AACG')).toBe('----');
      });

      test('returns XXXX for the guess EFED', function () {
        expect(subject().calculateChecksum('EFED')).toBe('XXXX');
      });

      test('returns XO-- for the guess FAEF', function () {
        expect(subject().calculateChecksum('FAEF')).toBe('XO--');
      });
    });
  });
});
