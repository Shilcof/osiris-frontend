import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { resetErrors } from "../../actions/errorActions"
import { login } from "../../actions/authActions"

const LogIn = (props) => {

    const errors = useSelector(state=>state.errors)

    const dispatch = useDispatch()

    useEffect(()=>{
        return () => {
            dispatch(resetErrors())
        }
    }, [dispatch])

    const [seller, setSeller] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        setSeller({...seller, [e.target.id]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(resetErrors())
        dispatch(login(seller))
    }

    const handleClick = () => {
        props.history.push(`/signup`)
    }

    return (
        <div className="container"  style={{maxWidth: "500px"}}>
            <div className="text-center py-4">
                <h1 style={{fontSize: 30}}>Log in or sign up to create your own listings</h1>
            </div>
            <form onSubmit={handleSubmit}>

                <div className="form-row" >
                    <div className="col-md-12 mb-3">
                        <label htmlFor="email" className="form-label" >Email</label>
                        <input type="text" id="email" value={seller.email} onChange={handleChange} 
                            className="form-control"
                        ></input>
                    </div>
                </div>

                <div className="form-row" >
                    <div className="col-md-12 mb-3">
                        <label htmlFor="password" className="form-label" >Password</label>
                        <input type="password" id="password" value={seller.password} onChange={handleChange} 
                            className={Object.keys(errors).length > 0 ? "form-control is-invalid" : "form-control"}
                        ></input>
                        {Object.keys(errors).length > 0 ? <div className="invalid-feedback" >{errors}</div> : null}
                    </div>
                </div>

                <input type="submit" className="btn btn-outline-primary btn-block" value="Log in"></input>
            </form>
            <button onClick={handleClick} className="btn btn-outline-secondary btn-block my-3">
                Sign up
            </button>
        </div>
    )
}

export default LogIn