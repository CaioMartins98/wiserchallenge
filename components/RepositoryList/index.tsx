import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import * as RepositoriesAction from '../../store/ducks/repositories/actions';

interface StateProps {
  repositories: Repository[]
}

interface DispatchProps{
loadRequest(): void;

}


type Props = StateProps & DispatchProps;

 class RepositoryList extends Component<Props>{
  componentDidMount(){

    const { loadRequest } = this.props;
  }

  render(){

    const { repositories } = this.props;
    return(
      <ul>
        {repositories.map(repository => <li>{repository.login}</li>)}
      </ul>
    );
  }
}

const mapStateToProps = (state : ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => 
bindActionCreators(RepositoriesAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);