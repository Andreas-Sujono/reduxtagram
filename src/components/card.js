import React, {Component}from 'react'
import {incrementLikes} from '../actions/action.js'
import {connect} from 'react-redux'
import {NavLink,Link} from 'react-router-dom'

class Card extends Component{
	constructor(){
		super();
		this.state = {
			classList : '',
			display:'none'
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(id){
		this.props.incrementLike(id)
		this.setState(
			{
				classList: 'like-animation',
				display:'block'
			}
		);
		setTimeout(
			function() {
				this.setState({
					classList : '',
					display:'none'
				})
			}.bind(this)
			,1000
		)
	}

	render(){
		return(
			<div className="card">
				<Link to={`/photo/${this.props.id}`}>
					<img src={this.props.url} alt="no image" />
				</Link>
				<div style={{display:this.state.display}}className={this.state.classList}>
						&hearts;
				</div>

				<div className="caption">
					{this.props.caption}
				</div>

				<div className="like-comment">
					<button onClick={ () => this.handleClick(this.props.id)} > &hearts; {this.props.like} </button>
					<button> <Link to={`/photo/${this.props.id}`}>&#9993; {this.props.comment.length}</Link></button> 
				</div>

			</div>
		)
	}
}

const mapStateToProps = () =>{
	return {}
}

const mapActionsToProps = {
	incrementLike : incrementLikes
}

export default connect(mapStateToProps,mapActionsToProps)(Card)