import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {logoImg} from '../logo';

import Dropzone from 'react-dropzone';
import request from 'superagent';
import ContactForm from '../../image/image_upload';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/secondcommand/upload';
const CLOUDINARY_UPLOAD_PRESET = 'secondcommand_preset'; 

// CLOUDINARY_URL = 'cloudinary://696543129926915:wtdhnZTtjn5E7m2v91ysuIpxWts@secondcommand'

class ProjectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      user_id: props.currentUser.id,
      uploadedFileUrls: [],
      uploadedFiles: [],
      submitted: false,
    }
    

    this.handleImageUpload.bind(this);
    this.onImageDrop.bind(this);
    const showAssets = false;

  }

  componentDidMount() {
    this.props.clearErrors();
  }


  componentWillReceiveProps() {
    
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault;

    let { title, description, user_id } = this.state
    let project = {title, description, user_id}
    let pictures = this.state.uploadedFileUrls

    let rawProject = {project, pictures}
    this.props.createProject(rawProject)
    this.props.history.push(`/`)
    // this.state.submitted = true
  }

  displayErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
        //add err to the errors for render
      }
      if (response.body.secure_url !== '') {
        let newArray = this.state.uploadedFileUrls

        newArray.push(response.body.secure_url)

        this.setState({
          uploadedFileUrls: newArray
        })

      }
    });
  }

  onImageDrop(files) {
    // let newArray = this.state.uploadedFiles
    // newArray.push(files[0])
    // this.setState({
    //   uploadedFiles: newArray
    // })
    this.handleImageUpload(files[0]);
  }

  previewPics() {
    return (
      this.state.uploadedFileUrls.map((uploadedFileUrl, i) => (
        <div className='preview-pic-container' key={i}>
          <img className='preview-pic' src={this.state.uploadedFileUrls[i]} />
          {/* <p className='preview-pic-name'>{this.state.uploadedFiles[i].name}</p> */}
        </div>
      ))
    )
  }

  UploadComponent() {

    return (
      <div className='assets-container'>
        <div className='upload-box-container'>
          <div className='input-type-container'><label className='input-field-label'>Project assets </label></div>
          <div className='image-upload-container'>
            <div className="FileUpload">
              <Dropzone
                className='dropzone'
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                <p className='file-upload-instructions'>Drop an image here or click to find.</p>
              </Dropzone>
            </div>
          </div>
        </div>
        <div className='preview-pictures-container'>
          {this.state.uploadedFileUrls[0] ? this.previewPics() : null}
        </div>
      </div>
    )
  }


  render() {
    //background color should be 238/238/238
    return (
      <div className="container">
        <div className='project-form-container'>
          <h2 className='form-title'> Create new project</h2> 
          <div className='project-title-form-container'>
            <div className='title-field-label'><label className='input-label' >Project title </label></div>
            <input className='project-title-text-input' type="text" onChange={this.update('title')}/>
          </div>

          {this.UploadComponent()}
          
          <div className='project-description-container'>
            <div><label className='input-field-label'>Project description </label></div>
            <textarea className='description-input-field' name="" id="" cols="30" rows="10" onChange={this.update('description')}></textarea>
          </div>
          <div className='form-buttons'>
            <button className="publish-button" onClick={this.handleSubmit.bind(this)}>Publish</button>
            <button className='cancel-button'>Cancel</button>
          </div>
        </div>
      </div>
    );
  }


}

export default withRouter(ProjectForm);

//{/* <button className='upload-assets-button' onClick={this.showAssetUploader}>Upload assets</button> */ }