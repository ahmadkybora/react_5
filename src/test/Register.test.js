import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Register from '../components/auth/register';
Enzyme.configure({ adapter: new Adapter() });


describe("test Register", () => {
    const setup = (props = {}, state = null) => {
        const wrapper = shallow(<Register {...props}/>);
        if(state) wrapper.setState(state); 
        return wrapper;
    }

    const findByName = (wrapper, value) => {
        return wrapper.find(`[name="${value}"]`)
    }

    let wrapper;
    it("test component log", () => {
        const log = shallow(<Register / >);
        {/* console.log(log.debug()); */}
    });

    it("test value input", () => {
        wrapper = setup();
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
        wrapper = setup();
        const state = wrapper.state('payload');
        expect(state);
        // console.log(state);
    });
})