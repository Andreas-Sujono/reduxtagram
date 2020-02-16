import React from 'react'
import {connect} from 'react-redux'
import {addComments, deleteComments} from '../actions/action.js'

class Comment extends React.Component{
	constructor(){
		super()
		this.state = {
			comment: '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.myRef = React.createRef()
	}
	componentDidMount(){
		console.log(this.myRef);
	}

	handleChange(event){
		this.setState(
			{
				comment: event.target.value
			}
		)
	}
	handleClick(index){
		console.log(`id: ${this.props.data.id} clicked index ${index}`)
		this.props.deleteComment(this.props.data.id,index)
	}
	handleSubmit(event){
		event.preventDefault()
		console.log('you submitted')
		this.props.addComment(this.props.data.id, this.state.comment)
		this.setState(
			{
				comment:''
			}
		)
	}

	render(){
		return(
			<div className="comment">
				{
					this.props.data.comment.map(
						item => {
							return(
								<div key={this.props.data.comment.indexOf(item)} id={this.props.data.comment.indexOf(item)}>
									<div> {item} <span onClick={()=> this.handleClick(this.props.data.comment.indexOf(item))} className='close'>&times;</span></div>
								<hr/>
								</div>
							)}
					)
				}
				<form onSubmit={this.handleSubmit}>
					<input autoFocus={true} ref={this.myRef} name="comment" type="text" placeholder="comment" value={this.state.comment} onChange={this.handleChange} />
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state,props) =>{
	return {}
}
const mapActionToProps = {
	addComment : addComments,
	deleteComment: deleteComments
}

export default connect(mapStateToProps,mapActionToProps)(Comment)





