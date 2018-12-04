import React, { Component } from 'react'


class Col extends Component{

    constructor(props){
        super(props);
        this.state = {
            colprops: this.setColProps(props)
        }

    }

    render(props){
        return(
            <div class={this.state.colprops}>
                {this.props.children}
            </div>    
        );
    }

    setColProps(props){
        // Default Property
        let localprops = 'col'

        // Display Property (See: Grid Options on http://getbootstrap.com/docs/4.1/layout/grid/)
        if(this.props.display === 'sm'){
            localprops += " col-sm"
        }
        if(this.props.display === 'md'){
            localprops += " col-md"
        }
        if(this.props.display === 'lg'){
            localprops += " col-lg"
        }
        if(this.props.display === 'xl'){
            localprops += " col-xl"
        }

        // Grids Property [1 - 12]
        if(this.props.grid){
            localprops += "-" + this.props.grid
        }

        // Horizonal Alignment (for Vertical Alignment, see: Row.js)
        if(this.props.align === 'start'){
            localprops += " align-self-start"
        }
        if(this.props.align === 'center'){
            localprops += " align-self-center"
        }
        if(this.props.align === 'end'){
            localprops += " align-self-end"
        }

        // Return computed properties
        return localprops;
    }
}

export default Col