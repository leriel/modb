var React = require('react');
var Router = require('react-router'); 
var Link = Router.Link;
var Panel = require('react-bootstrap').Panel;

var Todos = React.createClass({
  getInitialState: function(){
    return {
      showTodoDesc: false,
      activeTodos:{}
    }
  },
  toggleTodoDesc: function() {
    this.setState({
      showTodoDesc: !this.state.showTodoDesc,
    });
  },
  clickTodo: function(idx, e) {
    e.preventDefault();
    var active = this.state.activeTodos;
    if (!active[idx]) {
      active[idx] = true;
    } else {
      active[idx] = !active[idx];
    }
    this.setState({activeTodos:active})
    e.target.blur()
  },
  render: function(){

    var todos = [
      {
        cat: 'Items',
        title: 'Items',
        desc: 'Search and filter all items in MO RPG.',
        done: true
      },
      {
        cat: 'Items',
        title: 'Sub-Categories',
        desc: 'For almost every category of items, new sub-categories have been added',
        done: true
      },
      {
        cat: 'Items',
        title: 'Vendors & drops',
        desc: 'View vendors to buy/sell items from, and mobs that drop them.',
        done: true
      },
      {
        cat: 'Items',
        title: 'Item Crafting',
        desc: 'View crafting recipe for items, including pattern for forged items. Also view see any items the item is a material for.',
        done: true
      },
      {
        cat: 'Items',
        title: 'Item Enchanting',
        desc: 'View enchanting info for all items, including the full enchant chain for items like the <a href="#/items/1327">Boar Spear</a>.',
        done: true
      },
      {
        cat: 'Items',
        title: 'List View',
        desc: 'Let users switch between grid & list view on output.',
        done: true
      },
      {
        cat: 'Items',
        title: 'Maps & Coordinates',
        desc: 'Add map locations and coordinates for vendors, and map locations for mobs.',
        done: true
      },
      {
        cat:'Pets',
        title:'Pets',
        desc: 'Search, filter and view all pets in the MO RPG world.',
      },
      {
        cat: 'Pets',
        title: 'Parent Pets',
        desc: 'For Parent Pets, view info about breeding including foods they eat, other pets they breed with and their offspring.',
      },
      {
        cat: 'Pets',
        title: 'Offspring',
        desc: 'For offspring, view what set of parents breeds them.',
      },
      {
        cat: 'Pets',
        title: 'Leveled Pets',
        desc: 'For pets that grow/evolve into parent pets, view the breeding info about those steps.',
      },
      {
        cat:'Mobs',
        title:'Mobs',
        desc: 'Filter and view all mobs in the MO RPG world.',
        done: true
      },
      {
        cat: 'Mobs',
        title: 'Mob Drops',
        desc: 'View all items a mob drops.',
        done: true
      },
      {
        cat: 'Mobs',
        title: 'Mob/Vendor Maps',
        desc: 'Include links to high-res maps the monsters and vendors are on.'
      },
      {
        cat:'Vendors',
        title:'Vendors',
        desc: 'Filter and view all Vendors in the MO RPG world.',
        done: true
      },
      {
        cat:'General',
        title:'Search Mobs & Vendors',
        desc: 'Make the search box affect all 3 areas, not just items.',
        done: true
      },    
      {
        cat:'General',
        title:'Touch Support',
        desc: 'Added better touch support for mobile devices.',
        done: true
      },    
      {
        cat:'General',
        title:'Loading Indicators',
        desc: 'Add spinning icon to indicate pages are loading/rendering.',
        done: true
      },    
      {
        cat:'General',
        title:'Moar Mobile Friendly',
        desc: 'Off-canvas navigation and other mobile friendly features added.',
        done: true
      },    
      {
        cat:'General',
        title:'Better bookmark support',
        desc: 'Provide better support bookmarking & sending links. (eg, having URL update as filters are changed.)'
          
      },    
    ];
    var _self = this;

    return (
    <div>
      <article className="context">
        <h2>Todo List</h2>
        <small><a href="#" onClick={this.toggleTodoDesc} className="btn btn-primary btn-xs">Toggle Todo Descriptions</a></small>
        <ul>
          {todos.map(function(todo,i){
            var cl = '';
            var title = todo.title;
            if (todo.done) {
              title += ' (done)';
              cl = 'done text-success'
            } else {
              cl = 'text-warning'
            }
            var desc = _self.state.showTodoDesc || _self.state.activeTodos[i] ? (<div className="text-muted" dangerouslySetInnerHTML={{__html:todo.desc}} />) : '';
            return (
              <li className={cl} key={"todo"+i}>
                <strong><a className={cl} href="#" onClick={_self.clickTodo.bind(_self,i)}>{title}</a></strong>
                {desc}
              </li>
            )
          })}
        </ul>
      </article>
    </div>
    );
  }
});

module.exports = Todos;
