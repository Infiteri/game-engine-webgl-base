import core from '../core.js'

export class Sprite {
  constructor(name, material) {
    this.name = name

    this.transform = new core.Transform()

    this.width = 0
    this.height = 0

    //Animation
    this.frameX = 0
    this.frameY = 0
    this.framesX = 8
    this.frameY = 0

    //Buffering
    this.buffer = new core.Buffer(5)

    this.material = core.MaterialManager.Get(material)
  }

  Init() {
    this.material.Init(this)

    this.uvX = 1
    this.uvY = 1

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
      this.uvY,
      //
      this.width,
      this.height,
      0,
      this.uvX,
      this.uvY,
      //
      this.width,
      this.height,
      0,
      this.uvX,
      this.uvY,
      //
      this.width,
      0,
      0,
      this.uvX,
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
