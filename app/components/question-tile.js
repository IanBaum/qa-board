import Ember from 'ember';

export default Ember.Component.extend({
  followed: Ember.inject.service(),

  actions: {
    followQuestion(item){
      this.get('followed').add(item);
    },
  }
});
