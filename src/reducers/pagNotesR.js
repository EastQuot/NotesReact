import stateNotes from '../storage/stateNotes'

export default function reducer(state) {
    if (state.length < 5) {
      return state;
    } else {

      let floorItem = stateNotes.floorItem;


      let array = [];
      for (let i = floorItem; i < state.length && i < floorItem + stateNotes.count; i++) {
        array.push(state[i]);
      }
      return array
  }
}
