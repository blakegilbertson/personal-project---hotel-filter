import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import HotelList from './Hotel';

configure({ adapter: new Adapter() });

describe('<HotelList /> shallow renders correctly', () => {
  const hotelList = shallow(<HotelList />);
  it('matches snapshot', () => {
    expect(toJson(hotelList)).toMatchSnapshot();
  });
  it('h1 should contain correct heading text', () => {
    expect(hotelList.find('h1').text()).toBe('Hotel Filtering');
  });
  it('Table outputs with headings and some data', () => {
    expect(hotelList.find('.hotel-table').exists()).toBeTruthy();
    expect(hotelList.find('.hotel-table th').exists()).toBeTruthy();
    expect(hotelList.find('.hotel-table td').exists()).toBeTruthy();
    expect(hotelList.find('.hotel-row').exists()).toBeTruthy();
  });
});
