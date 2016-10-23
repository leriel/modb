searchObjBase42 = function(skill) {
  var r = object_base[42].params.results
    , maxI = r.length;

  for (var i=0; i<maxI;i++) {
    if (r[i].skill == skill) {
      var item = item_base[r[i].returns[0].id];
      var rets = [];
      for (var j=0; j<r[i].requires.length; j++) {
        rets.push(item_base[r[i].requires[j]].name)
      }
      console.log(item.id + ' ' + item.name, 'Requires: ' + rets.join(', '));
    }
  }
}

searchObjBase = function(term) {
  var re = new RegExp(term.toLowerCase());
  for (var i=0, maxI=object_base.length; i<maxI;i++) {
    if(object_base[i] && object_base[i].name && object_base[i].name.toLowerCase().match(re)) {
      console.log(i, object_base[i].name)
    }
  }
}

showObjBase = function() {
  for (var i=0, maxI=object_base.length; i<maxI;i++) {
    if(object_base[i] && object_base[i].name) {
      console.log(i, object_base[i].name)
    }
  }
}

searchObjBaseNum = function(num, term) {
  var r = object_base[num].params.results
    , maxI = r.length;
  var re = new RegExp(term.toLowerCase());
  console.log(maxI + ' items to search...');
  for (var i=0; i<maxI;i++) {
    if (r[i] && r[i].returns && r[i].requires) {
      var reqs = [];
      for (var j=0, maxJ=r[i].returns.length; j<maxJ; j++) {
        reqs.push(item_base[r[i].returns[j]].name);
      }
      var item = item_base[r[i].returns[0].id]
      console.log(item.id + ' ' + item.name, 'Requires: ' + reqs.join(', '));
    }
  }
}


showObjBaseNum = function(num) {
  var r = object_base[num].params.results
    , maxI = r.length;
  console.log(maxI + ' items in object_base[' + num + ']...');
  for (var i=0; i<maxI;i++) {
    // console.log(r[i]);
    if (r[i] && r[i].returns && r[i].requires) {
      var reqs = [];
      for (var j=0, maxJ=r[i].requires.length; j<maxJ; j++) {
        // console.log(r[i].requires[j])
        reqs.push(item_base[r[i].requires[j]].name);
      }
      var item = item_base[r[i].returns[0].id]
      console.log(r[i].skill + ' ' + r[i].returns[0].id + ' ' + item.name, 'Requires: ' + reqs.join(', '));
    }
  }
}