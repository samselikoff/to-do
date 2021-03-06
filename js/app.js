App = Ember.Application.create();

// Models
App.Todo = DS.Model.extend({
  title: DS.attr,
  isDone: DS.attr
});

// Routes
App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return this.store.all('todo');
  }
});

// Controllers
App.ApplicationController = Ember.Controller.extend({

  actions: {
    addTodo: function() {
      this.store.createRecord('todo', {
        title: this.get('newTitle'),
        isDone: false
      });

      this.set('newTitle', '');
    },

    toggleIsDone: function(todo) {
      todo.set('isDone', !todo.get('isDone'));
    }
  }
});

// Other
Ember.Checkbox.reopen({
  click: function(e) {
    e.stopPropagation();
  }
});