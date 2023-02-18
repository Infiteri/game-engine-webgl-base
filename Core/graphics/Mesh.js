import core from '../core.js'

/**
 * @namespace core
 *
 * @description
 */
export class Mesh {
  constructor(material) {
    this.width = 0
    this.height = 0

    this.transform = new core.Transform()

    //Buffering
    this.buffer = new core.Buffer(5)

    this.material = core.MaterialManager.Get(material)
  }

  Init() {
    this.material.Init(this)

    this.bufferData = [
      0,
      0,
      0,
      0,
      0,
      //
      0,
      this.height,
      0.0,
      0,
      1,
      //
      this.width,
      this.height,
      0,
      1,
      1,
      //
      this.width,
      this.height,
      0,
      1,
      1,
      //
      this.width,
      0,
      0,
      1,
      0,
      //
      0,
      0,
      0,
      0,
      0,
    ]

    this.buffer.PushBackData(this.bufferData)
    this.buffer.AddAttribute(new core.Attribute(0, 0, 3))
    this.buffer.AddAttribute(new core.Attribute(1, 3, 2))
    this.buffer.Upload()
  }

  Render() {
    this.material.Render(this)

    this.buffer.Bind()
    this.buffer.Draw()
  }
}
