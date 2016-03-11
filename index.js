const assert = require('assert')
const noop = require('noop2')

module.exports = virtualWidget

// Create a virtual-dom widget
// obj -> fn(fn)
function virtualWidget (obj) {
  assert.equal(typeof obj, 'object')
  const init = obj.init || noop
  const update = obj.update || noop
  const destroy = obj.destroy || noop
  const render = obj.render || noop

  Widget.prototype.update = update
  Widget.prototype.destroy = destroy
  Widget.prototype.render = render

  return Widget

  function Widget () {
    if (!(this instanceof Widget)) {
      const o = Object.create(Widget.prototype)
      o.constructor.apply(o, arguments)
      return o
    }
    this.type = 'Widget'
    this.init = init.apply.bind(init, this, arguments)
  }
}
