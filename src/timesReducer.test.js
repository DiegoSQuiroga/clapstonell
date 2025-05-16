import { initializeTimes, updateTimes } from './Components/Calendar';

test('initializeTimes returns correct initial times', () => {
    const expectedTimes = ["19:00", "20:00", "21:00", "22:00"];
    expect(initializeTimes()).toEqual(expectedTimes);
});

test('updateTimes returns the same value provided in state', () => {
    const state = ["19:00", "20:00"];
    const action = { type: "REMOVE_TIME" };
    expect(updateTimes(state, action)).toEqual(state);
});