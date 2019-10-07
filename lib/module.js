const { resolve, join } = require('path')
const fg = require('fast-glob')

function requireUncached (module) {
  delete require.cache[require.resolve(module)]
  return require(module)
}

const DIR = 'modules'

const getModuleRouter = (routerFileName, modulePath) => fg.sync(`*/${routerFileName}.{js|mjs|ts}`, {
  deep: 2,
  onlyFiles: true,
  cwd: modulePath
})

// const getModuleStore = (storeDirName, modulePath) => fg.sync(`*/${storeDirName}/**/*.{js|mjs|ts}`, {
//   onlyFiles: true,
//   cwd: modulePath
// })

// use file path to get esm file
const pathToEsFile = (path, modulePath) => {
  return requireUncached(resolve(modulePath, path)).default
}

const getModuleNameFromGlobPath = path => path.split('/')[0]

const replaceComponentPath = function (router = [], modulePath, moduleName) {
  if (!Array.isArray(router)) {
    return []
  }

  for (let i = 0; i < router.length; i++) {
    const route = router[i]
    route.chunkName = route.chunkName || join(moduleName, route.component)
    route.component = resolve(modulePath, moduleName, route.component)
    if (route.children && route.children.length) {
      route.children = replaceComponentPath(route.children, modulePath, moduleName)
    }
  }

  return router
}

module.exports = function (moduleOptions) {
  const defaultOptions = {
    modulesPath: resolve(this.options.srcDir, DIR),
    moduleRouterName: 'router',
    moduleStoreDir: 'store'
  }

  const options = {
    ...defaultOptions,
    ...moduleOptions
  }

  // watch files under src/modules
  this.options.build.watch.push(`${options.modulesPath}/**/*`)

  // use function to create multiple instance
  const routerPaths = () => getModuleRouter(options.moduleRouterName, options.modulesPath)

  // const storePaths = () => getModuleStore(options.moduleStoreDir, options.modulesPath)

  const moduleRouterCollection = () => routerPaths().reduce((router, path) => {
    const moduleName = getModuleNameFromGlobPath(path)
    const rawRouter = pathToEsFile(path, options.modulesPath)
    const treatRouter = replaceComponentPath(rawRouter, options.modulesPath, moduleName)
    router = router.concat(treatRouter)
    return router
  }, [])

  // storePaths.map()

  // extend custom router
  this.extendRoutes((routes, resolve) => {
    routes = routes.concat(moduleRouterCollection())
    return routes
  })

  // register vuex store
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'modules-store.js',
    options
  })
}

module.exports.meta = require('../package.json')
