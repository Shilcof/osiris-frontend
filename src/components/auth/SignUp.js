import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { resetErrors } from "../../actions/errorActions"
import { createSeller } from "../../actions/authActions"

const SignUp = (props) => {

    const errors = useSelector(state=>state.errors)

    const dispatch = useDispatch()

    useEffect(()=>{
        return () => {
            dispatch(resetErrors())
        }
    }, [dispatch])

    const [seller, setSeller] = useState({
        email: "",
        password: "",
        password_confirmation: ""
    })

    const handleChange = e => {
        setSeller({...seller, [e.target.id]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(resetErrors())
        dispatch(createSeller(seller))
    }

    const handleClick = () => {
        props.history.push(`/login`)
    }

    return (
        <div className="container"  style={{maxWidth: "500px"}}>
            <div className="text-center py-4">
                <h1 style={{fontSize: 30}}>Sign up or log in to create your own listings</h1>
            </div>
            <form onSubmit={handleSubmit}>

                <div className="form-row" >
                    <div className="col-md-12 mb-3">
                        <label htmlFor="email" className="form-label" >Email</label>
                        <input type="text" id="email" value={seller.email} onChange={handleChange} 
                            className={errors.email ? "form-control is-invalid" : "form-control"} 
                        ></input>
                        {errors.email ? <div className="invalid-feedback" >Email {errors.email.join(", ")}</div> : null}
                    </div>
                </div>

                <div className="form-row" >
                    <div className="col-md-6 mb-3">
                        <label htmlFor="password" className="form-label" >Password</label>
                        <input type="password" id="password" value={seller.password} onChange={handleChange} 
                            className={errors.password ? "form-control is-invalid" : "form-control"}
                        ></input>
                        {errors.password ? <div className="invalid-feedback" >Password {errors.password.join(", ")}</div> : null}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="password_confirmation" className="form-label" >Confirm password</label>
                        <input type="password" id="password_confirmation" value={seller.password_confirmation} onChange={handleChange} 
                            className={errors.password_confirmation ? "form-control is-invalid" : "form-control"}
                        ></input>
                        {errors.password_confirmation ? <div className="invalid-feedback" >Confirmation {errors.password_confirmation.join(", ")}</div> : null}
                    </div>
                </div>

                <input type="submit" className="btn btn-outline-primary btn-block" value="Sign up"></input>
            </form>
            <button onClick={handleClick} className="btn btn-outline-secondary btn-block my-3">
                Log in
            </button>
        </div>
    )
}

export default SignUp