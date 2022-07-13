import checkPropTypes from "check-prop-types";

export const findByName = (wrapper, value) => {
    return wrapper.find(`[name="${value}"]`)
}

export const checkProps = (component, templateProps) => {
    const propErr = checkPropTypes(component.PropTypes, templateProps, 'prop', component.name);
    expect(propErr).toBeUndefined();
}