import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import App from './App';

configure({ adapter: new Adapter() })

describe('<App /> shallow renders correctly', () => {
  const app = shallow(<App />)
  it('h1 should contain correct heading text', () => {
    expect(app.find('h1').text()).toBe('Hotel Filtering')
  })
  it('matches snapshot', () => {
    const app = shallow(<App />)
    expect(toJson(app)).toMatchSnapshot()
  })
})