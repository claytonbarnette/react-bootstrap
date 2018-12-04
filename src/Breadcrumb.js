import React from 'react'

/**
 * This element represents a Bootstrap Breadcrumb. A particial deviation
 * has been made to make logical sense of the Breadcrum metaphor. 
 * 
 * A Breadcrumb is well represented in Hansel and Gretel (https://en.wikipedia.org/wiki/Hansel_and_Gretel)
 * 
 * But to me, a Breadcrumb component should be a Path, then the Breadcrumb. In the story,
 * Hansel and Gretel left a breadcrumb trail on the path. Which would have it Path, then Breadcrumb(s).
 * But that does not make sense the structure of this component, so a slight inversion of this was made. 
 * Meaning... that the Breadcrumb is the component, then the Path component represents the segments of the 
 * Breadcrumb. This will be closer to how Bootstrap has defined their Breadcrumb component, with the execption
 * of the Path component. 
 * 
 * The Path component is a child component of the Breadcrumb component, you set the
 * 'location' attribute for each Path compoment to specify the URL of each Breadcrumb segment. The 'active' 
 * attribute can be added to this element as well to make it the current selected path, but do remove the 
 * 'location' attribute for the Path compoment you wish to make active so it to displays as it does with Bootstrap. 
 * 
 * Breadcrumb and Path usage:
 * 
 *<Breadcrumb>
 *  <Path location="/">Home</Path>
 *  <Path location="/about.html">About</Path>
 *  <Path active>Products</Path>
 *</Breadcrumb>
 *  
 * @param props 
 * @param children 
 */
const Breadcrumb = (props, children) => (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            {props.children}
        </ol>
    </nav>
)

/**
 * Path Element: 
 * 
 * This element goes inside of the Breadcrumb element, set the 'location' attribute to specify the URL
 * for each segment of the Path. If 'active' is set to 'true' then 'active' is added to the className.
 * 
 * @param props 
 */
const Path = props => (
            <li className={isCurrent(props)}><a href={props.location}>{props.children}</a></li>           
)

function isCurrent(props){
    // Path properties variable, used to adjust selectors according to active attribute
    let pathprops = "breadcrumb-item";

    // Check to see if 'active' attribute exists
    if(props.active){
        pathprops += " active";  
    } 
    return pathprops;
}

export { Breadcrumb, Path } 

