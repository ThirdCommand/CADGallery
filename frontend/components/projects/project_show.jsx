import React from 'react';
import {withRouter, Link} from 'react-router-dom';

export default class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: props.projectId,
      project: props.project,
      pictures: props.pictures,
      showPictureIndex: 0
    }
  }
  // componentWillReceiveProps() {
  //   if (typeof this.state.pictures === null){
  //     this.state.picures
  //   }
  // }
  componentDidMount() {
    this.props.clearErrors();
    this.props.fetchProject(this.props.projectId);
  }

  projectOwnerName() {
    return (
      
      <div className='project-owner-text'>{this.props.projectOwner.first_name} {this.props.projectOwner.last_name}</div>
      
    )
  }

  showPicture() {
    return(
      <img className='show-picture' src={`${this.props.pictures[this.state.showPictureIndex].img_url}`} />
    )
  }

   

  thumbSelect(e) {
    e.preventDefault;
    this.setState({
      showPictureIndex: i
    })
  }

  render() {

    if (this.props.pictures.join() === ""){
      
      return (
        <div>NO PROJECT</div>
      )
    }
    
    //user the picture index to show  
    
    return(
      <div className='project-show-container'>
        
        <div className='project-show'>
          <div className='title-owner-container'>
            <div className='title-container'><div className='title-text'>{this.props.project.title}</div></div>
            <div className='project-owner-name'> {this.projectOwnerName()}</div>
          </div>
          <div className='picture-show-container'>
            {this.showPicture()}
          </div>
          <div className='thumbnail-container'>
            {this.props.pictures.map((picture, i) => {
              if (this.state.showPictureIndex === i)
                return(
                  <div className='selected-picture'>
                    <button onClick={(e) => { e.preventDefault; this.setState({ showPictureIndex: i }) }}>
                      <img key={picture.id} className='thumb-picture' src={`${picture.img_url}`} />
                    </button>
                    <div className='select-underline'></div>
                  </div>
                )
              else{
                return(
                  <button onClick={(e) => { e.preventDefault; this.setState({ showPictureIndex: i }) }}>
                    <img className='thumb-picture' src={`${picture.img_url}`} key={picture.id} />
                  </button>
                )
              }
            })}
          </div>
          <div className='description-container'>
            <h2 className='description-header'>Description</h2>
            <div className='decription-text'>{this.props.project.description}</div> 
          </div>
        </div>
        
      </div>
    )
  }
}