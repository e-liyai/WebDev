import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component {
    render() {
        return (
          <div>
            Hello {this.props.name}
          </div>
        );
    }
}

ReactDOM.render(
    <Menu name="Eugene" />,
    document.getElementById('nav-bar')
);