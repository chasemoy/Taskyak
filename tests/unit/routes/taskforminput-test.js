import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | taskforminput', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:taskforminput');
    assert.ok(route);
  });
});
