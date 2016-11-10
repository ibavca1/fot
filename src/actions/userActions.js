export function userExit(){
  return {
    type: 'USER_EXIT',
    payload: null
  }
}
export function userLogin(name, passwd){
  return {
    type: 'USER_LOGIN',
    payload: {name, passwd}
  }
}
