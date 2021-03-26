import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"

const Links = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (language) => { i18n.changeLanguage(language) }

    return (
        <>
            <Link to="/" className="navbar-brand">
                Full stack note app
            </Link>
            <div className='collpase navbar-collapse'>
                <div className='navbar-nav mr-auto' >
                    <div className='collpase navbar-collapse'>
                        <Link to="/notes/list" className="nav-link Notes-List">{t("description.NotesList")}</Link>
                    </div>

                    <div className='collpase navbar-collapse'>
                        <Link to="/notes/create" className="nav-link">{t("description.CreateNote")}</Link>
                    </div>
                </div>
                <button className='btn btn-primary navbut' onClick={() => changeLanguage("en")}>EN</button>
                <button className='btn btn-primary' onClick={() => changeLanguage("ru")}>RU</button>
            </div>
        </>
    )
}

export default Links
