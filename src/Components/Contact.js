import {React,useState,useRef} from 'react'
import './Contact.css'
import emailjs from "@emailjs/browser";
import contact from '../assests/imgs/contact-img.svg'
export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    lname:"",
    phone:"",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'amrm96754@gmail.com',
        'template_9p9p1lf',
        {
          from_name: form.name,
          to_name: "Mohamed Amr",
          from_lname: form.lname,
          to_name: "Mohamed Amr",
          from_phone: form.phone,
          to_name: "Mohamed Amr",
          from_email: form.email,
          to_email: "amrm96754@gmail.com",
          message: form.message,
          // lname:form.lname,
          // phone:form.phone
        },
        'jUy7F9Ft4Btiww_px'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
            lname:"",
            phone:"",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <>
      <div className="contact" id='btncon'>
        <div className="box">
            <img src={contact} alt="" />
            <div className="text">
                <h2>Get In Touch</h2>
                <form className='form' ref={formRef} onSubmit={handleSubmit} >
                  
                    <input name='name' className='txt1 txt' value={form.name} type="text" placeholder='First Name' onChange={handleChange} />
                    <input name='lname' className='txt2 txt' value={form.namel} type="text" placeholder='Last Name' onChange={handleChange} />
                    <input name='email' className='txt3 txt' value={form.email} type="email" placeholder='Email' onChange={handleChange} />
                    <input name='phone' className='txt4 txt' value={form.phone} type="text" placeholder='Phone' onChange={handleChange} />
                    <textarea name='message'  value={form.message} placeholder='Enter Your Message' onChange={handleChange}></textarea>
                    <button>{loading?"Sending...":"Send"}</button>
                </form>
                
            </div>
        </div>
      </div>
    </>
  )
}
