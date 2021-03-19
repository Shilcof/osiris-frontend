import { useDispatch } from "react-redux"

import { logout } from "../../actions/authActions"

const LogOut = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logout())
    }

    return (
        <button onClick={handleClick} className="btn btn-outline-danger" >
            Log out
        </button>
    )
}

export default LogOut