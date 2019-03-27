import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

class Pagination extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.store = this.context.store

    this.handlePage = () => {
      let target = event.target;
      this.store.dispatch({ type: 'SETPAGE', page: target.innerHTML })
    }

  }
  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  render() {
    return (
      <div className="pagination">
        {this.store.getState().allPage.map(n =>
          <li key={n}
            onClick={this.handlePage}
            className={this.store.getState().currentPage == n ? 'active' : ''}
          >
            {n}
          </li>)
        }
      </div>
    )
  }
}

Pagination.contextTypes = {
  store: PropTypes.object
}


export default Pagination;