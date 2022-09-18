import React from 'react';
import { Link } from 'react-router-dom';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';

function Navbar() {

    const leftContents = (
        <React.Fragment>
            <Link to="/auth/login">
                <Button label="Login" icon="pi pi-user" className="p-button-rounded p-button-primary mr-2" />
            </Link>

           <Link to="/auth/register">
                <Button label="Register" icon="pi pi-user-plus" className="p-button-rounded p-button-secondary" />
           </Link>
        </React.Fragment>
    );

    const rightContents = (
        <React.Fragment>
            <Link to="/">
                <Button label="Main Page" icon="pi pi-prime" className="p-button-rounded p-button-help" />
            </Link>
        </React.Fragment>
    );
    
    return (
        <Toolbar left={leftContents} right={rightContents} />
    )
}

export default Navbar;