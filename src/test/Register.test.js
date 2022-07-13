import React from 'react';
import { shallow, mount } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Register from '../components/auth/register';
// import checkPropTypes from 'check-prop-types';
import { checkProps, findByName } from './utils/test';

// Enzyme.configure({ adapter: new Adapter() });


describe("test Register", () => {
    const setup = (props = {}, state = null) => {
        const defaultProps = { edit: true }
        const setupProps = { ...defaultProps, ...props }
        const wrapper = shallow(<Register {...setupProps }/>);
        if(state) wrapper.setState(state); 
        return wrapper;
    }


    // const findByName = (wrapper, value) => {
    //     return wrapper.find(`[name="${value}"]`)
    // }

    let wrapper;
    it("test component log", () => {
        wrapper = setup();
        // const log = shallow(<Register / >);
        {/* console.log(log.debug()); */}
    });

    it("test value input", () => {
        wrapper = setup({ edit: true });
        const payload = {
            first_name: 'ahmad',
            last_name: 'montazeri',
            username: 'kybora',
        }

        const firstName = findByName(wrapper, "first_name");
        const lastName = findByName(wrapper, "last_name")
        const username = findByName(wrapper, "username");
        
        firstName.value = payload.first_name; 
        lastName.value = payload.last_name; 
        username.value = payload.username; 

        expect(firstName.value).toBe('ahmad');
        expect(lastName.value).toBe('montazeri');
        expect(username.value).toBe('kybora');
    });

    it("test state", () => {
        wrapper = setup({ edit: true });
        const state = wrapper.state('payload');
        expect(state);
        // console.log(state);
    });

    it("test props", () => {
        const expectedProps = { success: false};
        checkProps(Register, expectedProps)
        // const propErr = checkPropTypes(Register.propTypes, expectedProps, 'prop', Register.name);
        // expect(propErr).toBeUndefined();
    })
})