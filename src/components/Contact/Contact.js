import React from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

import "./Contact.css";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mail: "",
      number: "",
      comment: "",
      submit: true,
      confirmMenu: false,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMailChange = this.handleMailChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formSubmitted = this.formSubmitted.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleMailChange(e) {
    this.setState({ mail: e.target.value });
  }
  handleNumberChange(e) {
    this.setState({ number: e.target.value });
  }
  handleCommentChange(e) {
    this.setState({ comment: e.target.value });
  }

  formSubmitted() {
    const a = this.state.submit;
    const b = this.state.confirmMenu;
    this.setState({ submit: !a });
    this.setState({ confirmMenu: !b });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.formSubmitted();

    emailjs
      .sendForm(
        "service_1d6oo6u",
        "template_rnrja4r",
        e.target,
        "F7eoeUPRLaGd4Yx7q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  render() {
    return (
      <div>
        <AnimatePresence>
          {this.state.submit && (
            <motion.div
              key={"List1"}
              exit={{
                height: "0vh",
                width: "0",
                opacity: 0,
                transition: { duration: 0.5 },
              }}
              className="form_Container"
            >
              <form onSubmit={this.handleSubmit} className="form">
                <div className={"form_Item_Container"}>
                  <input
                    className="form_Item"
                    placeholder="Name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    name="name"
                  />
                </div>
                <div className={"form_Item_Container"}>
                  <input
                    className="form_Item"
                    placeholder="E-Mail"
                    type="text"
                    value={this.state.mail}
                    onChange={this.handleMailChange}
                    name="mail"
                  />
                </div>
                <div className={"form_Item_Container"}>
                  <input
                    className="form_Item"
                    placeholder="Number"
                    type="text"
                    value={this.state.number}
                    onChange={this.handleNumberChange}
                    name="number"
                  />
                </div>
                <div className={"form_textArea_Container"}>
                  <textarea
                    className="form_Item"
                    placeholder="..."
                    type="text"
                    value={this.state.comment}
                    onChange={this.handleCommentChange}
                    name="comment"
                  />
                </div>
                <div>
                  <input className="form_Button" type="submit" value="Submit" />
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
        {this.state.confirmMenu && (
          <motion.div
            initial={{ y: "-10%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
            className={"titlebot"}
            exit={{ x: "-20%", opacity: 0 }}
          >
            Thank you for submitting your form
          </motion.div>
        )}
      </div>
    );
  }
}
