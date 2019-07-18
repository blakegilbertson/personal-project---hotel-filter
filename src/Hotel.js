import React, { Component } from 'react';
import hotelData from './hotel.data.json';
import './Hotel.css';
import HotelRow from './HotelRow';
import FilterOptions from './FilterOptions';

class HotelList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterSet: {},
    };
    console.log('HotelList this.state: ', this.state);
  }

  handleFilterCheck = (e) => {
    const { target } = e;
    const isChecked = target.type === 'checkbox' && target.checked;

    this.setState(prevState => ({
      filterSet: {
        ...prevState.filterSet,
        [target.name]: [isChecked],
      },
    }));
  }

  handleFilterReset = () => {
    const filterCheckboxs = document.getElementsByClassName('filter-option');

    for (let i = 0; i < filterCheckboxs.length; i += 1) {
      const check = filterCheckboxs[i];
      if (check.checked) check.checked = false;
    }

    this.setState({ filterSet: [] });
  }

  filterHotels = (filterSet) => {
    // if no filters set, return full object
    if (filterSet === undefined || filterSet.length === 0) return hotelData;

    const filteredHotels = hotelData.filter((filter) => {
      const isToBeFilteredBy = [];

      Object.entries(filterSet).map((thisFilter) => {
        const facility = thisFilter[0];
        const isSelected = thisFilter[1][0];

        if (isSelected === true) {
          if (filter.facilities.includes(facility)) {
            isToBeFilteredBy.push('yes'); // TODO refactor, doesnt feel like a great solution
          } else {
            isToBeFilteredBy.push('no');
          }
        }
      });

      return !isToBeFilteredBy.includes('no') ? filter : null;
    });

    return filteredHotels;
  };

  outputCurrentFilters = (filterSet) => {
    const filterSetArr = Object.entries(filterSet);
    const isFilterSet = filterSetArr.length > 0 || filterSetArr.includes(true);
    let currentFilterStr = '';

    if (isFilterSet) {
      filterSetArr.map((filter) => {
        const isToBeIncluded = filter[1].includes(true);
        const thisFilterText = filter[0];
        const isOnlyFilter = currentFilterStr === '';

        if (isToBeIncluded) {
          if (isOnlyFilter) {
            currentFilterStr = thisFilterText;
          } else {
            currentFilterStr += ` | ${thisFilterText}`;
          }
        }
        return currentFilterStr;
      });
    } else {
      currentFilterStr = 'None selected';
    }

    if (currentFilterStr === '') currentFilterStr = 'None selected';
    return currentFilterStr;
  };

  render() {
    const { filterSet } = this.state;
    return (
      <div className="hotel-list">
        <header>
          <h1>Hotel Filtering</h1>
        </header>
        <section className="hotel-content">
          <div className="hotel-filtering">
            <p>
              {
                `Current filter: ${this.outputCurrentFilters(filterSet)}`
              }
            </p>
            <FilterOptions
              handleFilterReset={this.handleFilterReset}
              handleFilterCheck={this.handleFilterCheck}
            />
          </div>
          <table className="hotel-table">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Star rating</th>
                <th>Facilities</th>
              </tr>
              {
                this.filterHotels(filterSet).map((hotel) => {
                  const {
                    hotelId,
                    name,
                    starRating,
                    facilities,
                  } = hotel;
                  return (
                    <HotelRow
                      key={hotelId}
                      hotelId={hotelId}
                      name={name}
                      starRating={starRating}
                      facilities={facilities}
                    />
                  );
                })
              }
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default HotelList;
