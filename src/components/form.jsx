import React, {useState} from "react";
import "../styles/form.css";
import Name from "./name";
import Email from "./email";
import PhoneNumber from "./phoneNumber";
import Submit from "./submit";


function Form() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Input your name");
      return;
    } else if (!email) {
      alert("Input your email");
      return;
    } else if (!phone) {
      alert("Input your phone number");
      return;
    }
    alert(`Here are your details:
    Name: ${name}
    Email: ${email}
    Phone number: ${phone}`);
    setName(e.target.value = "");
    setEmail(e.target.value = "");
    setPhone(e.target.value = "");
  };
  

  return (
    <form
      className="form"
      autoComplete="on"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h1>Please Fill This Form:</h1>
      <Name
        type="text"
        value={name}
        label="name"
        handleChange={handleChangeName}
        placeholder="Enter your name"
      />

      <Email
        type="email"
        value={email}
        label="name"
        handleChange={handleChangeEmail}
        placeholder="Enter your email"
      />
      <PhoneNumber
        type="number"
        value={phone}
        label="name"
        handleChange={handleChangePhone}
        placeholder="Enter your phone number"
      />
      <Submit />
    </form>
  );
}
export default Form;