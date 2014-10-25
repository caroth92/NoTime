/*****************************************************************************/
/* TelefoniaIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.TelefoniaIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.TelefoniaIndex.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

    sucursalesTelefonia: function() {
    console.log("telefonia")
    return Telefonia.find();
   },

    telefonia: function () {
    return Session.get('telefonia');
   }
});


/*****************************************************************************/
/* TelefoniaIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.TelefoniaIndex.created = function () {
};

Template.TelefoniaIndex.rendered = function () {
};

Template.TelefoniaIndex.destroyed = function () {
};