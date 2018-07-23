import React, {Component} from 'react';
import Moment from 'react-moment';



class Repo extends Component{
	
	render(){
		return(
			<a href={this.props.repo.html_url} className="list-group-item list-group-item-action flex-column align-items-start">
				<div className="d-flex w-100 justify-content-between">
			      <h5 className="mb-1">{this.props.repo.name}</h5>
			      <small className="text-muted"><Moment fromNow>{this.props.repo.created_at}</Moment></small>
			    </div>
			    <p className="mb-1">{this.props.repo.description}</p>
			    <small className="text-muted">Language Used: {this.props.repo.language}</small>
			</a>
			)
	}
}


export default Repo