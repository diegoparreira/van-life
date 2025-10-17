import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import './Login.css';
import { loginUser } from "../../api";
import ErrorDetail from "../../components/ErrorDetail/ErrorDetail";

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle");
    const [error, setError] = React.useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from ?? './host';
    const message = location.state?.message ?? null;

    useEffect(() => {
        const logged = localStorage.getItem('logged');

        if (logged === 'true') navigate(from);
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting");
        setError(null);
        const user = loginUser(loginFormData)
            .then(data => {
                console.log(data);
                setStatus("idle");
                setError(null);
                localStorage.setItem('logged', 'true');
                // Replace is used to remove login from history
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err);
                setStatus("idle");
            })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message ? <span>{message}</span> : null}
            {error ? <ErrorDetail error={error} /> : null}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status === 'submitting'}>
                    {status === 'submitting' ? "Logging in..." : "Log in"}
                </button>

            </form>
        </div>
    )

}