const initialState = {
  showInsertRow: false
}

export default function popups(state = initialState, action){
  switch (action.type) {
    case 'SHOW_INSERT_ROW':
      return {...state, showInsertRow: true}
    case 'HIDE_INSERT_ROW':
      return {...state, showInsertRow: false}
    default:
      return state;
  }
}
