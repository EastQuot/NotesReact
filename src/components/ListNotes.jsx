import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { Delete, Edit } from '../actions'

import Note from './Note.jsx';

class ListNotes extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.store = this.context.store;

    this.handleEdit = (id, title, note) => {
      this.store.dispatch(Edit(id, title, note))
      this.store.dispatch({ type: 'PAGINATION' })
    }


    this.handleDelete = (id) => {
      this.store.dispatch(Delete(id))
      this.store.dispatch({ type: 'PAGINATION' })
    }

  }
  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
  }
  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <ul className="list">
        {this.store.getState().pagNotes.map(item =>
          <Note
            key={item.id}
            id={item.id}
            title={item.title}
            note={item.note}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
          />)
        }
      </ul>)
  }

}

ListNotes.contextTypes = {
  store: PropTypes.object
}


export default ListNotes;