import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap';
import { HeaderIconsBox, DropDownMenu } from '../';
import { AiOutlineMenu } from 'react-icons/ai'

const OffCanvas = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="h-100 d-flex align-items-center justify-content-center">
            <AiOutlineMenu size="1.5rem" color="#787878" onClick={handleShow} style={{ height: '100%' }} />
            <Offcanvas className="bg-light h-100" show={show} onHide={handleClose} placement="end" name="start">
                <Offcanvas.Header closeButton className="h-auto">
                    <Offcanvas.Title className="h-auto">منو</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="w-100 h-100">
                    <div className="mb-5 h-auto">
                        <DropDownMenu />
                    </div>
                    <div className="headerIcons h-auto">
                        <HeaderIconsBox />
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div >
    )
}

export default OffCanvas
