<template>
  <div class="cards_main">
    <div class="beneath">
      <canvas ref="canvas"></canvas>
    </div>
    <div class="card_content" ref="card">
      <div
        class="card_list"
        ref="cardlist"
        v-for="(iten, index) in cardArrey"
        :key="index"
        :style="{ transform: `translate(${index * 30}px,${index * 50})` }"
        @click="onListCard(index)"
      >
        <img src="../../../assets/img/tarot/card.png" alt="#" />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  data() {
    return {
      boxes: [],
      canvas: null,
      ctx: null,
      cardArrey: [1, 2, 3, 4, 5],
    }
  },
  mounted() {
    this.initCanvas()
  },
  methods: {
    getMousePosition() {
      console.log('传入的鼠标信息::=>>>')
    },
    onListCard(i) {
      console.log('点击当前图片', i)
    },
    cardPosition(i) {
      return (i + 10) * 20
    },
    initCanvas() {
      const canvas = this.$refs.canvas
      const cardEl = this.$refs.card
      const cardList = document.querySelectorAll('.card_list')
      function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect()
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top,
        }
      }
      canvas.addEventListener('mousemove', function (evt) {
        console.log('鼠标在card上')
        var mousePos = getMousePos(canvas, evt)
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y
      })

      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight

      var config = {
        TEXTURE_DOWNSAMPLE: 1,
        DENSITY_DISSIPATION: 0.98,
        VELOCITY_DISSIPATION: 0.99,
        PRESSURE_DISSIPATION: 0.8,
        PRESSURE_ITERATIONS: 25,
        CURL: 30,
        SPLAT_RADIUS: 0.005,
      }

      var pointers = []
      var splatStack = []

      var _getWebGLContext = getWebGLContext(canvas)
      var gl = _getWebGLContext.gl
      var ext = _getWebGLContext.ext
      var support_linear_float = _getWebGLContext.support_linear_float

      function getWebGLContext(canvas) {
        var params = {
          alpha: false,
          depth: false,
          stencil: false,
          antialias: false,
        }

        var gl = canvas.getContext('webgl2', params)

        var isWebGL2 = !!gl

        if (!isWebGL2)
          gl =
            canvas.getContext('webgl', params) ||
            canvas.getContext('experimental-webgl', params)

        var halfFloat = gl.getExtension('OES_texture_half_float')
        var support_linear_float = gl.getExtension(
          'OES_texture_half_float_linear'
        )

        if (isWebGL2) {
          gl.getExtension('EXT_color_buffer_float')
          support_linear_float = gl.getExtension('OES_texture_float_linear')
        }

        gl.clearColor(0.0, 0.0, 0.0, 0)

        var internalFormat = isWebGL2 ? gl.RGBA16F : gl.RGBA
        var internalFormatRG = isWebGL2 ? gl.RG16F : gl.RGBA
        var formatRG = isWebGL2 ? gl.RG : gl.RGBA
        var texType = isWebGL2 ? gl.HALF_FLOAT : halfFloat.HALF_FLOAT_OES

        return {
          gl: gl,
          ext: {
            internalFormat: internalFormat,
            internalFormatRG: internalFormatRG,
            formatRG: formatRG,
            texType: texType,
          },
          support_linear_float: support_linear_float,
        }
      }

      function pointerPrototype() {
        this.id = -1
        this.x = 0
        this.y = 0
        this.dx = 0
        this.dy = 0
        this.down = false
        this.moved = false
        this.color = [30, 0, 300]
      }

      pointers.push(new pointerPrototype())

      var GLProgram = (function () {
        function GLProgram(vertexShader, fragmentShader) {
          if (!(this instanceof GLProgram))
            throw new TypeError('Cannot call a class as a function')

          this.uniforms = {}
          this.program = gl.createProgram()

          gl.attachShader(this.program, vertexShader)
          gl.attachShader(this.program, fragmentShader)
          gl.linkProgram(this.program)

          if (!gl.getProgramParameter(this.program, gl.LINK_STATUS))
            throw gl.getProgramInfoLog(this.program)

          var uniformCount = gl.getProgramParameter(
            this.program,
            gl.ACTIVE_UNIFORMS
          )

          for (var i = 0; i < uniformCount; i++) {
            var uniformName = gl.getActiveUniform(this.program, i).name

            this.uniforms[uniformName] = gl.getUniformLocation(
              this.program,
              uniformName
            )
          }
        }

        GLProgram.prototype.bind = function bind() {
          gl.useProgram(this.program)
        }

        return GLProgram
      })()

      function compileShader(type, source) {
        var shader = gl.createShader(type)

        gl.shaderSource(shader, source)
        gl.compileShader(shader)

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
          throw gl.getShaderInfoLog(shader)

        return shader
      }

      var baseVertexShader = compileShader(
        gl.VERTEX_SHADER,
        'precision highp float; precision mediump sampler2D; attribute vec2 aPosition; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform vec2 texelSize; void main () {     vUv = aPosition * 0.5 + 0.5;     vL = vUv - vec2(texelSize.x, 0.0);     vR = vUv + vec2(texelSize.x, 0.0);     vT = vUv + vec2(0.0, texelSize.y);     vB = vUv - vec2(0.0, texelSize.y);     gl_Position = vec4(aPosition, 0.0, 1.0); }'
      )
      var clearShader = compileShader(
        gl.FRAGMENT_SHADER,
        'precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uTexture; uniform float value; void main () {     gl_FragColor = value * texture2D(uTexture, vUv); }'
      )
      var displayShader = compileShader(
        gl.FRAGMENT_SHADER,
        'precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uTexture; void main () {     gl_FragColor = texture2D(uTexture, vUv); }'
      )
      var splatShader = compileShader(
        gl.FRAGMENT_SHADER,
        'precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uTarget; uniform float aspectRatio; uniform vec3 color; uniform vec2 point; uniform float radius; void main () {     vec2 p = vUv - point.xy;     p.x *= aspectRatio;     vec3 splat = exp(-dot(p, p) / radius) * color;     vec3 base = texture2D(uTarget, vUv).xyz;     gl_FragColor = vec4(base + splat, 1.0); }'
      )
      var advectionManualFilteringShader = compileShader(
        gl.FRAGMENT_SHADER,
        'precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uVelocity; uniform sampler2D uSource; uniform vec2 texelSize; uniform float dt; uniform float dissipation; vec4 bilerp (in sampler2D sam, in vec2 p) {     vec4 st;     st.xy = floor(p - 0.5) + 0.5;     st.zw = st.xy + 1.0;     vec4 uv = st * texelSize.xyxy;     vec4 a = texture2D(sam, uv.xy);     vec4 b = texture2D(sam, uv.zy);     vec4 c = texture2D(sam, uv.xw);     vec4 d = texture2D(sam, uv.zw);     vec2 f = p - st.xy;     return mix(mix(a, b, f.x), mix(c, d, f.x), f.y); } void main () {     vec2 coord = gl_FragCoord.xy - dt * texture2D(uVelocity, vUv).xy;     gl_FragColor = dissipation * bilerp(uSource, coord);     gl_FragColor.a = 1.0; }'
      )
      var advectionShader = compileShader(
        gl.FRAGMENT_SHADER,
        'precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uVelocity; uniform sampler2D uSource; uniform vec2 texelSize; uniform float dt; uniform float dissipation; void main () {     vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;     gl_FragColor = dissipation * texture2D(uSource, coord); }'
      )
      var divergenceShader = compileShader(
        gl.FRAGMENT_SHADER,
        'precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uVelocity; vec2 sampleVelocity (in vec2 uv) {     vec2 multiplier = vec2(1.0, 1.0);     if (uv.x < 0.0) { uv.x = 0.0; multiplier.x = -1.0; }     if (uv.x > 1.0) { uv.x = 1.0; multiplier.x = -1.0; }     if (uv.y < 0.0) { uv.y = 0.0; multiplier.y = -1.0; }     if (uv.y > 1.0) { uv.y = 1.0; multiplier.y = -1.0; }     return multiplier * texture2D(uVelocity, uv).xy; } void main () {     float L = sampleVelocity(vL).x;     float R = sampleVelocity(vR).x;     float T = sampleVelocity(vT).y;     float B = sampleVelocity(vB).y;     float div = 0.5 * (R - L + T - B);     gl_FragColor = vec4(div, 0.0, 0.0, 1.0); }'
      )
      var curlShader = compileShader(
        gl.FRAGMENT_SHADER,
        'precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uVelocity; void main () {     float L = texture2D(uVelocity, vL).y;     float R = texture2D(uVelocity, vR).y;     float T = texture2D(uVelocity, vT).x;     float B = texture2D(uVelocity, vB).x;     float vorticity = R - L - T + B;     gl_FragColor = vec4(vorticity, 0.0, 0.0, 1.0); }'
      )
      var vorticityShader = compileShader(
        gl.FRAGMENT_SHADER,
        'precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uVelocity; uniform sampler2D uCurl; uniform float curl; uniform float dt; void main () {     float L = texture2D(uCurl, vL).y;     float R = texture2D(uCurl, vR).y;     float T = texture2D(uCurl, vT).x;     float B = texture2D(uCurl, vB).x;     float C = texture2D(uCurl, vUv).x;     vec2 force = vec2(abs(T) - abs(B), abs(R) - abs(L));     force *= 1.0 / length(force + 0.00001) * curl * C;     vec2 vel = texture2D(uVelocity, vUv).xy;     gl_FragColor = vec4(vel + force * dt, 0.0, 1.0); }'
      )
      var pressureShader = compileShader(
        gl.FRAGMENT_SHADER,
        'precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uPressure; uniform sampler2D uDivergence; vec2 boundary (in vec2 uv) {     uv = min(max(uv, 0.0), 1.0);     return uv; } void main () {     float L = texture2D(uPressure, boundary(vL)).x;     float R = texture2D(uPressure, boundary(vR)).x;     float T = texture2D(uPressure, boundary(vT)).x;     float B = texture2D(uPressure, boundary(vB)).x;     float C = texture2D(uPressure, vUv).x;     float divergence = texture2D(uDivergence, vUv).x;     float pressure = (L + R + B + T - divergence) * 0.25;     gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0); }'
      )
      var gradientSubtractShader = compileShader(
        gl.FRAGMENT_SHADER,
        'precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uPressure; uniform sampler2D uVelocity; vec2 boundary (in vec2 uv) {     uv = min(max(uv, 0.0), 1.0);     return uv; } void main () {     float L = texture2D(uPressure, boundary(vL)).x;     float R = texture2D(uPressure, boundary(vR)).x;     float T = texture2D(uPressure, boundary(vT)).x;     float B = texture2D(uPressure, boundary(vB)).x;     vec2 velocity = texture2D(uVelocity, vUv).xy;     velocity.xy -= vec2(R - L, T - B);     gl_FragColor = vec4(velocity, 0.0, 1.0); }'
      )

      var textureWidth = void 0
      var textureHeight = void 0
      var density = void 0
      var velocity = void 0
      var divergence = void 0
      var curl = void 0
      var pressure = void 0

      initFramebuffers()

      var clearProgram = new GLProgram(baseVertexShader, clearShader)
      var displayProgram = new GLProgram(baseVertexShader, displayShader)
      var splatProgram = new GLProgram(baseVertexShader, splatShader)
      var advectionProgram = new GLProgram(
        baseVertexShader,
        support_linear_float ? advectionShader : advectionManualFilteringShader
      )
      var divergenceProgram = new GLProgram(baseVertexShader, divergenceShader)
      var curlProgram = new GLProgram(baseVertexShader, curlShader)
      var vorticityProgram = new GLProgram(baseVertexShader, vorticityShader)
      var pressureProgram = new GLProgram(baseVertexShader, pressureShader)
      var gradienSubtractProgram = new GLProgram(
        baseVertexShader,
        gradientSubtractShader
      )

      function initFramebuffers() {
        textureWidth = gl.drawingBufferWidth >> config.TEXTURE_DOWNSAMPLE
        textureHeight = gl.drawingBufferHeight >> config.TEXTURE_DOWNSAMPLE

        var iFormat = ext.internalFormat
        var iFormatRG = ext.internalFormatRG
        var formatRG = ext.formatRG
        var texType = ext.texType

        density = createDoubleFBO(
          0,
          textureWidth,
          textureHeight,
          iFormat,
          gl.RGBA,
          texType,
          support_linear_float ? gl.LINEAR : gl.NEAREST
        )
        velocity = createDoubleFBO(
          2,
          textureWidth,
          textureHeight,
          iFormatRG,
          formatRG,
          texType,
          support_linear_float ? gl.LINEAR : gl.NEAREST
        )
        divergence = createFBO(
          4,
          textureWidth,
          textureHeight,
          iFormatRG,
          formatRG,
          texType,
          gl.NEAREST
        )
        curl = createFBO(
          5,
          textureWidth,
          textureHeight,
          iFormatRG,
          formatRG,
          texType,
          gl.NEAREST
        )
        pressure = createDoubleFBO(
          6,
          textureWidth,
          textureHeight,
          iFormatRG,
          formatRG,
          texType,
          gl.NEAREST
        )
      }

      function createFBO(texId, w, h, internalFormat, format, type, param) {
        gl.activeTexture(gl.TEXTURE0 + texId)

        var texture = gl.createTexture()

        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          internalFormat,
          w,
          h,
          0,
          format,
          type,
          null
        )

        var fbo = gl.createFramebuffer()

        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
        gl.framebufferTexture2D(
          gl.FRAMEBUFFER,
          gl.COLOR_ATTACHMENT0,
          gl.TEXTURE_2D,
          texture,
          0
        )
        gl.viewport(0, 0, w, h)
        gl.clear(gl.COLOR_BUFFER_BIT)

        return [texture, fbo, texId]
      }

      function createDoubleFBO(
        texId,
        w,
        h,
        internalFormat,
        format,
        type,
        param
      ) {
        var fbo1 = createFBO(texId, w, h, internalFormat, format, type, param)
        var fbo2 = createFBO(
          texId + 1,
          w,
          h,
          internalFormat,
          format,
          type,
          param
        )

        return {
          get first() {
            return fbo1
          },
          get second() {
            return fbo2
          },
          swap: function swap() {
            var temp = fbo1

            fbo1 = fbo2
            fbo2 = temp
          },
        }
      }

      var blit = (function () {
        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
        gl.bufferData(
          gl.ARRAY_BUFFER,
          new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
          gl.STATIC_DRAW
        )
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer())
        gl.bufferData(
          gl.ELEMENT_ARRAY_BUFFER,
          new Uint16Array([0, 1, 2, 0, 2, 3]),
          gl.STATIC_DRAW
        )
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)
        gl.enableVertexAttribArray(0)

        return function (destination) {
          gl.bindFramebuffer(gl.FRAMEBUFFER, destination)
          gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
        }
      })()

      var lastTime = Date.now()

      update()

      function update() {
        resizeCanvas()

        var dt = Math.min((Date.now() - lastTime) / 1000, 0.016)
        lastTime = Date.now()

        gl.viewport(0, 0, textureWidth, textureHeight)

        if (splatStack.length > 0) {
          for (var m = 0; m < splatStack.pop(); m++) {
            var color = [
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
              0,
            ]
            var x = canvas.width * Math.random()
            var y = canvas.height * Math.random()
            var dx = 1000 * (Math.random() - 0.5)
            var dy = 1000 * (Math.random() - 0.5)

            splat(x, y, dx, dy, color)
          }
        }

        advectionProgram.bind()
        gl.uniform2f(
          advectionProgram.uniforms.texelSize,
          1.0 / textureWidth,
          1.0 / textureHeight
        )
        gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.first[2])
        gl.uniform1i(advectionProgram.uniforms.uSource, velocity.first[2])
        gl.uniform1f(advectionProgram.uniforms.dt, dt)
        gl.uniform1f(
          advectionProgram.uniforms.dissipation,
          config.VELOCITY_DISSIPATION
        )
        blit(velocity.second[1])
        velocity.swap()

        gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.first[2])
        gl.uniform1i(advectionProgram.uniforms.uSource, density.first[2])
        gl.uniform1f(
          advectionProgram.uniforms.dissipation,
          config.DENSITY_DISSIPATION
        )
        blit(density.second[1])
        density.swap()

        for (var i = 0, len = pointers.length; i < len; i++) {
          var pointer = pointers[i]
          //   console.log('pointer[i]::=>>>', pointers[i])
          //   console.log('pointer::=>>>', pointer)

          if (pointer.moved) {
            // console.log('鼠标x轴', pointer.x)
            splat(pointer.x, pointer.y, pointer.dx, pointer.dy, pointer.color)
            pointer.moved = false
          }
        }

        curlProgram.bind()
        gl.uniform2f(
          curlProgram.uniforms.texelSize,
          1.0 / textureWidth,
          1.0 / textureHeight
        )
        gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.first[2])
        blit(curl[1])

        vorticityProgram.bind()
        gl.uniform2f(
          vorticityProgram.uniforms.texelSize,
          1.0 / textureWidth,
          1.0 / textureHeight
        )
        gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.first[2])
        gl.uniform1i(vorticityProgram.uniforms.uCurl, curl[2])
        gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL)
        gl.uniform1f(vorticityProgram.uniforms.dt, dt)
        blit(velocity.second[1])
        velocity.swap()

        divergenceProgram.bind()
        gl.uniform2f(
          divergenceProgram.uniforms.texelSize,
          1.0 / textureWidth,
          1.0 / textureHeight
        )
        gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.first[2])
        blit(divergence[1])

        clearProgram.bind()

        var pressureTexId = pressure.first[2]

        gl.activeTexture(gl.TEXTURE0 + pressureTexId)
        gl.bindTexture(gl.TEXTURE_2D, pressure.first[0])
        gl.uniform1i(clearProgram.uniforms.uTexture, pressureTexId)
        gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE_DISSIPATION)
        blit(pressure.second[1])
        pressure.swap()

        pressureProgram.bind()
        gl.uniform2f(
          pressureProgram.uniforms.texelSize,
          1.0 / textureWidth,
          1.0 / textureHeight
        )
        gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence[2])
        pressureTexId = pressure.first[2]
        gl.activeTexture(gl.TEXTURE0 + pressureTexId)

        for (var _i = 0; _i < config.PRESSURE_ITERATIONS; _i++) {
          gl.bindTexture(gl.TEXTURE_2D, pressure.first[0])
          gl.uniform1i(pressureProgram.uniforms.uPressure, pressureTexId)
          blit(pressure.second[1])
          pressure.swap()
        }

        gradienSubtractProgram.bind()
        gl.uniform2f(
          gradienSubtractProgram.uniforms.texelSize,
          1.0 / textureWidth,
          1.0 / textureHeight
        )
        gl.uniform1i(
          gradienSubtractProgram.uniforms.uPressure,
          pressure.first[2]
        )
        gl.uniform1i(
          gradienSubtractProgram.uniforms.uVelocity,
          velocity.first[2]
        )
        blit(velocity.second[1])
        velocity.swap()

        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
        displayProgram.bind()
        gl.uniform1i(displayProgram.uniforms.uTexture, density.first[2])
        blit(null)

        requestAnimationFrame(update)
      }

      function splat(x, y, dx, dy, color) {
        // console.log('splatx', dx, dy)
        splatProgram.bind()
        gl.uniform1i(splatProgram.uniforms.uTarget, velocity.first[2])
        gl.uniform1f(
          splatProgram.uniforms.aspectRatio,
          canvas.width / canvas.height
        )
        gl.uniform2f(
          splatProgram.uniforms.point,
          x / canvas.width,
          1.0 - y / canvas.height
        )
        gl.uniform3f(splatProgram.uniforms.color, dx, -dy, 1.0)
        gl.uniform1f(splatProgram.uniforms.radius, config.SPLAT_RADIUS)
        blit(velocity.second[1])
        velocity.swap()

        gl.uniform1i(splatProgram.uniforms.uTarget, density.first[2])
        gl.uniform3f(
          splatProgram.uniforms.color,
          color[0] * 0.1,
          color[1] * 0.3,
          color[2] * 0.3
        )
        blit(density.second[1])
        density.swap()
      }

      function resizeCanvas() {
        ;(canvas.width !== canvas.clientWidth ||
          canvas.height !== canvas.clientHeight) &&
          ((canvas.width = canvas.clientWidth),
          (canvas.height = canvas.clientHeight),
          initFramebuffers())
      }

      var count = 0
      var colorArr = [
        Math.random() + 0.2,
        Math.random() + 0.2,
        Math.random() + 0.2,
      ]

      //   canvas.addEventListener('mousemove', function (e) {
      //     count++

      //     count > 25 &&
      //       ((colorArr = [
      //         Math.random() + 0.2,
      //         Math.random() + 0.2,
      //         Math.random() + 0.2,
      //       ]),
      //       (count = 0))

      //     pointers[0].down = true
      //     pointers[0].color = colorArr
      //     pointers[0].moved = pointers[0].down
      //     pointers[0].dx = (e.clientX - pointers[0].x) * 9.0
      //     pointers[0].dy = (e.clientY - pointers[0].y) * 9.0
      //     pointers[0].x = e.clientX
      //     pointers[0].y = e.clientY

      //     // console.log('hover', e.offsetX)
      //   })

      document.addEventListener('mousemove', function (e) {
        // getMousePos(cardEl, evt)
        // count > 25 &&
        //   ((colorArr = [
        //     Math.random() + 0.2,
        //     Math.random() + 0.2,
        //     Math.random() + 0.2,
        //   ]),
        //   (count = 0))
        // #3d1e64
        colorArr = [
          0.50000240138172145235, 0.00000039632077862, 0.490053199889552948,
        ]

        pointers[0].down = true
        pointers[0].color = colorArr
        // console.log('移动位置', (e.clientX - pointers[0].x) * 9)
        pointers[0].moved = pointers[0].down
        pointers[0].dx = (e.clientX - pointers[0].x) * 9.0
        pointers[0].dy = (e.clientY - pointers[0].y) * 9.0
        pointers[0].x = e.clientX
        pointers[0].y = e.clientY

        // console.log('外部XXX位置', pointers[0].dx)
        // console.log('子元素的XXX位置', (e.clientX - pointers[0].x) * 9.0)
        //   console.log('子元素信息', box.offsetLeft, box.clientWidth)
        // console.log('子元素的YYY位置', (e.clientY - pointers[0].y) * 9.0)
        // console.log('子元素的YYY位置', pointers[0].y)
        // console.log('外部的烟雾', pointers[0].dy)
      })

      cardList.forEach((box, index) => {
        let mouseX = 0
        let mouseY = 0
        box.addEventListener('mousemove', (e) => {
          mouseX = e.clientX - box.offsetLeft - box.clientWidth / 2
          mouseY = e.clientY - box.offsetTop - box.clientHeight / 2
          //   console.log('子盒子宽度', box.offsetWidth, box.offsetLeft)
          //   console.log('父盒子高度', cardEl.clientHeight)
          //   console.log('鼠标XXX位置', (e.clientX - pointers[0].x) * 9.0)
          //   console.log('子元素信息', box.offsetLeft, box.clientWidth)
          //   console.log('鼠标YYY位置', (e.clientY - pointers[0].y) * 9.0)

          const cardElRect = cardEl.getBoundingClientRect()

          console.log('父盒子的信息', cardElRect)

          //   box.offsetWidth  盒子更准确的宽度，包括边框
          const minLeft = box.offsetWidth / 2

          console.log('子元素的宽度/2', minLeft)
          const maxLeft = cardElRect.width - box.offsetWidth / 2

          const newX = Math.min(Math.max(mouseX, minLeft), maxLeft)
          const newY = Math.min(
            Math.max(mouseY, box.offsetHeight / 2),
            cardElRect.height - box.offsetHeight / 2
          )

          //   child.style.transform = `translate(${newX - childWidth / 2}px, ${
          //     newY - childHeight / 2
          //   }px)`

          //   console.log(
          //     '限制子X',
          //     Math.min(
          //       Math.max((e.clientX - pointers[0].x) * 9.0, cardElRect.left),
          //       cardEl.clientWidth
          //     )
          //   )
          //   console.log(
          //     '限制子Y',
          //     Math.min(
          //       Math.max((e.clientY - pointers[0].x) * 9.0, 0),
          //       cardEl.clientHeight
          //     )
          //   )

          gsap.to(box, {
            x: (e.clientX - pointers[0].x) * 9.0,
            y: (e.clientY - pointers[0].y) * 9.0,

            // x: newX - box.offsetWidth / 2,
            // y: newY - box.offsetHeight / 2,
            rotation: Math.floor(Math.random() * 130),
            duration: 2,
          })
        })
      })

      //   canvas.addEventListener(
      //     'touchmove',
      //     function (e) {
      //       e.preventDefault()

      //       var touches = e.targetTouches

      //       count++

      //       count > 25 &&
      //         ((colorArr = [
      //           Math.random() + 0.2,
      //           Math.random() + 0.2,
      //           Math.random() + 0.2,
      //         ]),
      //         (count = 0))

      //       for (var i = 0, len = touches.length; i < len; i++) {
      //         if (i >= pointers.length) pointers.push(new pointerPrototype())

      //         pointers[i].id = touches[i].identifier
      //         pointers[i].down = true
      //         pointers[i].x = touches[i].pageX
      //         pointers[i].y = touches[i].pageY
      //         // pointers[i].color = colorArr

      //         var pointer = pointers[i]

      //         pointer.moved = pointer.down
      //         pointer.dx = (touches[i].pageX - pointer.x) * 10.0
      //         pointer.dy = (touches[i].pageY - pointer.y) * 10.0
      //         pointer.x = touches[i].pageX
      //         pointer.y = touches[i].pageY
      //         console.log('pointer.dx', pointer.dx)
      //       }
      //     },
      //     false
      //   )
    },
  },
}
</script>

<style lang="scss" scoped>
.cards_main {
  width: 100vw;
  height: 70vh;

  .beneath {
    canvas {
      // opacity: 0.1;
      cursor: pointer;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .card_content {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    // padding: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .card_list {
      width: 130px;
      height: 220px;
      border-radius: 12px;
      border: 1px solid #fff;
      position: absolute;
      overflow: hidden;
      opacity: 0.9;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.9;
      }
    }
  }
}
</style>
