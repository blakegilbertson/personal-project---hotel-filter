import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import HotelList from './Hotel';
import HotelRow from './HotelRow';

configure({ adapter: new Adapter() });

describe('<HotelList /> shallow renders correctly', () => {
  const hotelList = shallow(<HotelList />);

  it('Should match snapshot', () => {
    expect(toJson(hotelList)).toMatchSnapshot();
  });

  it('Should contain H1 with correct heading text', () => {
    expect(hotelList.find('h1').text()).toBe('Hotel Filtering');
  });

  it('Should output filter options', () => {
    expect(hotelList.find('.hotel-filtering').exists()).toBeTruthy();

    expect(hotelList.find('.hotel-filters').exists()).toBeTruthy();

    expect(hotelList.find('.filter-option').length).toBeGreaterThanOrEqual(1);
  });

  it('Should output with headings and some data', () => {
    expect(hotelList.find('.hotel-table').exists()).toBeTruthy();

    expect(hotelList.find('.hotel-table th').exists()).toBeTruthy();
  });
});

describe('<HotelRow /> shallow renders correctly', () => {
  const hotelRow = shallow(<HotelRow />);

  it('Should output table with at least 1 row of data', () => {
    expect(hotelRow.find('.hotel-row').length).toBeGreaterThanOrEqual(1);
  });
});
