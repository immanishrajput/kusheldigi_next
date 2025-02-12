import React,{useState} from 'react';
const ContactForm3 = () => {
    const [user1, setUser1] = useState({
        name4: "",
        email4: "",
        requirement4: "",
      });

      const handleChange = (e) => {
        setUser1({ ...user1, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        // https://kushel-digi.onrender.com
        // http://localhost:5000
    
        const res = await fetch("https://backend.kusheldigi.com/contact3", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user1),
        });
        const data = await res.json();
        console.log(data);
        alert(data.message);
        setUser1({
          name4: "",
          email4: "",
          requirement4: ""
        });
      };
  return (
     <>
         <div className="exam_form">
              <h3>Build Your Team</h3>
              <p>Hire india’s best pre-vetted software developers on -demand</p>
              <form onSubmit={handleSubmit}>
                <div className="form_exam w-full">
                  <label htmlFor="name4">Your Name</label>
                  <input
                    className="w-full mt-3"
                    type="text"
                    placeholder="Enter your name"
                    required
                    name='name4'
                    value={user1.name4}
                    onChange={handleChange}
                    id='name4'
                    maxLength='32'
                  />
                </div>
                <div className="form_exam w-full mt-5">
                  <label htmlFor="email4">Your Email</label>
                  <input
                    className="w-full mt-3"
                    type="email"
                    placeholder="Enter your email"
                    required
                    name='email4'
                    value={user1.email4}
                    onChange={handleChange}

                    id='email4'
                  />
                </div>
                <div className="form_exam w-full mt-5">
                  <label htmlFor="requirement4">Your Requirement</label>
                  <textarea
                    className="w-full mt-3"
                    placeholder="Enter your Requirement"
                    cols="30"
                    rows="10"
                    required
                    name='requirement4'
                    value={user1.requirement4}
                    onChange={handleChange}
                    id='requirement4'
                  ></textarea>
                </div>
                <div className="form_exam_btn">
                  <button>Submit</button>
                </div>
              </form>
            </div>
     </>
  )
}

export default ContactForm3