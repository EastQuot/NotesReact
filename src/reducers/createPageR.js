import stateNotes from '../storage/stateNotes';

export default function reducer() {
  let arrayAllPage = [];
  for (let i = 1; i <= stateNotes.allPage; i++) arrayAllPage.push(i);

  return arrayAllPage;
  
}

