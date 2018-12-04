import React, { Component } from 'react'


class MediaObject extends Component {
    constructor(props){
        super(props);
        this.state = {
            mediaobjectprops: this.setMediaObjectProps(props)
        }
    }

    render(props){
        return(
            <div className={this.state.mediaobjectprops}>
                <div className="media-body">
                {this.props.children}
                </div>
            </div> 
        );
    }

    setMediaObjectProps(props){
        let localprops = "media";
        

        return localprops;
    }

}

export default MediaObject