import React, { Component } from 'react';


class Container extends Component {
  
  /**
   * This component follows the Bootstrap Container component:
   * http://getbootstrap.com/docs/4.1/layout/overview/
   * 
   * This Container component has two options:
   * 
   * The first option is a normal Bootstrap Container
   * 
   * <Container layout="normal">
   *  <!-- Content here -->
   * </Container>
   * 
   * The seond option is a 'fluid' Bootstrap Container
   * 
   * <Container layout="fluid">
   *  <!-- Content here -->
   * </Container>
   */
  constructor(props){
    super(props);
    this.state = {
      containerprops: this.setContainerProps(props)
    }
  }
  
  // Render Component
   render(props) {
    return (
        <div className={this.state.containerprops}>
          {this.props.children}
        </div>      
    );
  }

  /**
   * This function checks the value of the 'layout' attribute of
   * this component, setting the Bootstrap selector accordingly. 
   * 
   * setContainerProps(props):
   * @param props
   * @return string
   * 
   */
  setContainerProps(props){
    // Defaults to 'container'
    let localprops = 'container';
    
    // checks for the value of 'normal' for the 'layout' attribute.
    if(this.props.layout === 'normal'){
      return localprops;
    }

    // checks for the value of 'fluid' for the 'layout' attribute.
    if(this.props.layout === 'fluid'){
      localprops += '-fluid'
    }

    // returns string of computed properties
    return localprops;
  }

}

// Default Export
export default Container;
