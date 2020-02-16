import React, {Component} from 'react'
import {connect} from 'react-redux'
import {incrementLikes} from '../actions/action.js'
import Comment from './comment.js'

class Single extends Component{
	constructor(){
		super();
		
	}

	render(){
		let id = this.props.match.params.id;
		
		return(
			<div className="single"> 

				<div id="comments">
					<p style={{fontSize:'20px',textDecoration:'underline'}}><b><i>Comments</i></b></p>
					<Comment data={{comment:this.props.data[id].comment, id:id}}/>
				</div>

				<div className="single-card">
					<img src={this.props.data[id].url} alt="no image" />

					<div className="caption">
						{this.props.data[id].caption}
					</div>
					
					<div className="like-comment">
						<button onClick={ () => this.props.incrementLike(this.props.data[id].id)} > &hearts; {this.props.data[id].like} </button>
						<button> &#9993; {this.props.data[id].comment.length} </button>
					</div>
				</div>

				
			</div>
		);
	}
}

const mapStateToProps = (state,props) =>{
	return {
		data:state
	}
}
const mapActionsToProps = {
	incrementLike : incrementLikes
}


export default connect(mapStateToProps,mapActionsToProps)(Single)