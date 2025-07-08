import { useEffect, useState } from "react"
import Cookies from 'js-cookie';

export default function RegisterForm(){

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value 
        }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        try 
        {
          const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:8000';

          // Step 1: Get the CSRF cookie (Laravel will set it in cookies)
          await fetch(`${apiBase}/sanctum/csrf-cookie`, {
            credentials: 'include'
          });
          
          // Step 2: Get the token from cookies
          const csrfToken = Cookies.get('XSRF-TOKEN');

            const response = await fetch(`${apiBase}/api/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'X-XSRF-TOKEN': decodeURIComponent(csrfToken) // Laravel expects this
                },
                credentials: "include",
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if(!response.ok){
                if(data.errors){
                    setErrors(data.errors); // Laravel returns errors under 'errors'
                } else {
                    setErrors({general: "An unknown error occurred."})
                }
            } else {

                setSuccessMessage(data.message);

                setFormData({
                    username: "",
                    email: "",
                    password: "",
                    password_confirmation: ""
                });
            }
        }
        catch(err)
        {
            setErrors({ general: err.message })
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(successMessage){
            const timer = setTimeout(() => setSuccessMessage(''), 5000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    return (<div
              className="tab-pane fade"
              id="tab-item-register"
              role="tabpanel"
              aria-labelledby="register-tab"
            >
                { errors.general && <p className="text-danger md-5"> { errors.general } </p> }
                { successMessage && <small className="alert alert-success"> { successMessage } </small> }

              <div className="register-form">
                <form onSubmit={handleSubmit} action="#"
                    id="my-register-form"
                  name="register-form"
                  className="needs-validation"
                  noValidate=""
                >
                  <div className="form-floating mb-3">
                    <input
                      name="username"
                      type="text"
                      className="form-control form-control_gray"
                      id="customerNameRegisterInput"
                      placeholder="Username"
                      autoComplete="off"
                      value={formData.username}
                      onChange={handleChange}
                    />
                    <label htmlFor="customerNameRegisterInput">Username</label>
                    { errors.username && <small className="text-danger mb-5"> { errors.username[0] } </small> }
                  </div>
                  <div className="pb-3" />
                  <div className="form-floating mb-3">
                    <input
                      name="email"
                      type="email"
                      className="form-control form-control_gray"
                      id="customerEmailRegisterInput"
                      placeholder="Email address *"
                      autoComplete="off"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="customerEmailRegisterInput">
                      Email address *
                    </label>
                     { errors.email && <small className="text-danger mt-1"> { errors.email[0] } </small> }
                  </div>
                  <div className="pb-3" />
                  <div className="form-floating mb-3">
                    <input
                      name="password"
                      type="password"
                      className="form-control form-control_gray"
                      id="customerPasswodRegisterInput"
                      placeholder="Password *"
                      autoComplete="off"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <label htmlFor="customerPasswodRegisterInput">Password *</label>
                    { errors.password && <small className="text-danger mt-1"> { errors.password[0] } </small> }
                  </div>
                  <div className="pb-3" />
                  <div className="form-floating mb-3">
                    <input
                      name="password_confirmation"
                      type="password"
                      className="form-control form-control_gray"
                      id="password_confirmation"
                      placeholder="Password *"
                      autoComplete="off"
                      value={formData.password_confirmation}
                      onChange={handleChange}
                    />
                    <label htmlFor="password_confirmation">Confirm Password *</label>
                    { errors.password_confirmation && <small> { errors.password_confirmation[0] } </small> }
                  </div>
                  <div className="d-flex align-items-center mb-3 pb-2">
                    <p className="m-0">
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account, and
                      for other purposes described in our privacy policy.
                    </p>
                  </div>
                  <button
                    className="btn btn-primary w-100 text-uppercase"
                    type="submit"
                    disabled={loading}
                  >
                   { loading ? "Registering..." : "Register" }
                  </button>
                </form>
              </div>
            </div>)
}