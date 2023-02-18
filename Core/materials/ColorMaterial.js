import core from '../core.js'
import { Material } from './Material.js'

/**
 * @namespace core
 *
 * @description
 */
export class ColorMaterial extends Material {
  constructor(name, color) {
    super(name)

    this.color = color
  }

  Init() {
    this.shader = core.ShaderManager.Get('ColorShader')
  }

  Render() {
    this.shader.Use()

    this.shader.UploadVec4v('uColor', this.color.ToFloat32Array())
  }
}
