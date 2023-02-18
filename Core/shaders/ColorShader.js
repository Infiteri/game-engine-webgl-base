import { Shader } from '../webgl/Shader.js'

const vertex = `
    attribute vec3 aVertexPosition;

    uniform mat4 uCameraMatrix;

    void main() {
        gl_Position = uCameraMatrix * vec4(aVertexPosition, 1.0);
    }
`

const fragment = `
    precision mediump float;

    uniform vec4 uColor;

    void main() {
        gl_FragColor = uColor;
    }
`

/**
 * @namespace core
 *
 * @description
 */
export class ColorShader extends Shader {
  constructor(name) {
    super(name, vertex, fragment)
  }
}
