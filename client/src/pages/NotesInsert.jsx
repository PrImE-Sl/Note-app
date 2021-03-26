import React, { Component } from 'react'
import api from '../api'
import './pages.css'
import { withTranslation } from 'react-i18next'


class NotesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = { name: '', note: '' }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputNote = async event => {
        const note = event.target.validity.valid
            ? event.target.value
            : this.state.note
        this.setState({ note })
    }

    handleIncludeNote = async () => {
        const { name, note } = this.state
        const payload = { name, note }

        await api.insertNote(payload).then(res => {
            window.alert(`Note inserted successfully`) && <div data-testid="success"></div>
            this.setState({ name: '', note: '' })
        })
    }

    render() {
        const { name, note } = this.state
        const { t } = this.props
        return (

            <div className='form-group Wrapper'>
                <h1 className="App-title">{t('description.CreateNote')}</h1>

                <label className='Label'>{t('description.Name')}: </label>
                <input className='form-control' data-testid="name"
                    type="text" value={name} onChange={this.handleChangeInputName} />

                <label className='Label'>{t('description.Note')}: </label>
                <input className='form-control'
                    type="text" data-testid="note"
                    value={note}
                    onChange={this.handleChangeInputNote}
                />

                <button className='btn btn-primary BUT' data-testid="add" onClick={this.handleIncludeNote}>{t('description.AddNote')}</button>
                <a className='btn btn-danger BUT' href={'/notes/list'}>{t('description.Cancel')}</a>
            </div>
        )
    }
}

export default withTranslation()(NotesInsert)
