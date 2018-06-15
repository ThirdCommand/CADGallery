import React from 'react';
import { withRouter, Link } from 'react-router-dom';

export default class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  // componentWillReceiveProps() {
  //   if (typeof this.state.pictures === null){
  //     this.state.picures
  //   }
  // }

  componentDidMount() {
    this.props.clearErrors();
    this.props.fetchProjects();
  }

  // projectOwnerName() {
  //   return (
  //     <div className='project-owner-text'>{this.props.projectOwner.first_name} {this.props.projectOwner.last_name}</div>
  //   )
  // }

  // showPicture() {
  //   return (
  //     <img className='show-picture' src={`${this.props.pictures[this.state.showPictureIndex].img_url}`} />
  //   )
  // }


  handleSubmit(e) {
    e.preventDefault;

    
    this.props.history.push(`/projects/new`)

  }




  // thumbSelect(e) {
  //   e.preventDefault;
  //   this.setState({
  //     showPictureIndex: i
  //   })
  // }

  render() {
    //user the picture index to show  
    return (
      <div className='home-page'>
        <div className='splash-zone'>
          <div className='splash-background' >
            <div className='homepage-title-text-container'>
              <div className='homepage-title-text'>Inspire and be inspired</div>
              <div className='homepage-title-subtext'> Inspire with your story and let other designers, engineers, and inventors spark your creativity.</div>
            </div>
          </div>
        </div>
        <div className='projects-title-div'>
          <h1 className="main-headers">Projects</h1>
        </div>
        <div className='projects-index-container'>
          {this.props.projects.map((project) => {
            return (
              <div className='project-cover-container'>
                <Link className='project-cover-container' to={`/projects/${project.id}`}><img className='project-cover-picture' src={`${project.imageUrl}`} alt=""/></Link>
              </div>
            )
          })}
        </div>

        <div className='footer-create-button-container'>
          <button className="create-project-button" onClick={this.handleSubmit.bind(this)}>CREATE YOUR PROJECT</button>
        </div>
        <div className='footer-bar'> 
          <div className='fix-logo-position'>
            <Link to="/" className="nav-logo-link">
              <div className="nav-logo"></div>
              <div className="nav-logo-text">CADGallery</div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}