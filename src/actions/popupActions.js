export function showPopup(){
  return {
    type:'SHOW_INSERT_ROW',
    payload: true
  }
}
export function hidePopup(){
  return {
    type: 'HIDE_INSERT_ROW',
    payload: false
  }
}

// function getPopupById(id){
//   return {showInsertRow:true}
// }
