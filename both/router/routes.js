/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

/*
 *  Example:
 *  Router.route('/', {name: 'home'});
*/


Router.map(function() {
  this.route('Index', {path: '/'});
});

Router.map(function() {
  this.route('TableItem', {path: '/table'});
});

Router.map(function() {
  this.route('BancosIndex', {path: '/bancos'});
});

Router.map(function() {
  this.route('DarAlta', {path: '/darAlta'});
});
Router.route('/', {name: 'telefonia.index'});
Router.route('/', {name: 'servicios.index'});
