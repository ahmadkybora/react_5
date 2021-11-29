// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
// import { isEven } from "./sum";

// describe("Login", () => {
//     it("Login Test true", () => {
//         const result = isEven(2);
//         expect(result).toEqual(true);
//     })

//     it("Login Test false", () => {
//         const result = isEven(1);
//         expect(result).toEqual(false);
//     })
// })
// import { render, screen } from '@testing-library/react';
// import Login from '../components/auth/login';
// // import Form from '../utils/components/form';
// import React from "react";
// import Adapter from 'enzyme-adapter-react-16';
// import { shallow, configure , mount, render } from 'enzyme';
// // import "../../enzymeConfig";
// configure({adapter: new Adapter()});

// describe("login", () => {
//     let wrapper;
//     it("test", function() {
//         wrapper = shallow(<Login />);
//         render(<Login />);
//         // wrapper.find(input())
//         // console.log(wrapper);
//         // wrapper = mount(<Login />);
//         // wrapper.find('input[type="text"]').simulate("change", {
//         //   target: { id: "username", value: "world" }
//         // });
//         expect(wrapper.find('.usern')).toBeDefined();
//         // expect(wrapper.find('input[type="text"]').to.equal(true)
//         // expect(wrapper.state("username")).toEqual("world");
//     });
// })


import React from 'react';
import { render, screen } from '@testing-library/react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Login from '../components/auth/login';
Enzyme.configure({adapter: new Adapter()});


describe("login", () => {
    const setup = (props = {}, state = null) => {
        const wrapper = shallow(<Login {...props}/>);
        if(state) wrapper.setState(state);
        return wrapper;
    }

    const findByTestAttr = (wrapper, value) => {
        return wrapper.find(`[name="${value}"]`)
    }

    let wrapper;

    it("component log", () => {
        let log = shallow(<Login />);
        // console.log(log.debug());
    });
    
    it("render component", () => {
        wrapper = setup();
        let w = findByTestAttr(wrapper, 'username');
        // console.log(wrapper.debug());
        // expect(w.length).toBe(1);
        // console.log(w.debug())
        expect(w.length).toBe(1);
    });

    it("test state", () => {
        wrapper = setup();
        const state = wrapper.state('errors');
        // console.log(state.debug());
        // expect(state).toBe(Object);
    });

    it("make data for input", () => {
        const payload = {
            username: 'ahmad',
            password: '12345678'
        }
        const wrapper = setup(null, { payload });

        const username = findByTestAttr(wrapper, "username"); 
        const password = findByTestAttr(wrapper, "password");

        username.value = payload.username;
        password.value = payload.password;
        // username.simulate('change', { target: { value: payload.username } });
        // password.simulate('change', { target: { value: payload.password } })
        // console.log(username.value);
        expect(username.value).toContain('ahmad');
        expect(password.value).toContain('12345678')
        expect(username.text()).toBe('');
        // const usernameVal = 
    });
    // it("test", function() {
    //     wrapper = shallow(<Login />);
    //     console.log(wrapper.debug())
    //     render(<Login />);
    //     expect(wrapper.find('input[type="text"]'));
    //     // expect(wrapper.find('h1').length).toBeDefined();
    //     // expect(wrapper.find('input[type="text"]').to.equal(true)
    //     // expect(wrapper.state("username")).toEqual("world");
    // });
})