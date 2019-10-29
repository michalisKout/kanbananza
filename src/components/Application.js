import React, { Component } from 'react';
import CreateList from './CreateList';
import Users from './Users';
import ListContainer from '../containers/ListsContainer';
// import defaultState from '../default-state.json';

class Application extends Component {
  render() {
    return (
      <main className="Application">
        <div><Users/></div>
        <section>
          <CreateList />
          <ListContainer />
        </section>
      </main>
    );
  }
}

export default Application;
