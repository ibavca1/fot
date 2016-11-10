const initialState = {
    name: 'bavc',
    passwd: '',
    age: 39
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case 'USER_EXIT':
            console.log(state);
            return action.payload;
        case 'USER_LOGIN':
            return action.payload
        default:
            return state;
    }
}
