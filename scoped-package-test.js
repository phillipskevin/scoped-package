import QUnit from 'steal-qunit';
import plugin from './scoped-package';

QUnit.module('@phillipskevin/scoped-package');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the @phillipskevin/scoped-package plugin');
});
