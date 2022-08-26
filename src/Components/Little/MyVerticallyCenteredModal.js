import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useMediaQuery } from 'react-responsive'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyVerticallyCenteredModal = (props) => {
    const form = useRef();
    const isM_Or_L = useMediaQuery({
        query: '(min-width: 700px)'
      })
    const sendEmail = (e) => {
        e.preventDefault();
        //   YOUR_SERVICE_ID
        emailjs.sendForm('service_7tsmkdj', 'template_pryiqsj', form.current, '4ZifXAKalESRAW5qN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
           
    };

    const handleClick = ()=>{
        props.setShow(false) 
        toast('🦄 Message sent!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Send a message
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="card mb-3" style={{ maxWidth: "740px" , border:"0px"  }}>
                    <div className="row g-0">
                        <div className="col-md-6 d-flex justify-content-center "> 
                            <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg" className="img-fluid rounded-start h-100" alt="iage" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">

                                <Form ref={form} onSubmit={sendEmail}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Your name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Write your name"
                                            autoFocus
                                            name="user_name"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Type random email"
                                            autoFocus
                                            name="user_email"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label>Write your message</Form.Label>
                                        <Form.Control as="textarea" required  name="message"  rows={3} />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Button variant="primary" onClick={handleClick} type="submit" value="Send"  >Send</Button>
                                    </Form.Group>
                                </Form>

                            </div>
                        </div>
                    </div>
                </div>


            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>

            </Modal.Footer>
            <ToastContainer  style={{width: isM_Or_L ? false : "30%" }}/> 
        </Modal>
        
    )
}

export default MyVerticallyCenteredModal