var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;

var NotFound = React.createClass({
  render: function(){
    return (
    <div>
      <header>
        <h1>File not Found</h1>
      </header>
      <article className="context">
        <p>
          The page you are looking for could not be found.
        </p>
        <Link to="home">Home</Link>
      </article>
    </div>
    );
  }
});

module.exports = NotFound;

