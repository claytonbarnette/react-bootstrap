import React from 'react'

/**
 * Alert Classes
 * 
 * The following types can be used and follow the Bootstrap alert documentation
 * http://getbootstrap.com/docs/4.1/components/alerts/
 * 
 * <Alert class="primary"></Alert>
 * <Alert class="secondary"></Alert>
 * <Alert class="success"></Alert>
 * <Alert class="danger"></Alert>
 * <Alert class="warning"></Alert>
 * <Alert class="info"></Alert>
 * <Alert class="light"></Alert>
 * <Alert class="dark"></Alert>
 * 
 * These 8 alert types display the alert container only, the
 * rest of the alert class selectors for Bootstrap can be used
 * as-is inside of this component's tags, such as 'alert-heading'
 * and 'alert-link'.
 * 
 * <Alert class="primary">
 *   <h4 className="alert-heading"></h4>
 *   <p>This is the text for this alert and a <a className="alert-link" href="google.com">link</a></p>
 * </Alert>
 * 
 * Note: The href for 'alert-link' must be a valid URL and you must use 'className' instead of
 * 'class' for selectors inside of the this tag. 
 * 
 */
const Alert = props => (
    <div className={setAlertClass(props)} role="alert">
        {props.children}
    </div>
)

/** 
 * setAlertClass:
 * 
 * Sets the correct suffix for the Bootstrap alert
 * 
 * The Bootstrap alert needs the CSS selector 'alert' and 'alert-[some type]'.
 * This function simply appends the type set as this elements 'type' attribute 
 * to the end of 'alert alert-' to complete the desired Bootstrap CSS selector. 
 * 
 * This function must be used in the 'className' property of this element. 
 * 
 */
function setAlertClass(props){
    
    // Set local var to append CSS Seletors to return 
    let alertprops = "alert alert-" + props.class;

    /**
     * Append 'alert-dismissable fade show' to props.type
     * Note: have to add utils.js for this to work. 
     * Attribute: dismiss
     * <Alert type="primary" dismiss="true"></Alert>
     *
     */
    if(props.dismiss){
        alertprops += ' alert-dismissible fade show';
    }

    // Return alert props
    return alertprops;
}


export default Alert