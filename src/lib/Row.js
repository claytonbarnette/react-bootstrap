import React, { Component } from 'react'

class Row extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            rowprops: this.setRowProps(props)
        }
    }
    
    render(props){
        return(
            <div className={this.state.rowprops}>
                {this.props.children}
            </div>
        );
    }

    setRowProps(props){
        let localprops = "row";

        // Vertical Alignment
        if(this.props.align === 'start'){
            localprops += " align-items-start";
        }

        if(this.props.align === 'center'){
            localprops += " align-items-center";
        }

        if(this.props.align === 'end'){
            localprops += " align-items-end";
        }


        // Justify Content
        if(this.props.justify === 'start'){
            localprops += " justify-content-start";
        }

        if(this.props.justify === 'center'){
            localprops += "  justify-content-center";
        }

        if(this.props.justify === 'end'){
            localprops += "  justify-content-end";
        }

        if(this.props.justify === 'around'){
            localprops += "  justify-content-around";
        }

        if(this.props.justify === 'between'){
            localprops += "  justify-content-between";
        }

        // No Gutter
        if(this.props.gutters === 'none'){
            localprops += " no-gutters";
        }


        return localprops;
    }
}

export default Row