import React from 'react'

/** 
* Badge Class Types:
* ========================================
* <Badge class="primary">Javascript</Badge>
* <Badge class="seconday">Javascript</Badge>
* <Badge class="success">Javascript</Badge>
* <Badge class="danger">Javascript</Badge>
* <Badge class="warning">Javascript</Badge>
* <Badge class="info">Javascript</Badge>
* <Badge class="light">Javascript</Badge>
* <Badge class="dark">Javascript</Badge>
* 
*/
const Badge = props => (
    <span className={setBadgeClass(props)}>{props.children}</span>
)
 
/**
 * This function sets the CSS selectors for Bootstrap based on the 'type'
 * attribute set in the <Badge> element. The following values are available
 * for this element, following the Bootstrap Badge types.
 * 
 * http://getbootstrap.com/docs/4.1/components/badge/
 * 
 * @param props 
 */
function setBadgeClass(props){

    // Badge properties returned by this function
    let badgeprops = "badge badge-" + props.class;

    // For a Pill Badge, add the 'pill' attribute and set it to 'true'
    if(props.pill){
        badgeprops += ' badge-pill';
    }

    // Return computed badgeprops to set correct selectors for Bootstrap for this element
    return badgeprops;
}

export default Badge