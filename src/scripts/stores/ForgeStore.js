var _forge = require('./ForgeDB.js');
var ForgeStore = {
  getXpForFormula: function(formula) {
    var totalXp;
    if (formula.xp) {
      return formula.xp;
    }
    if (!formula.matts) {
      return 0;
    }
    totalXp = formula.matts.map(function(mat) {
      var xpGain;
      var count;
      if (!mat || !mat.id || !mat.c) {
        return 0;
      }
      xpGain = _forge.xp[mat.id] || _forge.fletchXp[mat.id];
      if (formula.skill === 'carpentry') {
        xpGain = _forge.carpXp[mat.id];
      }
      count = mat.c;
      if (!xpGain) {
        return 0;
      }
      return xpGain * count;
    }).reduce(function(a, b) {
      return a + b;
    })
    return totalXp;
  }
};

module.exports = ForgeStore;
