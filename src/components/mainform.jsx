import React from "react";

//relative imports
import Header from "./header";
import Footer from "./footer";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";

class MainForm extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      username: null,
      email: null,
      password: null,
      fullname: null,
      country: null,
      gender: null,
      aboutyou: null,
      paymenttype: null,
      creditcard: null,
      expirationdate: null,
      nameoncard: null
    };
  }

  nextStep = () => {
    if (this.state.step < 3) {
      this.setState({ step: this.state.step + 1 });
    }
  };

  prevStep = () => {
    if (this.state.step > 1) {
      this.setState({ step: this.state.step - 1 });
    }
  };

  errorHandling = () => {
    if (this.state.step === 1) {
      if (
        this.state.username &&
        this.state.email &&
        this.state.email.includes("@") &&
        this.state.password
      ) {
        this.nextStep();
      }
      if (!this.state.username) {
        this.setState({ username: "user name can't be empty!" });
      }
      if (!this.state.email) {
        this.setState({ email: "Email can't be empty!" });
      }
      if (this.state.email && !this.state.email.includes("@")) {
        this.setState({ email: "Invalid Email format!" });
      }
      if (!this.state.password) {
        this.setState({ password: "Password can't be empty!" });
      }
    } else if (this.state.step === 2) {
      if (
        this.state.fullname &&
        this.state.country &&
        this.state.gender &&
        this.state.aboutyou
      ) {
        this.nextStep();
      }
      if (!this.state.fullname) {
        this.setState({ fullname: "Please enter your Full name!" });
      }
      if (!this.state.gender) {
        this.setState({ gender: "please select a gender" });
      }
      if (!this.state.aboutyou) {
        this.setState({ aboutyou: "please Write something about you!" });
      }
    } else if (this.state.step === 3)
      if (
        this.state.paymenttype &&
        this.state.creditcard &&
        this.state.expirationdate &&
        this.state.nameoncard
      ) {
        this.nextStep();
      } else {
        alert("please fill up gently");
      }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleView = () => {
    switch (this.state.step) {
      case 1:
        return (
          <Step1
            handleChange={this.handleChange}
            info={this.state}
            error={this.state.err}
          />
        );

      case 2:
        return (
          <Step2
            handleChange={this.handleChange}
            info={this.state}
            error={this.state.err}
          />
        );

      case 3:
        return (
          <Step3
            handleChange={this.handleChange}
            info={this.state}
            error={this.state.err}
          />
        );

      default:
        return <Step1 />;
    }
  };

  render() {
    return (
      <>
        <p className="form_title">Simplicity Clean Multi-step Sign-up Form</p>
        <main className="main">
          <Header step={this.state.step} />
          {this.handleView()}
          <Footer
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            step={this.state.step}
            info={this.state}
            errorHandling={this.errorHandling}
          />
        </main>
      </>
    );
  }
}

export default MainForm;
