import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import 'react-table/react-table.css'
import './pages.css'
import { withTranslation } from 'react-i18next'


class UpdateNote extends Component {
    updateUser = event => {
        event.preventDefault()
        window.location.href = `/notes/update/${this.props.id}`
    }
    render() {
        const { t } = this.props
        return <div className='updatebtn' onClick={this.updateUser}>{t('description.Update')}</div>
    }
}

class DeleteNote extends Component {
    deleteUser = event => {
        event.preventDefault()
        if (window.confirm(`Do tou want to delete the note ${this.props.id} permanently?`,)) {
            api.deleteNoteById(this.props.id)
            window.location.reload()
        }
    }
    render() {
        const { t } = this.props
        return <div className='deletebtn' onClick={this.deleteUser}>{t('description.Delete')}</div>
    }
}

class NotesList extends Component {
    constructor(props) {
        super(props)
        this.state = { notes: [], columns: [], isLoading: false, }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllNotes().then(notes => {
            this.setState({
                notes: notes.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { notes, isLoading } = this.state
        const { t } = this.props

        const columns = [
            { Header: 'ID', accessor: '_id', filterable: true, },
            { Header: 'Name', accessor: 'name', filterable: true, },
            { Header: 'Note', accessor: 'note', filterable: true, },
            {
                Header: '', accessor: '', Cell: props => {
                    return <span><DeleteNote id={props.original._id} t={t} /></span>
                },
            },
            {
                Header: '', accessor: '', Cell: props => {
                    return <span><UpdateNote id={props.original._id} t={t} /></span>
                },
            },
        ]

        let showTable = true
        if (!notes.length) { showTable = false }

        return (
            <div className='wrapperlist'>
                {showTable ? (
                    <ReactTable
                        data={notes}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )
                    : <h2>{t('description.NoAvailableNotes')}</h2>}
            </div>
        )
    }
}

export default withTranslation()(NotesList)
