const { loadFeature } = require('jest-cucumber')
const { injectSteps } = require('../steps')

injectSteps(loadFeature('./search.feature', { loadRelativePath: true }))