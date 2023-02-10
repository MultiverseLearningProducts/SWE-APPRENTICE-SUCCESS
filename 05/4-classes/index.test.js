import { Athlete } from './index.js';

describe('Athlete class', () => {
  let athlete;

  beforeEach(() => {
    athlete = new Athlete('John Doe');
  });

  test('addEvent method should add an event to the events array', () => {
    athlete.addEvent('100m dash');
    athlete.addEvent('long jump');
    expect(athlete.events).toEqual(['100m dash', 'long jump']);
  });

  test('deleteEvent method should delete an event from the events array', () => {
    athlete.addEvent('100m dash');
    athlete.addEvent('long jump');
    athlete.deleteEvent('long jump');
    expect(athlete.events).toEqual(['100m dash']);
  });

  test('deleteEvent method should not delete an event if it is not in the events array', () => {
    athlete.addEvent('100m dash');
    athlete.deleteEvent('long jump');
    expect(athlete.events).toEqual(['100m dash']);
  });
});
