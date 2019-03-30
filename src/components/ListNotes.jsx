import React from 'react';
import { connect } from 'react-redux';

import { Delete, Edit } from '../actions'
import Note from './Note.jsx';

function mapStateToProps(state) {
  return {
    pagNotes: state.pagNotes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleDelete: (id) => dispatch(Delete(id)),
    handleEdit: (id, title, note) => dispatch(Edit(id, title, note))
  }
}


class ListNotes extends React.Component {
   render() {
     const { pagNotes, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list">
        {pagNotes.map(item =>
          <Note
            key={item.id}
            id={item.id}
            title={item.title}
            note={item.note}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />)
        }
      </ul>)
  }
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(ListNotes)


export default ListContainer;