const { resolve } = require('path')
const fg = require('fast-glob')

const getModuleRouter = (routerFileName, pwd) => fg.sync(`*/${routerFileName}`, {
  deep: 2,
  onlyFiles: true,
  cwd: pwd
})

const getModuleStore = (storeDirName, pwd) => fg.sync(`*/${storeDirName}/**/*.{js|mjs|ts}`, {
  onlyFiles: true,
  cwd: pwd
})

module.exports = function (moduleOptions) {
  const defaultOptions = {
    modulesPath: resolve(this.options.srcDir, 'modules'),
    moduleRouterName: 'router.js',
    moduleStoreDir: 'store'
  }

  const options = {
    ...defaultOptions,
    // ...this.options['@femessage/nuxt-modularize'],
    ...moduleOptions
  }

  const routerPaths = getModuleRouter(options.moduleRouterName, options.modulesPath)

  const storePaths = getModuleStore(options.moduleStoreDir, options.modulesPath)

  routerPaths.map((routerFile) => {
    // const router = require(resolve(options.modulesPath, routerFile))
  })

  storePaths.map()

  // extend custom router
  this.extendRoutes((routes, resolve) => {

  })

  // register vuex store
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'modules-store.js',
    options
  })
}

module.exports.meta = require('../package.json')
