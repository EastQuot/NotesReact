export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const DELETE = 'DELETE';


export class Actions {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  Add(title, note) {
    this.dispatch({
      type: ADD,
      id: Date.now(),
      title: title,
      note
    })
  }

  Delete(id) {
    this.dispatch({
      type: DELETE,
      id
    })
  }

  Edit(id, title, note) {
    this.dispatch({
      type: EDIT,
      id,
      title,
      note
    })
  }

}

export function Add(title, note) {
  return {
    type: ADD,
    id: Date.now(),
    title: title,
    note
  }
}

export function Delete(id) {
  return {
    type: DELETE,
    id
  }
}

export function Edit(id, title, note) {
  return {
    type: EDIT,
    id,
    title,
    note
  }
}

export default { Delete, Edit, Add }