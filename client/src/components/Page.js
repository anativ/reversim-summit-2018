import React, { Component } from 'react';
import Navbar from './Navbar';


class Page extends Component {

  componentDidMount() {
    document.title = this.props.title || "Reversim Summit 2017";
  }

    render() {
        const { children, isHome } = this.props;
        return (
            <div style={isHome ? {} : { paddingTop: 77 }}>
              <Navbar isHome={isHome}/>
              {children}
            </div>
        );
    }

}

export default Page;