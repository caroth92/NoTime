/*****************************************************************************/
/* DarAlta: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.DarAlta.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'submit form': function (e, tmpl) {
      e.preventDefault();
      var banco = $('#banco').val();
      var sucursal = $('#sucursal').val();
      var direccion = $('#direccion').val();
      var numero = $('#numero').val();
      var colonia = $('#colonia').val();
      var cp = $('#cp').val();
      var telefono = $('#telefono').val();
      var horarioLV = $('#horarioLV').val();
      var horarioS = $('#horarioS').val();
      var horarioD = $('#horarioD').val();

      var body = {
        bancoParam: banco,
        sucursalParam: sucursal,
        direccionParam: direccion,
        numeroParam: numero,
        coloniaParam: colonia,
        cpParam: cp,
        telefonoParam: telefono,
        horarioLVParam: horarioLV,
        horarioSParam: horarioS,
        horarioDParam: horarioD,
        tiempoEspera: 0
      }

      var id = Bancos.insert(body);
      console.log(id)
      /*
      Meteor.call('agrega_banco', body, function(err, response){
        if(err){
          console.log("error");
          return;
        }
        return true;
      });
      */  
   }
});

Template.DarAlta.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* DarAlta: Lifecycle Hooks */
/*****************************************************************************/
Template.DarAlta.created = function () {
};

Template.DarAlta.rendered = function () {
};

Template.DarAlta.destroyed = function () {
};