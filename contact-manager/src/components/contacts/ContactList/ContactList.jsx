import React from 'react'
import { Link } from 'react-router-dom'

const ContactList = () => {
    return (
        <>
            <section className='contact-search p-3'>
                <div className='container'>
                    <div className='grid'>
                        <div className='row'>
                            <div className='col'>
                                <p className='h3'>Contact Manager
                                <Link to={'/contacts/add'} className='btn btn-primary ms-2'><i className='fa fa-plus-circle me-2'/>New</Link>
                                </p>
                                <p className='fst-italic'>Hello this is a simple crud application that i am going to make i hope all of you guys like to see this beautiful contact manager app.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactList;
