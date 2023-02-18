import core from '../Core/core.js'

/**
 * @namespace core
 *
 * @description
 */
export default class Application {
  constructor() {
    this.engine = new core.Engine()
    this.renderer = this.engine.renderer

    //Upload texture for easy use
    core.TextureManager.Upload(new core.Texture('Mat', '/Assets/Idle.png'))
    core.MaterialManager.Upload(
      new core.TextureMaterial('Mats', 'Mat', new core.Color(255, 255, 255))
    )

    this.mesh = new core.Sprite('Mats', 'Mats')
    this.mesh.transform.scale.y = 4
    this.mesh.transform.scale.x = 4
  }

  /** @private */
  Init() {
    this.engine.Init()

    this.renderer.Add(this.mesh)
  }

  /** @private */
  Render() {
    this.engine.Render()
  }

  /** @private */
  Update() {
    this.engine.Update()
  }

  /** @private */
  Loop() {
    this.Render()
    this.Update()

    //Temporary camera movement
    if (core.Keyboard.IsKeyDown('KeyA')) {
      this.engine.camera.position.x += 10
    }

    if (core.Keyboard.IsKeyDown('KeyD')) {
      this.engine.camera.position.x -= 10
    }

    if (core.Keyboard.IsKeyDown('KeyW')) {
      this.engine.camera.position.y += 10
    }

    if (core.Keyboard.IsKeyDown('KeyS')) {
      this.engine.camera.position.y -= 10
    }

    requestAnimationFrame(this.Loop.bind(this))
  }

  Run() {
    this.Init()
    this.Loop()
  }
}
