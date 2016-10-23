var React = require('react');

var DebugParams = React.createClass({

  render: function(){
    var params = this.props.params;
    var kk = Object.keys(params);
    var paramRows = kk.map(function(k){
      var v = params[k];
      if (typeof v !='object') {
        return (
          <tr key={k}><th>{k}</th><td>{v}</td></tr>
        );
      }
    });
    return (
      <table className="table">
        <tbody>
          {paramRows}
        </tbody>
      </table>
    )
  }
});

module.exports = DebugParams;
