import React from 'react';
import Noty from 'noty';

export default class Blog extends React.Component {
  constructor(){
    super(...arguments);
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="container">
          <button onClick={()=>{
              Noty.setMaxVisible(3);
              const n = new Noty({
                  text: 'Notification text',
                  type: 'error',
                  timeout: 7000,
                  animation: {
                      open: 'animated bounceInRight', // Animate.css class names
                      close: 'animated bounceOutRight' // Animate.css class names
                  },
              }).show();
              n.setText('Hi again!');

          }
          }>Noty!</button>
      </div>
    )
  }
}