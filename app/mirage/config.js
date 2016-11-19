export default function() {
  this.timing = 400;

  /*
    Route shorthand cheatsheet
  */
  this.get('/contacts');
  this.get('/contacts/:id');
}
