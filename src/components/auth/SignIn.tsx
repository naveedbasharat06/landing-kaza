import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import forgotPasswordImg from "../../assets/forgot-password.png";
import signUpRemove from "../../assets/img/sign-up-remove.png";
import { signIn } from '../../apis/service';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

// Define validation schema
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const SignIn = () => {
const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema : validationSchema,
        onSubmit: async (values, {resetForm, setSubmitting}) => {
            try {
                const response = await signIn(values);
                if(response?.meta?.code === 200){
                   toast.success("Login successful");
                   resetForm();
                   setSubmitting(false)
                    localStorage.setItem("token", response?.data?.token)
                    navigate("/")
                }
            } catch (error:any) {
                console.log("Login failed:", error?.response?.data?.data?.error);
              toast.error(error?.response?.data?.data?.error || "Login failed");
                 
            } finally {
                setSubmitting(false)
            }
        },
    });

    return (
        <div>
            
            <div className="container w-100">
                <div
                    className="left-section"
                    style={{
                        backgroundImage: 'url(assets/img/sign-up-img.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="logo">
                        <img src="assets/img/image-footer-logo.png" width="150px" />
                    </div>
                    <h2 className="tagline">Swap your place, explore the world</h2>
                </div>

                <div className="right-section">
                    <a href="index.html" className="look-around">
                        <img src={signUpRemove} width="29.84px" />
                    </a>

                    <div className="form-container">
                        <h1>Sign In</h1>

                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Add your email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div style={{ color: 'red' }}>{formik.errors.email}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="password-input-container">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <button type="button" id="toggle-password">
                                        <i data-lucide="eye"></i>
                                    </button>
                                </div>
                                {formik.touched.password && formik.errors.password && (
                                    <div style={{ color: 'red' }}>{formik.errors.password}</div>
                                )}
                            </div>


                            <div className="form-forgot">
                                <a href="/forgot-password"><img src={forgotPasswordImg} width="24px" />  Forgot your password?</a>
                            </div>
                            <button type="button" className="create-account-btn">{formik.isSubmitting ? "Signing in..." : "Sign in"}</button>
                            <div className="dont-acc">
                                <p>Don't have an account? <a href="/signup"><img src="assets/img/register-icon.png" width="24px" /> Register</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div></div>
    )
}

export default SignIn