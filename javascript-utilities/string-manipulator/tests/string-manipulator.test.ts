import { StringManipulator } from '../string-manipulator';

describe('string manipulator', () => {
  it('concatenate string', () => {
    const aString = StringManipulator.concat('Hello', ' World');
    expect(aString).toBe('Hello World');
  });

  it('combine string (case insensitive)', () => {
    const aString = StringManipulator.combine('test', 'TEST');
    expect(aString).toBe('test');
  });

  it('combine string (case sensitive)', () => {
    const aString = StringManipulator.combine('test', ' CARs', true);
    expect(aString).toBe('test CAR');
  });

  it('combine list of strings (case insensitive)', () => {
    const list = [
      'test',
      'TEST',
      'hello',
      'world'
    ]
    const aString = StringManipulator.combineList(list);
    expect(aString).toBe('teshlowrd');
  });

  it('combine list of strings (case sensitive)', () => {
    const list = [
      'test',
      'TEST',
      'hello',
      'wORLD'
    ]
    const aString = StringManipulator.combineList(list, true);
    expect(aString).toBe('tesTEShlowORLD');
  });
});