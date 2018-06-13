import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
// const CLOUDINARY_UPLOAD_URL = "cloudinary://696543129926915:wtdhnZTtjn5E7m2v91ysuIpxWts@secondcommand"
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/secondcommand/upload';
const CLOUDINARY_UPLOAD_PRESET = 'secondcommand_preset'; 
export default class ContactForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      uploadedFileCloudinaryUrl: ''
    };
  }
//
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
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  render() {
    return(
      <div>
        <div className="FileUpload">
          <Dropzone
            className='dropzone'
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p className='file-upload-instructions'>Drop an image here or click to find.</p>
          </Dropzone>
        </div>

        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
            <div className='preview-pic-container'>
              <img className='preview-pic' src={this.state.uploadedFileCloudinaryUrl} />
              <p>{this.state.uploadedFile.name}</p>
            </div>}
        </div>
      </div>
    )
  }
}