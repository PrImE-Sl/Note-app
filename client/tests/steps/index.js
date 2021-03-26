const { autoBindSteps } = require('jest-cucumber')

const steps = [
	require('./common')
]

module.exports = {
	injectSteps: feature => {
		autoBindSteps([feature], steps)
	}
}