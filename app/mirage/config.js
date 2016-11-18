export default function() {
  // this.namespace = '';
  this.timing = 400;

  /*
    Route shorthand cheatsheet
  */
  this.get('/contacts');
  this.get('/contacts/:id');
}
