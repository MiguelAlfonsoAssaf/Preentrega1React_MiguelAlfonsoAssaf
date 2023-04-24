import { Fragment } from 'react';
import './Navbaritems.css';

const Navbaritems = (props) => {
    return (
        <Fragment>
            <li className="nav-item">
                <p className="nav-link itemstyle" aria-current="page">{props.text}</p>
            </li>
        </Fragment>
    )
}

export default Navbaritems
