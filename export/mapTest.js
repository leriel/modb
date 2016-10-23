(function(){  
  var mapNum = 11;
  for(var x in on_map[mapNum]) {  
    for (var y in on_map[mapNum][x])  {  
      if (on_map[mapNum][x][y]) {
        var i = on_map[mapNum][x][y]
          , obj;
        if (i.b_t=='1') obj = object_base[on_map[mapNum][x][y].b_i];
        else if (i.b_t=='4') obj = npc_base[on_map[mapNum][x][y].b_i];
        // else console.log(i);
        if (i.b_t == '1') console.log(x,y,i, obj.name, obj);
      }
    }
  }
})();

(function(){  
  var mapNum = 16;
  var names = []
  for(var x in on_map[mapNum]) {  
    for (var y in on_map[mapNum][x])  {  
      if (on_map[mapNum][x][y]) {
        var i = on_map[mapNum][x][y]
          , obj;
        if (i.b_t=='1') obj = object_base[on_map[mapNum][x][y].b_i];
        else if (i.b_t=='4') obj = npc_base[on_map[mapNum][x][y].b_i];
        // else console.log(i);
        if (i.b_t == '1' && names.indexOf(obj.name)==-1) names.push(obj.name);
      }
    }
  }
  console.log(names);

})();





(function(){  
  var mapNum = 16;
  var names = []
  for(var x in on_map[mapNum]) {  
    for (var y in on_map[mapNum][x])  {  
      if (on_map[mapNum][x][y]) {
        var i = on_map[mapNum][x][y]
          , obj;
        if (i.b_t=='1') obj = object_base[on_map[mapNum][x][y].b_i];
        else if (i.b_t=='4') obj = npc_base[on_map[mapNum][x][y].b_i];
        // else console.log(i);
        if (i.b_t == '1' && obj.name.match(/Fish/)) names.push({obj:obj.name,x:x,y:y});
      }
    }
  }
  console.log(names);

})();
