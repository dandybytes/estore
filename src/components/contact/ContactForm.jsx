import React, {useState} from "react";
import PropTypes from "prop-types";
import {postFormNetlify, postFormFake} from "../../utils/utilsForm";
import "./ContactForm.scss";

const ContactForm = ({className}) => {
    let [formState, setFormState] = useState({name: "", email: "", subject: "", message: ""});

    const handleChange = e => setFormState({...formState, [e.target.name]: e.target.value});

    const handleSubmit = e => {
        e.preventDefault();

        // fake form-posting function below; replace with postFormNetlify to make it work
        postFormFake()
            .then(() => alert("Contact form successfully submitted!"))
            .then(() => setFormState({name: "", email: "", subject: "", message: ""}))
            .catch(error => alert(error));
    };

    let {name, email, subject, message} = formState;

    return (
        <div className="contact-form-container">
            <h1 className="contact-form-headline">Contact Us</h1>
            <form
                onSubmit={handleSubmit}
                className={className}
                method="POST"
                data-netlify="true"
                name="contact-form"
                autoComplete="off"
            >
                <input type="hidden" name="form-name" value="contact-form" />
                <input
                    onChange={handleChange}
                    value={name}
                    type="text"
                    className="text-input name-input"
                    placeholder="name"
                    name="name"
                />
                <input
                    onChange={handleChange}
                    value={email}
                    type="email"
                    className="text-input email-input"
                    placeholder="email"
                    name="email"
                    required
                />
                <input
                    onChange={handleChange}
                    value={subject}
                    type="text"
                    className="text-input subject-input"
                    placeholder="subject"
                    name="subject"
                />
                <textarea
                    onChange={handleChange}
                    value={message}
                    className="text-input message-input"
                    placeholder="enter message here..."
                    name="message"
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

ContactForm.propTypes = {
    className: PropTypes.string
};

ContactForm.defaultProps = {
    className: "contact-form"
};

export default ContactForm;
