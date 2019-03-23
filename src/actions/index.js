export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const DELETE = 'DELETE';


export function Add(title, note) {
  return {
    type: ADD,
    id: Date.now(),
    title: title,
    note
  }
}

export function Delete (id) {
  return {
    type: DELETE,
    id
  }
}

export function Edit (id, title, note) {
  return {
    type: EDIT,
    id,
    title,
    note
  }
}