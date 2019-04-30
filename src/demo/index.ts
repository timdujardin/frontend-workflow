import {JSBreakpoint} from './../vendor/fw/js-breakpoint/JSBreakpoint'

import './demo.scss'

// JSBreakpoint example

const elJSBreakpointOutput = document.getElementById('js-breakpoint-example')

// When running the code in DEV mode, this will output "null" as css is not loaded when JS is ready
console.log(JSBreakpoint.getInstance().getBreakpoint())

// That's why we need to wait for css to load
window.addEventListener('load', () => {
  // And try and get the breakpoint again
  // You won't get this problem when you'll create a production build
  console.log(JSBreakpoint.getInstance().getBreakpoint())
  elJSBreakpointOutput.innerHTML = `Current breakpoint: ${JSBreakpoint.getInstance().getBreakpoint()}`
  JSBreakpoint.getInstance().on('changed', ({prevBreakpoint, breakpoint, sizeChange}) => {
    console.log(
      `Changed to: ${breakpoint} from: ${prevBreakpoint}. Window is getting ${sizeChange > 0 ? 'bigger' : 'smaller'}`
    )

    elJSBreakpointOutput.innerHTML = `Breakpoint changed from "${prevBreakpoint}" to "${breakpoint}". Window is getting ${
      sizeChange > 0 ? 'bigger' : 'smaller'
    }`
  })
})
