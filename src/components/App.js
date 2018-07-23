import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import $ from 'jquery'
import '../css/bootstrap.css';
import '../css/style.css';
import Profile from './github/Profile';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			username:'deepsdeo90',
			userData:[],
			userRepos:[],
			perPage:10
		}
	}
	getUserData(){
		$.ajax({
		  url: "https://api.github.com/users/"+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
		  dataType: 'json',
		  cache: false,
		  success: function(data) {
		    //console.log(data);
		    this.setState({
		    	userData:data
		    });
		  }.bind(this),
		  error: function(xhr,status,err){
		  	alert(err);
		  	this.setState({
		  		username:''
		  	})
		  }.bind(this)
		});
	}
	getUserRepos(){
		$.ajax({
		  url: "https://api.github.com/users/"+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
		  dataType: 'json',
		  cache: false,
		  success: function(data) {
		    console.log(data);
		    this.setState({
		    	userRepos:data
		    });
		  }.bind(this),
		  error: function(xhr,status,err){
		  	alert(err);
		  	this.setState({
		  		username:''
		  	})
		  }.bind(this)
		});
	}
	componentDidMount(){
		this.getUserData();
		this.getUserRepos();
	}
	render(){
		return(
				<Profile {...this.state} />
			)
	}
}

App.propTypes = {
	clientId: PropTypes.string,	
	clientSecret: PropTypes.string,

};
App.defaultProps = {
	clientId: '4f64a10050d816424f59',	
	clientSecret:'c85694b643c2d2d4acfba70f315d03ae78a7ae0e',

}
export default App