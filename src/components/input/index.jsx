import "./style.css"

function Input(props){
    return(
        <>
        <label>{props.title}</label>
        <input type={props.type} placeholder={props.placeholder}/>
        </>
    )

}


export default Input;