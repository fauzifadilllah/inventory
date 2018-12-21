import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | peminjaman/input-peminjaman', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:peminjaman/input-peminjaman');
    assert.ok(controller);
  });
});
