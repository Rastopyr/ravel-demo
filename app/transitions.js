
export default function(){
  this.transition(
    this.hasClass('contact-wrapper'),
    this.toValue(function(oldModel, toModel) {
      return oldModel.get('id') > toModel.get('id');
    }),
    this.use('toDown')
  );

  this.transition(
    this.hasClass('contact-wrapper'),
    this.toValue(function(oldModel, toModel) {
      return oldModel.get('id') < toModel.get('id');
    }),
    this.use('toUp')
  );
};
