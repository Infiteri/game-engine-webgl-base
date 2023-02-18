import core, { gl } from '../core.js'

/**
 * @class Main renderer class, for all the elements
 */

/**
 * @namespace core
 *
 * @description
 */
export class Renderer {
  /** @type {Object.<string, core.Mesh>} */
  elements = {}

  /**
   *
   * @param {core.Camera} camera Main renderer camera (used for math)
   */
  constructor(camera) {
    this.camera = camera
  }

  SetClearColor(r, g, b) {
    gl.clearColor(r, g, b, 1)
  }

  Init() {
    gl.clearColor(0, 0, 0, 1)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
  }

  Add(element) {
    element.Init()
    this.elements[element.name] = element
  }

  Update() {}

  Render() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    Object.values(this.elements).forEach(e => {
      e.Render()
    })
  }
}
