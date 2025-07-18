import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import CustomDropdown from '../Components/CustomDropdown';
import "./Login.css";

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: '' });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.role) newErrors.role = 'Role is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setApiError('');
    setSuccessMsg('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setApiError('');
    setSuccessMsg('');
    // console.log(formData);

    try {
      const { data } = await axios.post('http://localhost:8000/api/auth/register', formData);
      setSuccessMsg('Registration successful!');
      setFormData({ name: '', email: '', password: '', role: '' });
      navigate("/login");
    } catch (error) {
      if (error.response?.data?.message) {
        const message = error.response.data.message;
        setApiError(message);

        if (message.toLowerCase().includes("already exists")) {
          setApiError(
            <>
              {message} &nbsp;
              <Link to="/login">Login instead</Link>
            </>
          );
        }
      } else {
        setApiError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login_container">
      <div className="login_form">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          <CustomDropdown
            value={formData.role}
            onChange={handleChange}
            placeholder="Select role"
            options={[
              { value: 'employee', label: 'Employee' },
              { value: 'manager', label: 'Manager' },
              { value: 'student', label: 'Student' },
            ]}
            error={errors.role}
          />

          {errors.role && <div style={{ color: 'red' }}>{errors.role}</div>}

          {apiError && <div style={{ color: 'red' }}>{apiError}</div>}
          {successMsg && <div style={{ color: 'green' }}>{successMsg}</div>}

          {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}

          <button disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>

          <p style={{ marginTop: '10px' }}>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
