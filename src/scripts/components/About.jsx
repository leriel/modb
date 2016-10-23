var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;

var About = React.createClass({
  render: function(){
    return (
    <div>
      <header>
        <h1>modb</h1>
      </header>
      <article className="context">
        <h2>About modb</h2>
        <p>
          modb is an app that lets you quickly search data from <a 
          href="http://mo.ee">RPG MO</a>. The app is currently under
          development, but feel free to take it for a spin. Let me know
          what you think in the forums.
        </p>
        <p>-bobdylan</p>
      </article>
    </div>
    );
  }
});

module.exports = About;

