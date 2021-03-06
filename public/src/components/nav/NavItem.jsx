var React = require('react');

var NavItem = React.createClass({
  getInitialState: function () {
    return {hover: false};
  },
  mouseOver: function(e) {
    this.setState({hover: true});
  },
  mouseOut: function(e) {
    this.setState({hover: false});
  },
  render : function (){
    return(
      <li className={this.state.hover ? "active" : ""} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <a href={this.props.href} style={this.props.passStyle} >{this.props.title}</a>
      </li>
    );
  }
});

module.exports = NavItem;
