import React from 'react'
import { Translation } from 'react-i18next'

class Home extends React.Component {
	render() {
		return (
			<div className='container startt'>
				<Translation>
					{(t) => <h1>{t('description.CreateApplication')}</h1>}
				</Translation>
			</div>
		)
	}
}

export default Home