import React from 'react'


/**
 * Button Component:
 * 
 * This Button component follows Bootstrap's Button component.
 * http://getbootstrap.com/docs/4.1/components/buttons/
 * 
 * Note: setting the 'class' attribute will override any value entered in the 'outline' attribute
 * 
 * Button component attribute: class
 * 
 * Defaults to 'primary' button with on attributs specified.
 * <Button>React</Button>
 * 
 * <Button class="primary">React</Button>
 * <Button class="secondary">React</Button>
 * <Button class="success">React</Button>
 * <Button class="danger">React</Button>
 * <Button class="warning">React</Button>
 * <Button class="info">React</Button>
 * <Button class="light">React</Button>
 * <Button class="dark">React</Button> 
 * 
 * 
 * @param props 
 * @param children 
 */
const Button = (props, children) => ( 
        <button className={setButtonClass(props)} type={props.type}>{props.children}</button> 
)

/**
 * ActionButton Component:
 * 
 * This component uses the anchor tag to create a button, specify a 'href' to set the location you wish this
 * component to link or naviget to. 
 * 
 * <ActionButton class="success" href="http://www.google.com">Action Button</ActionButton>
 * 
 * * The same classes can be used for this component as the Button component.
 * 
 * @param props 
 * @param children 
 */
const ActionButton = (props, children) => ( 
    <a className={setButtonClass(props)} href={props.href} role="button">{props.children}</a> 
)


/**
 * InputButton Component:
 * 
 * This component uses the 'input' tage to create a button, specify a 'type' and a 'value' to set the
 * text of the button.
 * 
 * Known types are:
 * 
 * 1. button
 * 2. submit
 * 3. reset
 * 
 * <InputButton class="warning" type="submit" value="Input Button"/>
 * 
 * The same classes can be used for this component as the Button component.
 * 
 * @param {*} props 
 * @param {*} children 
 */
const InputButton = (props, children) => ( 
    <input className={setButtonClass(props)} type={props.type} value={props.value} /> 
)

/**
 * setButtonClass: function
 * 
 * Returns the computed buttonprops for the className for this component.
 * 
 * @param props 
 */
function setButtonClass(props){

     /** 
     * Set Bootstrap classes for this component
     */
    let buttonprops = "btn btn-" + props.class;

    // Defaults to 'Primary' is no Bootstrap class is present
    if(!props.class){
        buttonprops = "btn btn-primary";
    }
    /**
     * Button component attribute: outline (only)
     * 
     * Displays a Button component with no background or image background, if Button 'class'
     * is not specified. 
     * 
     */
    if(!props.class && props.outline){
        buttonprops = "btn btn-outline-" + props.outline;
    }

    /**
     * Button component attribut: outline
     * ==========================================
     * <Button outline="primary">React</Button>
     * <Button outline="secondary">React</Button>
     * <Button outline="success">React</Button>
     * <Button outline="danger">React</Button>
     * <Button outline="warning">React</Button>
     * <Button outline="info">React</Button>
     * <Button outline="light">React</Button>
     * <Button outline="dark">React</Button>
     * 
     */
    if(props.outline){
        buttonprops += " btn-outline-" + props.outline;
    }

    /**
     * Button component attribute: size
     * 
     * 
     * <Button size="sm">React</Button>
     * <Button size="lm">React</Button>
     */
    if(props.size){
        buttonprops += " btn-" + props.size;
    }

    /**
     * Button component attribute: level
     * 
     * The only value for this attribut is 'block'.
     * 
     * <Button level="block">Javascript</Button>
     * 
     */
    if(props.level === "block"){
        buttonprops += " btn-block";
    }

    /**
     * Return:
     * 
     * Returns buttonprops.
     */
    return buttonprops;
}

export {Button, ActionButton, InputButton}