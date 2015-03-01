var React = require('react');

var Sample = React.createClass({
  render: function() {
    return <div onClick={this.click} onMove={this.move} onClose={this.close} onOpen={this.open}>
             <div>some</div>
             <p> some text </p>
           </div>;
  }
});

modules.exports = Sample;