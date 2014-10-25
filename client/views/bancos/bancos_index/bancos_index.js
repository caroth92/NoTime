/*****************************************************************************/
/* BancosIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.BancosIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.BancosIndex.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
   sucursalesBancos: function() {
    console.log("bancos")
    return Bancos.find();
   },

   banco: function () {
    return Session.get('banco');
   }

});

Template.BancoItem.helpers({

   verde: function () {
    return true;
   }

});


/*****************************************************************************/
/* BancosIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.BancosIndex.created = function () {
};

Template.BancosIndex.rendered = function () {

};

Template.BancosIndex.destroyed = function () {
};
