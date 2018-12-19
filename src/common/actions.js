export const displayApplicationMsg = (msgType,msg) => (dispatch) => {    
  dispatch(setApplicationMsg(msgType,msg))
  setTimeout(() => {dispatch(clearApplicationMsg())},10000)
}

export const setApplicationMsg = (msgType,msg) => ({
  type: SET_APPLICATION_MSG,
  msgType,
  msg
})

export const clearApplicationMsg = () => ({
  type: CLEAR_APPLICATION_MSG,  
})