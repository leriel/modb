window.modb = window.modb || {};
modb.util = modb.util || {};

modb.util.searchItems = function(term, searchKey) {
  if (searchKey == null) {
    searchKey = 'name';
  }
  var re = new RegExp(term.toString().trim(), "i");
  for (var i in item_base) {
    // console.log(item_base[i].name);
    if (item_base[i][searchKey] && item_base[i][searchKey].toLowerCase().match(term)) {
      console.log(i, item_base[i].name, item_base[i]);
    }
  }
};

modb.util.showObjBase = function() {
  for (var i in object_base) {
    if(object_base[i] && object_base[i].name) {
      console.log(i, object_base[i].name)
    }
  }
}

modb.util.searchObjBase = function(term) {
  var re = new RegExp(term.toLowerCase());
  for (var i in object_base) {
    if(object_base[i] && object_base[i].name && object_base[i].name.toLowerCase().match(re)) {
      console.log(i, object_base[i].name)
    }
  }
}

modb.util.showObjBaseNum = function(num) {
  var r = object_base[num].params.results;
  for (var i in object_base) {
    // console.log(r[i]);
    if (r[i] && r[i].returns && r[i].requires) {
      var reqs = [];
      for (var j in r[i].requires) {
        // console.log(r[i].requires[j])
        reqs.push(item_base[r[i].requires[j]].name);
      }
      var item = item_base[r[i].returns[0].id]
      console.log(r[i].skill + ' ' + r[i].returns[0].id + ' ' + item.name, 'Requires: ' + reqs.join(', '), item, r[i]);
    }
  }
}

modb.util.searchObjBaseNum = function(num, term) {
  var r = object_base[num].params.results;
  var re = new RegExp(term.toLowerCase());
  for (var i in r) {
    if (r[i] && r[i].returns && r[i].requires) {
      var reqs = [];
      for (var j in r[i].returns) {
        reqs.push(item_base[r[i].returns[j]].name);
      }
      var item = item_base[r[i].returns[0].id]
      console.log(item.id + ' ' + item.name, 'Requires: ' + reqs.join(', '), item, r[i]);
    }
  }
}

modb.util.searchItems(6, 'b_t');
modb.util.searchObjBase('campfire');
modb.util.showObjBaseNum(438); // kettle


