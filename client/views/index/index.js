/*****************************************************************************/
/* Index: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Index.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'click #Banamex' : function(e,t){
    Session.set('banco', 'Banamex');
   },

   'click #Banorte' : function(e,t){
    Session.set('banco', 'Banorte');
   },

   'click #Bancomer' : function(e,t){
    Session.set('banco', 'Bancomer');
   },

    'click #Telcel' : function(e,t){
    Session.set('telefonia', 'Telcel');
   },

    'click #Movistar' : function(e,t){
    Session.set('telefonia', 'Movistar');
   },

    'click #Iusacell' : function(e,t){
    Session.set('telefonia', 'Iusacell');
   },

    'click #Cablevision' : function(e,t){
    Session.set('servicios', 'Cablevision');
   },

    'click #Cfe' : function(e,t){
    Session.set('servicios', 'Comision Federal de Electricidad');
   },

    'click #Ayd' : function(e,t){
    Session.set('servicios', 'Agua y Drenaje');
   }
});

Template.Index.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Index: Lifecycle Hooks */
/*****************************************************************************/
Template.Index.created = function () {
};

Template.Index.rendered = function () {
};

Template.Index.destroyed = function () {
};