import { default as NoteReducer } from './allNotesR.js';
import { default as createPageReducer } from './createPageR';
import { default as PagNoteReducer } from './pagNotesR';
import { default as CurrentPageReducer } from './currentPageR';

function reducer(state = {}, action) {
  // console.log(state)
  const obj = {
    currentPage: CurrentPageReducer(state.currentPage, action),
    allNotes: NoteReducer(state.allNotes, action),
    pagNotes: PagNoteReducer(state.allNotes, action),
    allPage: createPageReducer()
  }
  // console.log(obj)
  return obj
}

export default reducer;