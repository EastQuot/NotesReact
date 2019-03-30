import React from 'react';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    allPage: state.allPage,
    currentPage: state.currentPage
  }
}
function mapDispatchToProps(dispatch) {
  return {
    handlePage(){ dispatch({ type: 'SETPAGE', page: event.target.innerHTML }) }
  }
}

class Pagination extends React.Component {
  render() {
    const {allPage, currentPage, handlePage } = this.props;
    return (
      <div className="pagination">
        {allPage.map(n =>
          <li key={n}
            onClick={handlePage}
            className={currentPage == n ? 'active' : ''}
          >
            {n}
          </li>)
        }
      </div>
    )
  }
}

const PagContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination);


export default PagContainer;