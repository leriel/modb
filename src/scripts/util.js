var AppConstants = require('./constants/AppConstants.js')
  , SHEETS = AppConstants.sheets
  , numeral = require('numeral');

var Util = {
  sortByKey: function(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];

        if (typeof x == "string")
        {
            x = x.toLowerCase(); 
            y = y.toLowerCase();
        }

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  },

  getItemLevel: function(item) {
    var re = /^min_/
    if(item.params) {
     for (var k in item.params) {
      if (k.match(re)) {
        return item.params[k];
      }
     }
    }
    return '-';
  },
  getItemSkill: function(item) {
    var re = /^min_/
    if(item.params) {
     for (var k in item.params) {
      if (k.match(re)) {
        return k.replace(re, '');
      }
     }
    }
    return '-';
  },
  valOrDash: function(v) {
    return v ? v : '-';
  },

  itemPresents: function(i) {
    if (i.params.no_present) return false;
    var price = i.params.price;
    if (price == 1) return ['Rare Present'];
    var presents = [];
    if (price > 2499 && price < 80001) presents.push('Good Present');
    if (price > 7999 && price < 170001) presents.push('Great Present');
    if (price > 34999 && price < 450001) presents.push('Best Present');
    if (price > 149999 && price < 1500001) presents.push('Legendary Present');
    return presents.length ? presents : false;
  },

  vendorStockCount: function(npc, itemId) {
    var c = npc.temp.content;
    for (var i in c) {
      if (c[i].id == itemId) return c[i].count ? c[i].count : 0;
    }
    return false; // doesn't even stock the item.
  },
  itemGraphicStyle: function(item) {
    var sheet = SHEETS[item.img.sheet-1]
    return {
      backgroundPosition: '-' + (sheet.w*item.img.x) +'px -' + (sheet.h*item.img.y) +'px',
      width: sheet.w,
      height: sheet.h,
    };
  },

  calcLevel: function(obj) {
    if (obj.params && obj.params.combat_level) return obj.params.combat_level;
    return Math.ceil((obj.temp.total_strength + obj.temp.total_accuracy + obj.temp.total_defense + obj.temp.health + (obj.temp.total_magic||0))/4);
  },

  hideLoader: function() {
    document.getElementById('loading').style.display = 'none';
  },

  showLoader: function() {
    document.getElementById('loading').style.display = 'block';
  },
  titleCase: function(str) {
    var strs = str.toLowerCase().split(' ');
    for (var i in strs) {
      var ss = strs[i].split('');
      ss[0] = ss[0].toUpperCase();
      strs[i] = ss.join('');
    }
    return strs.join(' ');
  },

  chanceStr: function(obj) {
    var min = obj.min_chance || null;
    var max = obj.max_chance || null;
    if (min && max && min != max) {
      return Util.toPercent(min) + ' to ' + Util.toPercent(max);
    } else if (min) {
      return Util.toPercent(min);
    } else if (max) {
      return  Util.toPercent(max);
    }
    return '';
  },

  toPercent: function(n) {
    n = n || 1;
    return numeral(n*100).format('0.00') + '%';

  },

  compareInt: function(a, b) {
    var sa = a|0;
    var sb = b|0;
    return sa > sb ? 1 : -1;
  }

}

module.exports = Util;
