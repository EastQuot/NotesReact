import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import Note from './Note.jsx';
import Header from './Header.jsx';
import Pagination from '../Pagination.js'

import { Delete, Edit } from '../actions'


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.store = this.context.store;
        this.state = {
            arrayNotes: this.store.getState(),
            arrayPagination: [],
            currentPage: 1
        }


        this.handleEdit = (id, title, note) => {
            this.store.dispatch(Edit(id, title, note))
            Pagination.call(this)
        }
        
        
        this.handleDelete = (id) => {
            this.store.dispatch(Delete(id))
            Pagination.call(this)
            console.log(this.store.getState())
        }

        this.HandlePage = () => {
            let target = event.target;
            localStorage.setItem('page', target.innerHTML);
            Pagination.call(this)
        };

    }

    componentDidMount() {
        Pagination.call(this)
    }

    render() {
        return (
            <main>
                <Header title={this.props.title} />

                <ul className="list">
                    {this.state.arrayNotes.map(item =>
                        <Note
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            note={item.note}
                            onDelete={this.handleDelete}
                            onEdit={this.handleEdit}
                        />)
                    }
                </ul>

                <div className="pagination">
                    {this.state.arrayPagination.map(n =>
                        <li key={n}
                            onClick={this.HandlePage}
                            className={this.state.currentPage == n ? 'active' : ''}
                        >
                            {n}
                        </li>)
                    }
                </div>

            </main>
        )
    }
}


App.contextTypes = {
    store: PropTypes.object
}


App.defaultProps = {
    title: 'Notes React'
};

export default App;



