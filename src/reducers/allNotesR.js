import { ADD, DELETE, EDIT } from '../actions';

import storage from '../storage';

export default function reducer(state = [], action) {
  let arrayNotes;
  let type = action.type;
  
  if (type == ADD) {
    let item = {
      id: action.id,
      title: action.title,
      note: action.note
    };
    storage.write(item);

    return [...state, item];
  }

  if (type == DELETE) {
    // arrayNotes = state.filter(item => item.id !== action.id);
    let index = state.findIndex(item => item.id == action.id);
    arrayNotes = state.slice(0, index).concat(state.slice(index + 1))
    storage.write(arrayNotes)
    return arrayNotes;
  }


  if (type == EDIT) {
    arrayNotes = state.map(item => {
      if (item.id !== action.id) {
        return item
      }
      return Object.assign({}, item, {
        title: action.title,
        note: action.note
      })
    });
    storage.write(arrayNotes)

    return arrayNotes;
  }

  return state

}
