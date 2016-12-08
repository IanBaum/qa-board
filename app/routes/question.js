import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions:{
    update(question, params){
      Object.keys(params).forEah(function(key){
        if(params[key]!==undefined){
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
    destroyQuestion(question){
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});