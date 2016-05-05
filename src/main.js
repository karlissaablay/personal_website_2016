// var React = require('react');
// import React from 'react';
// import classnames from 'classnames';

// Animation Content
var animation = {
		intro_header: "The Cardboard Rocket",
		intro_paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque tincidunt sapien pulvinar condimentum. Nulla facilisi. Pellentesque eu feugiat risus. Nullam egestas mollis ex in posuere. In bibendum arcu eu dolor semper, ut auctor dui scelerisque. Aliquam massa magna, eleifend ut sollicitudin vel, rhoncus a nisi.",
		content_heading: "Heading",
		content_paragraph: "Vivamus faucibus, lorem ac dictum molestie, dui lectus auctor metus, sed vehicula arcu arcu et dolor. Pellentesque ultricies sit amet erat nec dictum. Nunc mattis velit at lectus porttitor vestibulum. Aliquam eu tincidunt ante. Nullam et mi ultrices, rhoncus sapien eu, pellentesque odio."
	}

class Project extends React.Component{

	render(){

		return (
			<View_Project />
		)
	}
}

// -------------------------------- //
// VIEW PROJECT
// SHOW PROJECT TYPE IN WORKS TAB
// -------------------------------- //
var View_Project = React.createClass({
	getInitialState: function(){
		return { 
			isActive: true,
			childActive: false
		}
	},
	_toggleChildActive: function(){
		this.setState( { childActive: !this.state.childActive } );
	},
	render: function() {
		return (

			<section id="animation" className={ this.state.isActive ? "project active" : "project"}>
				<h2>Animation</h2>
				<h1>Unleasing my<br/>inner animator.</h1>

				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt, augue at laoreet fringilla, velit est venenatis nulla, nec fermentum est enim vitae odio.</p>

				<div className="work_bottom clrfix">

					<div className="view_list right">
						<div className="button" data-work="animation">
							<a onClick={this._toggleChildActive}>View</a>
						</div>
					</div>

					<div class="tools_list left">
						<ul>
							<li>Software Name</li>
							<li>Hardware Name</li>
						</ul>
					</div>
				</div>

				<View_Work _toggleActive={this._toggleChildActive} isActive={this.state.childActive} section={animation} />
			</section>

		);
	}
});

// -------------------------------- //
// VIEW WORKS
// SHOW WORKS INSIDE A PROJECT
// -------------------------------- //
var View_Work = React.createClass({
	getInitialState: function(){
		return { isActive: this.props.isActive }
	},
	componentWillReceiveProps: function(nextProps) {
	  this.setState({ isActive: this.props.isActive });
	},
	render: function() {


		return (
			<div className={ this.state.isActive ? "view_work active" : "view_work"} data-view-work="animation">
				<div className='sliding_bottom view_work_close'>
					<a onClick={this.props._toggleActive.bind(this)}>close</a>
				</div>

				<Intro intro_header={this.props.section.intro_header} intro_paragraph={this.props.section.intro_paragraph} />

				<Content content_heading={this.props.section.content_heading} content_paragraph={this.props.section.content_paragraph} />
			</div>
		);
	}
});

var Intro = React.createClass({
	render: function() {
		return (
			<div className="intro">
				<h3>{this.props.intro_header}</h3>
				<p>{this.props.intro_paragraph}</p>
			</div>
		);
	}
});

var Content = React.createClass({
	render: function() {
		return (
			<div className="content">
				<h4>{this.props.content_heading}</h4>
				<p>{this.props.content_paragraph}</p>
			</div>
		);
	}
});



ReactDOM.render(
  <Project />,
  document.getElementById('work_container')
);