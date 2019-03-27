import { default as NoteReducer } from './allNotesR.js';
import { default as createPageR } from './createPageR';
import { default as PagNoteReducer } from './pagNotesR';
import { default as CurrentPageReducer } from './currentPageR';

function reducer(state = {}, action) {
  return {
    currentPage: CurrentPageReducer(state.currentPage, action),
    allNotes: NoteReducer(state.allNotes, action),
    pagNotes: PagNoteReducer(state.allNotes),
    allPage: createPageR()
  }
}

export default reducer;