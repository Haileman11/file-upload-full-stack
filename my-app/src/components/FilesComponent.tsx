import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Loader
} from 'semantic-ui-react'

import { deleteFile, getFiles } from '../api/files-api'
import { FileModel } from '../types/FileModel'


interface FilesState {
  files: FileModel[]
  loading: boolean
}

export class Files extends React.PureComponent<FilesState> {
  state: FilesState = {
    files: [],    
    loading: true
  }

  onAddButtonClick = () => {
  }


  onFileDelete = async (id: string) => {
    try {
      await deleteFile(id)
      this.setState({
        files: this.state.files.filter(file => file.id !== id)
      })
    } catch {
      alert('File deletion failed')
    }
  }

  

  async componentDidMount() {
    try {
      const files = await getFiles()
      console.log(files);
      this.setState({
        files,
        loading: false
      })
    } catch (e) {
      alert(`Failed to fetch : ${(e as Error).message}`)
    }
  }

  render() {
    return (
      <div>
        <Header as="h1">Files</Header>

        {this.renderCreateFileInput()}

        {this.renderFiles()}
      </div>
    )
  }

  renderCreateFileInput() {
    return (
      <Grid.Row>
        <Grid.Column width={16}>
          <Link            
            to={'files/add'}>
            <Icon name="add" />
          </Link>
        </Grid.Column>
        <Grid.Column width={16}>
          <Divider />
        </Grid.Column>
      </Grid.Row>
    )
  }

  renderFiles() {
    if (this.state.loading) {
      return this.renderLoading()
    }

    return this.renderFilesList()
  }

  renderLoading() {
    return (
      <Grid.Row>
        <Loader indeterminate active inline="centered">
          Loading Files
        </Loader>
      </Grid.Row>
    )
  }

  renderFilesList() {
    return (
      <Grid padded>
        {this.state.files.map((file, pos) => {
          return (
            <Grid.Row key={file.id}>
              
              <Grid.Column width={10} verticalAlign="middle">
                {file.filename}
              </Grid.Column>
              <Grid.Column width={3} floated="right">
                {file.filesize}
              </Grid.Column>
              <Grid.Column width={3} floated="right">
                {file.createdAt}
              </Grid.Column>
              <Grid.Column width={1} floated="right">
                <Button
                  icon
                  color="red"
                  onClick={() => this.onFileDelete(file.id)}
                >
                  <Icon name="delete" />
                </Button>
              </Grid.Column>
              
              <Grid.Column width={16}>
                <Divider />
              </Grid.Column>
            </Grid.Row>
          )
        })}
      </Grid>
    )
  }  
}
