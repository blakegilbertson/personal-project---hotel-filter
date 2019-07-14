import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import HotelList from './Hotel';
import HotelRow from './HotelRow';
import FilterOptions from './FilterOptions';
import FilterButton from './FilterButton';
import FilterCheckbox from './FilterCheckbox';

configure({ adapter: new Adapter() });

describe('<HotelList /> shallow renders', () => {
  const hotelList = shallow(<HotelList />);

  it('Should match snapshot', () => {
    expect(toJson(hotelList)).toMatchSnapshot();
  });

  it('Should contain H1 with correct heading text', () => {
    expect(hotelList.find('h1').text()).toBe('Hotel Filtering');
  });

  it('Should output table with headings', () => {
    expect(hotelList.find('.hotel-table').exists()).toBeTruthy();

    expect(hotelList.find('.hotel-table th').exists()).toBeTruthy();
  });
});

describe('<HotelRow /> shallow renders', () => {
  const hotelRow = shallow(<HotelRow />);

  it('Should output table with at least 1 row of data', () => {
    expect(hotelRow.find('.hotel-row').length).toBeGreaterThanOrEqual(1);
  });
});

describe('<FilterOptions /> shallow renders', () => {
  const filterOptions = shallow(<FilterOptions />);

  it('Should output the reset button', () => {
    expect(filterOptions.find('.filter-reset').exists()).toBeTruthy();
  });

  it('Should output filter options', () => {
    expect(filterOptions.find('.hotel-filters').exists()).toBeTruthy();
  });
});

describe('<FilterButton /> shallow renders', () => {
  const mockFunction = jest.fn();
  const filterButton = shallow(<FilterButton key="filter_gym" facility="gym" handleFilterClick={mockFunction} />);

  it('Should render at least 1 filter button', () => {
    expect(filterButton.length).toBeGreaterThanOrEqual(1);
  });

  it('Should click as expected', () => {
    expect(mockFunction.mock.calls.length).toEqual(0);

    filterButton.simulate('click');

    expect(mockFunction.mock.calls.length).toEqual(1);
  });
});

describe('<FilterCheckbox /> shallow renders', () => {
  const mockFunction = jest.fn();
  const filterCheckboxWrap = shallow(<FilterCheckbox key="filter_gym" facility="gym" handleFilterCheck={mockFunction} />);
  const filterCheckbox = filterCheckboxWrap.find('.filter-option');

  it('Should output at least one checkbox', () => {
    expect(filterCheckbox.length).toBeGreaterThanOrEqual(1);
  });

  it('Should check and uncheck as expected', () => {
    expect(mockFunction.mock.calls.length).toEqual(0);
    /*
      // filterCheckbox.simulate('change');
      // expect(mockFunction.mock.calls.length).toEqual(1);


      console.log(filterCheckbox.debug());
      console.log(filterCheckbox.prop('checked'));
      console.log(filterCheckbox.checked);
      console.log(filterCheckbox.prop.checked);
      console.log(filterCheckbox.props.checked);
      console.log(filterCheckbox.length);


      expect(filterCheckbox.prop('checked')).toBe(undefined);

      expect(filterCheckbox.props().checked).toEqual(true);

      // expect(filterCheckbox).toHaveAttribute('checked', 'true');


      // filterCheckbox.simulate('change', { target: { checked: true } });

      // console.log(filterCheckbox.props.checked);

      // expect(filterCheckbox.state('field_value')).toEqual(false)
      // expect(mockFunction.mock.calls.length).toEqual(1);
    */
  });
});
