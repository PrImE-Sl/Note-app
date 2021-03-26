import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NotesList, NotesInsert, NotesUpdate, Home } from '../pages'
import { NavBar } from '../components'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/notes/list" exact component={NotesList} />
                <Route path="/notes/create" exact component={NotesInsert} />
                <Route path="/notes/update/:id" exact component={NotesUpdate} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
