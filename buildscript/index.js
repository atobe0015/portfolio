const shellExec = require('shell-exec')

shellExec('echo Hi!').then(res => {
  console.log(res)
}).catch(e => {
  console.log(e)
})
