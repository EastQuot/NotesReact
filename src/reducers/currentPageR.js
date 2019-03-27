export default function(_, action){
  if (action.type === "SETPAGE") localStorage.setItem('page', action.page)
  return localStorage.getItem('page')
}