const test = require('tape')
const virtualWidget = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(virtualWidget)
})
