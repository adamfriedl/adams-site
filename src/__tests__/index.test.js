import React from 'react';
import ReactDOM from 'react-dom';
import { create as render } from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Project from '../Project';
import Footer from '../Footer';


it('should render a project', () => {
  const wrapper = render(<Project />)
  expect(wrapper).toMatchSnapshot() 
})

test('Project works when rendered shallow', () => {
  const wrapper = shallow(<Project />)
  expect(wrapper).toMatchSnapshot()
})