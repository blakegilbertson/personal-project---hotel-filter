import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import HotelList from './Hotel';
import HotelRow from './HotelRow';

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
  });
});

describe('<HotelRow /> shallow renders correctly', () => {
  const hotelRow = shallow(<HotelRow />);

  it('Table outputs with headings and some data', () => {
    expect(hotelRow.find('.hotel-row').exists()).toBeTruthy();
  });
});
