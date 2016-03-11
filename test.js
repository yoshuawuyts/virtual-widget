const test = require('tape')
const virtualWidget = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(virtualWidget)
})

test('should pass arguments to init', function (t) {
  t.plan(4)
  const Widget = virtualWidget({
    init: function (a, b) {
      t.equal(a, 'foo')
      t.equal(b, 'bar')
    }
  })
  const widget = new Widget('foo', 'bar')
  widget.init()
  Widget('foo', 'bar').init()
})
