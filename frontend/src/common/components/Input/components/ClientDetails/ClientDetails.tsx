import React, { useState } from 'react'

function ClientDetails() {
  const [client, setClient] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setClient(values => ({...values, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(client);
  }
  return (
    <div>
        <div className='client-details-wrapper'>
            <form onSubmit={handleSubmit}>
                <div>
                  <label>Client Name</label>
                <input type='text' id='name' name='name' onChange={handleChange} required></input>
                </div>
                <div>
                  <label>Logo</label>
                  <input type='file' id='logo' name='logo' onChange={handleChange} required></input>
                </div>
                <div>
                  <label>Tel no.</label>
                  <input type='tel' id='phone' name='phone' autoComplete='true' required></input>
                </div>
                <div>
                  <label>Email</label>
                  <input type='email' id='email' name='email'  onChange={handleChange} required></input>
                </div>
                <div>
                  <label>Address</label>
                  <input type='text' id='address' name='address' onChange={handleChange} required></input>
                </div>
                <div>
                  <label>Null</label>
                  <input type='text' id='null' name='null' onChange={handleChange} required></input>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ClientDetails;