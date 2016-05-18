var indexTpl = require('./tpl/index.string')
require('./lib/spa.min.js')


 require('./views/boutique.js');
require('./index.js');


SPA.config({
	indexView:'boutique'
})