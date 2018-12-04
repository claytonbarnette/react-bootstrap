import React from 'react'

/**
 * Card Component:
 * 
 * <Card size="sm">...</Card>
 * <Card size="std">...</Card>
 * <Card size="med">...</Card>
 * <Card size="lg">...</Card>
 * <Card size="xlg">...</Card>
 * <Card>...</Card>
 * 
 * This component follows the Bootstrap Card component.
 * http://getbootstrap.com/docs/4.1/components/card/
 * 
 * Most child elements for the Bootstrap version of this component can be use as is. 'card-body' is the containing
 * element for the children of this component.
 * 
 * className="card-title"
 * className="card-subtitle"
 * className="card-link"
 * 
 * @param props 
 * @param children 
 */
const Card = (props, children) => (
    <div className="card" style={{width: setSize(props)}}>
        <div className="card-body">
            {title(props)}
            {subtitle(props)}
            {props.children}
        </div>
    </div>
)

function title(props){
    if(props.title){
        return (
            <h5 className="card-title">Card title</h5>
        )
    }
}

function subtitle(props){
    if(props.subtitle){
        return (
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        )
    }
}


function setSize(props){
    // Value returned by this function, defaults to 100% [see: switch statement below]
    let propsize = "";

    switch(props.size){
        // size="sm" - 5th of width of container
        case 'sm': 
        propsize = '20%';
        break;
        // size="std" - Quarter of width of container
        case 'std':
        propsize = '25%';
        break;
        // size="med" - Third the width of container
        case 'med':
        propsize = '33%';
        break;
        // size="lg" - half of width of container
        case 'lg':
        propsize = '50%';
        break;
        // size="xlg" - 3/4's of width of container [normally one up]
        case 'xlg':
        propsize = '75%';
        break;
        // size="full" or no setting defaults to 100% - full width of container
        case 'full':
        default:
        propsize = '100%';
        break;
    }
    return propsize;
}

export default Card