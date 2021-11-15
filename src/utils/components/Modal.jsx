import React, { useEffect, useState } from 'react';
import $ from 'jquery'; 
import 'bootstrap';

const Modal = ({ title, value, show }) => {
    const [user, setUser] = useState(value);
    // const [show, setShow] = useState(show);
    useEffect(() => {
        // const myModal = document.getElementById('myModal')
        console.log('[Cockpit.js] useEffect');
        // var modalToggle = document.getElementById('myModal') // relatedTarget
        // myModal.show(modalToggle)
        // $('#myModal').modal('show');
        // myModal.show();
        // myModal.modal('show');
        // console.log(show);
        // console.log("ok");
        // show ? $("#myModal").modal("show") : '';
    });
    // const myModal = document.querySelector("myModal")
    // console.log(myModal);
    const style = { display: "inline" }
    return (
        <div>
            <a class="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#myModal" role="button"></a>
            <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h6 style={style}>FullName: </h6><p style={style}>{ user.first_name + ' ' + user.last_name }</p>
                        <br/>
                        <br/>
                        <h6 style={style}>UserName: </h6><p style={style}>{ user.username }</p>
                        <br/>
                        <br/>
                        <h6 style={style}>Email: </h6><p style={style}>{ user.email }</p>
                        <br/>
                        <br/>
                        <h6 style={style}>Mobile: </h6><p style={style}>{ user.mobile }</p>
                        <br/>
                        <br/>
                        <h6 style={style}>Home Phone: </h6><p style={style}>{ user.home_phone }</p>
                        <br/>
                        <br/>
                        <h6 style={style}>Work Phone: </h6><p style={style}>{ user.work_phone }</p>
                        <br/>
                        <br/>
                        <h6>Work Address: </h6><p>{ user.work_address }</p>
                        <h6>Home Address: </h6><p>{ user.home_address }</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Modal;