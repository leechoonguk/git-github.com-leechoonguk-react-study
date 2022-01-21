function Modal(props){
    return (
        <div className="modal">
            <p>확인</p>
            <button className="btn btn--alt" onClick={props.onCancel}>Cancel</button>
            <button className="btn btn--alt" onClick={props.onConfirm}>Confirm</button>
        </div>
    );
}

export default Modal;