/*****************************************************************************/
/* ServiciosIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ServiciosIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.ServiciosIndex.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

  sucursalesServicios: function() {
    var servicioSeleccionado = Session.get('servicios')
    return Servicios.find({servicioParam:servicioSeleccionado});
   },

    servicios: function () {
    return Session.get('servicios');
   }
});


/*****************************************************************************/
/* ServiciosIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.ServiciosIndex.created = function () {
};

Template.ServiciosIndex.rendered = function () {
};

Template.ServiciosIndex.destroyed = function () {
};