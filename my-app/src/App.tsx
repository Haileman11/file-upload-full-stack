import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import { CreateFile } from './components/CreateFile'

import { Files } from './components/FilesComponent'

export interface AppState {}
enum UploadState {
  NoUpload,
  FetchingPresignedUrl,
  UploadingFile,
}
export default class App extends Component< AppState> {  

  render() {
    return (
      <div>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={16}>
                <BrowserRouter >
                  {this.generateMenu()}

                  {this.generateCurrentPage()}
                </BrowserRouter>
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
      <Routes>
        <Route
          path="/"          
          element={<Files loading={false} files={[]}/>
          }
        />
        <Route
          path="/files/add"
          element={<CreateFile file={undefined} uploadState={UploadState.NoUpload} />
          }
        />
      </Routes>
    )
  }
}
