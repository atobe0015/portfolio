import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  '../components/atoms',
  false,
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach((fileName: string) => {
  const componentConfig = requireComponent(fileName)

  const name: string | undefined = fileName.split('/').pop()
  if (name) {
    const finalizeName = name.replace(/\.\w+$/, '')
    const componentName = upperFirst(camelCase(finalizeName))
    Vue.component(componentName, componentConfig.default || componentConfig)
  }
})
