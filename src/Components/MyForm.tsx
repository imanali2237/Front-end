import { useState } from "react";

function MyForm(){
     const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    city: '',
    bio: '',
    role: 'developer',
  });

  const handleChange=(    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{
    const {name,value}=event.target
    setFormData(prev=>({...prev,[name]:value}))

  }
    const handleSubmit = (e:React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
    return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
      <input name="email"    value={formData.email}    onChange={handleChange} placeholder="Email" />
      <input name="age"      value={formData.age}      onChange={handleChange} placeholder="Age" />
      <input name="city"     value={formData.city}     onChange={handleChange} placeholder="City" />
      <textarea name="bio"   value={formData.bio}      onChange={handleChange} placeholder="Bio" />
      <select name="role"    value={formData.role}     onChange={handleChange}>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="manager">Manager</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
export default MyForm