import { connect } from 'react-redux';

export function DependencyHOC(Component, opts) {
  const { mapStateToProps, Actions } = opts;

  const mapDispatchToProps = (dispatch) => {
    const actions = new Actions(dispatch);
    return {
      Delete: (id) =>  actions.Delete(id),
      Edit: (id, title, note) => actions.Edit(id, title, note),
    }
  }

  return  connect(mapStateToProps, mapDispatchToProps)(Component)
}