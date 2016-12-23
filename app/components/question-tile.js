import Ember from 'ember';

export default Ember.Component.extend({
  follow: Ember.inject.service(),

  numberOfAnswers: Ember.computed('question.answers.length', function (){
    return ' ' + this.get('question.answers.length') + ' Answers';
  }),

  actions: {
    followQuestion(question){
      this.get('follow').add(question);
    },
  }
});
