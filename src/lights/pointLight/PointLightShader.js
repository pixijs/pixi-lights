var main = require('../../main');
var LightShader = require('../light/LightShader');
var glslify = require('glslify');

/**
 * @class
 * @extends PIXI.Shader
 * @memberof PIXI.lights
 * @param shaderManager {ShaderManager} The WebGL shader manager this shader works for.
 */
function PointLightShader(gl) {
    LightShader.call(this,
        gl,
        // vertex shader
        null,
        // fragment shader
        glslify(__dirname + '/point.frag'),
        // custom uniforms
        {
            // height of the light above the viewport
            uLightRadius:   { type: '1f', value: 1 }
        }
    );
}

PointLightShader.prototype = Object.create(LightShader.prototype);
PointLightShader.prototype.constructor = PointLightShader;
module.exports = PointLightShader;

main.registerPlugin('pointLightShader', PointLightShader);
