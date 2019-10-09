#!/usr/bin/env node

const fs = require('fs')
const consola = require('consola')
const { NuxtCommand } = require('@nuxt/cli')
const prompts = require('prompts')

NuxtCommand.run({
  name: 'command',
  description: 'generate new module directory',
  usage: 'command <moduleName>',
  async run ({ argv }) {
    let moduleName = argv._[0]
    if (!moduleName) {
      // required a moduleName
      const response = await prompts({
        type: 'text',
        name: 'moduleName',
        message: 'enter a moduleName!'
      })

      moduleName = response.moduleName
    }
  }
})
