import React from 'react';

import { Actions } from '../actions'
import Note from './Note.jsx'; 
import { DependencyHOC }from '../DependencyHOC';

class ListNotes extends React.Component {

   render() {
     const { pagNotes, Delete, Edit } = this.props;

    return (
      <ul className="list">
        {pagNotes.map(item =>
          <Note
            key={item.id}
            id={item.id}
            title={item.title}
            note={item.note}
            onDelete={Delete}
            onEdit={Edit}
          />)
        }
      </ul>)
  }
}

 const mapStateToProps = (state) => {
  return {
    pagNotes: state.pagNotes
  };
}

export default DependencyHOC(ListNotes, {
  mapStateToProps,
  Actions
} );