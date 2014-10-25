/*****************************************************************************/
/* Bancos Methods */
/*****************************************************************************/

Meteor.methods({
 /*
  * Example:
  *  '/app/bancos/update/email': function (email) {
  *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
  *  }
  *
  */
  'agrega_banco': function (obj) {
  	var id = Bancos.insert(obj);
  	console.log(id)
  }
});