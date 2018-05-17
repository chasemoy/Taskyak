import DS from 'ember-data';

export default DS.Model.extend({
    number: DS.attr('string'),
    title: DS.attr('string'),
    date: DS.attr('string'),
    body: DS.attr('string'),
    userID: DS.attr()

});
