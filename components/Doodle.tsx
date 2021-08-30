import React, { useEffect } from 'react'

const doodle = () => {

  if (typeof window === 'undefined') {
    return (
      <div></div>
    )
  }

  useEffect(() => {
    const doodle = document.querySelector('css-doodle') as any

    console.log('doodle', doodle)

    if (!doodle) {
      return
    }

    doodle.update(
      `
      :doodle { @grid: 1x35 / 100vw 100vh; }
      :container {
        height: 475px;
        overflow: hidden;
        background: #ffcabb;
        background: linear-gradient(to top, #ffcabb 50%, #de93b6 100%);
        background-repeat: no-repeat;
      }

      position: relative;
      align-self: end;
      height: @rand(10%, 75%);
      background: linear-gradient(to top, #725392 0%, #b764ac 100%);
      margin-left: @rand(0.1, 1)vw;
      z-index: 1;
      transform: scaleX(@rand(.8, 1.9));

      ::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: @rand(-20, 12)px;
          right: @rand(-20, 12)px;
          top: @rand(15, 55)%;
          background: linear-gradient(to top, #352864 0%, #4d4280 100%);
          z-index: 3;
      }

      ::after {
          content: "";
          position: absolute;
          width: 2px;
          height: 2px;
          top: @rand(15, 20)%;
          left: @rand(10, 20)%;
          z-index: 5;
          box-shadow:
              @rand(0.1, 2.1)vw @rand(0, 10)vw .5px rgba(246, 212, 0, .7),
              @rand(0.1, 2.1)vw @rand(10, 15)vw .5px rgba(246, 212, 0, .6),
              @rand(0.1, 2.1)vw @rand(15, 22)vw .5px rgba(246, 212, 0, .7),
              @rand(0.1, 2.1)vw @rand(22, 30)vw .5px rgba(246, 212, 0, .6),
              @rand(0.1, 2.1)vw @rand(30, 40)vw .5px rgba(246, 212, 0, .8);
      }
      `
    )
  }, [])

  return (
    <css-doodle></css-doodle>
  )
}

export default doodle
