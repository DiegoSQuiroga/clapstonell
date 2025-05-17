import { initializeTimes, updateTimes } from './Components/Calendar';

describe('initializeTimes', () => {
  it('should return an empty array initially', () => {
    const result = initializeTimes();
    expect(result).toEqual([]);
  });
});

describe('updateTimes', () => {
  it('should set times with SET_TIMES action', () => {
    const initialState = [];
    const mockTimes = ['17:00', '18:00', '19:00'];

    const newState = updateTimes(initialState, {
      type: 'SET_TIMES',
      payload: mockTimes
    });

    expect(newState).toEqual(mockTimes);
  });

  it('should remove time with REMOVE_TIME action', () => {
    const initialState = ['17:00', '18:00', '19:00'];
    const timeToRemove = '18:00';
    
    const newState = updateTimes(initialState, {
      type: 'REMOVE_TIME',
      payload: timeToRemove
    });
    
    expect(newState).toEqual(['17:00', '19:00']);
  });

  it('should return current state for unknown action', () => {
    const initialState = ['17:00', '18:00'];
    
    const newState = updateTimes(initialState, {
      type: 'UNKNOWN_ACTION'
    });
    
    expect(newState).toEqual(initialState);
  });
});