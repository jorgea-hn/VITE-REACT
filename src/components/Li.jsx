import { Link } from "react-router-dom"

function Li(props){
    return (
        <Link className="link" to={props.link}>{props.text}</Link>
    )
}
export default Li