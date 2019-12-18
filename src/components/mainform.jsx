import React from "react";

//relative imports
import Header from "./header";
import Footer from "./footer";
import Step1 from "./steps/step1";

class MainForm extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 1
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

  handleChange = event => {};

  handleView = () => {
    switch (this.state.step) {
      case 1:
        return <Step1 />;

      case 2:
        return <h1>step2</h1>;

      case 3:
        return <h1>step3</h1>;

      default:
        return <h1>no steps</h1>;
    }
  };

  render() {
    return (
      <main className="main">
        <Header />
        {this.handleView()}
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
