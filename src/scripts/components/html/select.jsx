var React = require('react');

var HtmlSelect = React.createClass({

  render: function() {
    var opts = this.props.options;
    if (!(opts instanceof Array)) {
      var oo = opts;
      opts = [];
      var kk = Object.keys(oo);
      for (var i=0,maxI=kk.length;i<maxI;i++) {
        opts[kk[i]] = oo[kk[i]];
      }
    }
    return(
      <select ref={this.props.ref} onChange={this.props.onChange} 
        value={this.props.defaultValue} className="form-control">
        <option key="nullValue" value='-1'></option>
        {opts.map(function(v,k){
          return (
            <option key={k} value={k}>{v}</option>
          );
        })}
      </select>
    )
  }
});

module.exports = HtmlSelect;