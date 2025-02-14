import React from 'react';


/**
 * Clock component that displays the current date and time.
 * The time updates every second.
 * 
 * @extends React.Component
 */
class Clock extends React.Component {

  /**
   * Creates an instance of the Clock component.
   * 
   * @param {Object} props - The props for the component.
   */
  constructor(props) {
    // Initial state with the current time
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }

  /**
   * Lifecycle method that runs after the component output has been rendered to the DOM.
   * Starts the timer to update the time every second.
   */
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

   /**
   * Lifecycle method that runs right before the component is removed from the DOM.
   * Clears the timer.
   */
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  /**
   * Updates the state with the current time.
   */
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  /**
   * Renders the current time.
   * 
   * @returns {React.ReactNode} The time to be displayed.
   */
  render() {
    return (
      <span>
        {this.state.time}.
      </span>
    );
  }
}

export default Clock;