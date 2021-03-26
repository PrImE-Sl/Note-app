import React, { Component } from 'react'
import api from '../api'
import './pages.css'
import { withTranslation } from 'react-i18next'


class NotesUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = { id: this.props.match.params.id, name: '', note: '' }
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

    handleUpdateNote = async () => {
        const { id, name, note } = this.state
        const payload = { name, note }

        await api.updateNoteById(id, payload).then(res => {
            window.alert(`Note updated successfully!`)
            this.setState({ name: '', note: '' })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const note = await api.getNoteById(id)

        this.setState({
            name: note.data.data.name,
            note: note.data.data.note,
        })
    }

    render() {
        const { name, note } = this.state
        const { t } = this.props
        return (
            <div className='form-group Wrapper'>
                <h1>{t('description.UpdateNote')}</h1>

                <label className='Label'>{t('description.Name')}: </label>
                <input className='form-control'
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <label className='Label'>{t('description.Note')}: </label>
                <input className='form-control'
                    type="text"
                    value={note}
                    onChange={this.handleChangeInputNote}
                />

                <button className='but btn btn-primary' onClick={this.handleUpdateNote}>{t('description.UpdateNote')}</button>
                <a className='but btn btn-danger' href={'/notes/list'}>{t('description.Cancel')}</a>
            </div>
        )
    }
}

export default withTranslation()(NotesUpdate)
