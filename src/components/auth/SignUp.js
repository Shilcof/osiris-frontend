import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { resetErrors } from "../../actions/errorActions"
import { createSeller } from "../../actions/authActions"
import { Redirect } from "react-router-dom"

const SignUp = (props) => {

    const currentSeller = useSelector(state=>state.auth.currentSeller)
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
        dispatch(createSeller(seller))
    }

    if (currentSeller) props.history.push(`/about`)

    return (
        <form onSubmit={handleSubmit}>

            <div className="form-row" >
                <div className="col-md-12 mb-3">
                    <label htmlFor="email" className="form-label" >Email</label>
                    <input type="text" id="email" value={seller.email} onChange={handleChange} 
                        className={errors.name ? "form-control is-invalid" : "form-control"} 
                    ></input>
                    {errors.email ? <div className="invalid-feedback" >Email {errors.email.join(", ")}</div> : null}
                </div>
            </div>

            <div className="form-row" >
                <div className="col-md-6 mb-3">
                    <label htmlFor="password" className="form-label" >Password</label>
                    <input type="text" id="password" value={seller.password} onChange={handleChange} 
                        className={errors.password ? "form-control is-invalid" : "form-control"}
                    ></input>
                    {errors.password ? <div className="invalid-feedback" >Password {errors.password.join(", ")}</div> : null}
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="password_confirmation" className="form-label" >Confirm password</label>
                    <input type="text" id="password_confirmation" value={seller.password_confirmation} onChange={handleChange} 
                        className={errors.password_confirmation ? "form-control is-invalid" : "form-control"}
                    ></input>
                    {errors.password_confirmation ? <div className="invalid-feedback" >Confirmation {errors.password_confirmation.join(", ")}</div> : null}
                </div>
            </div>

            <input type="submit" className="btn btn-outline-primary btn-block" value="Sign up"></input>

        </form>
    )
}

export default SignUp