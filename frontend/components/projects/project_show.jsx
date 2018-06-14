import React from 'react';
import {withRouter} from 'react-router-dom';
export default class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: props.projectId,
      project: props.project,
      pictures: props.pictures
    }

  }
  // componentWillReceiveProps() {
  //   if (typeof this.state.pictures === null){
  //     this.state.picures
  //   }
  // }
  componentDidMount() {
    
    this.props.clearErrors();
    this.props.fetchProject(this.props.projectId)
  }

  render() {
    

    
    if (this.props.pictures.join() === ""){
      
      return (
        <div>NO PROJECT</div>
      )
    }
    
    return(
      <div>
        <div className='title'>{this.props.project.title}</div>
        
        {this.props.project.description}
        {this.props.project.user_id}
        {this.props.pictures.map((picture) => (
          <img src={`${picture.img_url}`}/>  
        ))}

      </div>
    )
  }
}