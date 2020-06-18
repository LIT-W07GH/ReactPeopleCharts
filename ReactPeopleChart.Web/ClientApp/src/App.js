import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './Pages/Home';
import AddSinglePerson from './Pages/AddSinglePerson';
import AddRandomPeople from './Pages/AddRandomPeople';
import ShowPeopleCount from './Pages/ShowPeopleCount';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/add-single-person' component={AddSinglePerson} />
        <Route exact path='/add-random-people' component={AddRandomPeople} />
        <Route exact path='/show-people-count' component={ShowPeopleCount} />
      </Layout>
    );
  }
}
