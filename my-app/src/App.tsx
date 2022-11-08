import React, { Component } from 'react'
import { Link, Route, Router, Switch } from 'react-router-dom'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import { CreateFile } from './components/CreateFile'

import { Files } from './components/FilesComponent'

export interface AppProps {}

export interface AppProps {
  history: any
}

export interface AppState {}

export default class App extends Component<AppProps, AppState> {  

  render() {
    return (
      <div>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={16}>
                <Router history={this.props.history}>
                  {this.generateMenu()}

                  {this.generateCurrentPage()}
                </Router>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }

  generateMenu() {
    return (
      <Menu>
        <Menu.Item name="home">
          <Link to="/">Home</Link>
        </Menu.Item>
      </Menu>
    )
  }


  generateCurrentPage() {    

    return (
      <Switch>
        <Route
          path="/"
          exact
          render={props => {
            return <Files {...props} />
          }}
        />

        <Route
          path="/files/add"
          exact
          render={props => {
            return <CreateFile {...props}  />
          }}
        />

      </Switch>
    )
  }
}
