import React from 'react'
/**
 * ButtonGroup Component:
 * 
 * This component follow the Bootstrap ButtonGroup component, child elements added to this
 * component are grouped.
 * 
 * http://getbootstrap.com/docs/4.1/components/button-group/
 * 
 *     <ButtonGroup label="Basic Group">
 *       <Button class="warning">1</Button>
 *       <Button class="danger">2</Button>
 *       <Button class="primary">3</Button>
 *       <Button class="secondary">4</Button>
 *     </ButtonGroup>
 * 
 * Setting the 'label' attribute will set the aria-label for aria browsers.
 * 
 * @param props 
 * @param children 
 */
const ButtonGroup = (props, children) => (
<div style={{margin: 3}} className={setButtonGroupClass(props)} role="group" aria-label={props.label}>
    {props.children}
</div>
)

/**
 * ButtonToolbar Component:
 * 
 * This component follows the Bootstrap ButtonToolbar component, child elements added to this
 * component are grouped, even a ButtonGroup component above. 
 * 
 *<ButtonToolbar>
 *     <ButtonGroup>
 *       <Button class="warning">1</Button>
 *       <Button class="danger">2</Button>
 *       <Button class="primary">3</Button>
 *       <Button class="secondary">4</Button>
 *     </ButtonGroup>
 *     <ButtonGroup>
 *       <Button class="warning">1</Button>
 *       <Button class="danger">2</Button>
 *       <Button class="primary">3</Button>
 *       <Button class="secondary">4</Button>
 *     </ButtonGroup>
 *</ButtonToolbar> 
 *
 * The 'label' attribute takes a text value to set the label for aria browsers and
 * the 'size' attribute is available taking either 'sm' or 'lg'
 * 
 * @param  props 
 * @param children 
 */
const ButtonToolbar = (props, children) => (
    <div style={{margin: 3}} className={setButtonToolbarClass(props)} role="toolbar" aria-label={props.label}>
        {props.children}
    </div>
)
/**
 * setButtonGroupClass:
 * 
 * This function sets the class selectors for Bootstrap for this component and provide
 * the logic which looks for specific settings as attributes to this component.
 */
function setButtonGroupClass(props){

    // Variable for class seletors, defaults to belows value.
    let buttongroupprops = "btn-group";

    /**
     * This statement overwrites the default setting above. Setting
     * the 'vertical' attribute to 'true' will align the child elements 
     * of this component vertically. 
     * 
     *<ButtonGroup vertical="true">
     *   <Button class="warning">1</Button>
     *   <Button class="danger">2</Button>
     *   <Button class="primary">3</Button>
     *   <Button class="secondary">4</Button>
     *</ButtonGroup>
     * 
     */
    if(props.vertical === "true"){
        buttongroupprops = "btn-group-vertical";
    }

    /**
     * Property: size
     * 
     *<ButtonGroup size="sm">
     *   <Button class="warning">1</Button>
     *   <Button class="danger">2</Button>
     *   <Button class="primary">3</Button>
     *   <Button class="secondary">4</Button>
     *</ButtonGroup>
     * 
     */
    if(props.size){
        buttongroupprops += " btn-group-" + props.size;
    }

    // Return computed class selectors
    return buttongroupprops;
}


/**
 * setButtonToolbar:
 * 
 * Set justify="true" to justify nested button groups inside of this component.
 * 
 * @param props 
 */
function setButtonToolbarClass(props){

    // Variable for class selectors, defaults to belows value
    let buttontoolbarprops = "btn-toolbar";

    /**
     * This attribute justify and center the children of this component.
     *     
     * <ButtonToolbar justify="true">
     *  <ButtonGroup vertical="true">
     *   <Button class="warning">1</Button>
     *   <Button class="danger">2</Button>
     *   <Button class="primary">3</Button>
     *   <Button class="secondary">4</Button>
     *  </ButtonGroup>
     *  <ButtonGroup>
     *   <Button class="warning">1</Button>
     *   <Button class="danger">2</Button>
     *   <Button class="primary">3</Button>
     *   <Button class="secondary">4</Button>
     *  </ButtonGroup>
     * </ButtonToolbar>
     * 
     */
    if(props.justify === "true"){
        buttontoolbarprops += " justify-content-between";
    }

    return buttontoolbarprops;
}

export { ButtonGroup, ButtonToolbar } 

