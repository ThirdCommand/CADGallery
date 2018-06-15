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
      <div>
        <div className='splash-zone'>
          <div className='splash-background' ></div>
        </div>
        {this.props.projects.map((project) => {
          return (
            <img src={`${project.imageUrl}`} alt=""/>
          )
        })}
        <div className='footer-create-button-container'>
          <button className="create-project-button" onClick={this.handleSubmit.bind(this)}>Publish</button>

        </div>
      </div>
    )
  }
}