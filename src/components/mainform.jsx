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
      username: "",
      email: "",
      password: ""
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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleView = userInfo => {
    switch (this.state.step) {
      case 1:
        return <Step1 handleChange={this.handleChange} info={userInfo} />;

      case 2:
        return <Step2 handleChange={this.handleChange} info={userInfo} />;

      case 3:
        return <Step3 handleChange={this.handleChange} info={userInfo} />;

      default:
        return <Step1 />;
    }
  };

  render() {
    let userInfo = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    return (
      <main className="main">
        <Header step={this.state.step} />
        {this.handleView(userInfo)}
        <Footer
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          step={this.state.step}
        />
      </main>
    );
  }
}

export default MainForm;
