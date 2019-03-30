import stateNotes from '../storage/stateNotes'

export default function reducer() {
  let allNotes = stateNotes.allNotes, length = stateNotes.length;
  if (length < 5) return allNotes;

  let floorItem = stateNotes.floorItem;

    let array = [];
    for (let i = floorItem; i < length && i < floorItem + stateNotes.count; i++) {
      array.push(allNotes[i]);
    }
    return array
}
