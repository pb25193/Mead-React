import authReducer from '../../reducers/auth';

test('should log in by setting uid', ()=>{
    const state = authReducer(undefined, { type: 'LOGIN', uid: 'abc123' });
    expect(state.uid).toBe('abc123');
});

test('should log out by setting uid', ()=>{
    const state = authReducer({ uid: 'abc123' }, { type: 'LOGOUT' });
    expect(state).toEqual({});
});
