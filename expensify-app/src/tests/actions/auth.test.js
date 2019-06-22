import { login, logout } from '../../actions/auth';

test('should create the login action object', ()=>{
    const uid = "ndsadfa";
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should create the logout action object', ()=>{
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});
