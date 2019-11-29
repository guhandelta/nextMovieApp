import React from 'react'

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.closeButton = null
    }
    closeModal = () => {
        this.closeButton.click()
    }
    submitMovie = () => {
        this.closeModal()//After clicking submit button, close button also is given the click event => window closes after submit
    }
    render() {
        return (
            <div className="">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Add Movie
            </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.props.children}
                            </div>
                            <div className="modal-footer">
                                <button ref={ele => this.closeButton = ele} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                {this.props.hasSubmit &&
                                    < button onClick={this.submitMovie} type="button" className="btn btn-primary">Save changes</button>
                                }
                                {/* In the callback() for ref, ele is how the button element is supplied to the callback() */}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}


// const Modal = (props) => {
//     let closeButton = null
//     const submitMovie = () => {
//         closeButton.click() //After clicking submit button, close butotn also is given the click event => window closes after submit
//     }
//     return (
//         <div className="">
//             <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//                 Add Movie
//             </button>

//             <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog" role="document">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
//                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <div className="modal-body">
//                             {props.children}
//                         </div>
//                         <div className="modal-footer">
//                             <button ref={ele => closeButton = ele} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                             {props.hasSubmit &&
//                                 < button onClick={submitMovie} type="button" className="btn btn-primary">Save changes</button>
//                             }
//                             {/* In the callback() for ref, ele is how the button element is supplied to the callback() */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     )
// }

export default Modal;