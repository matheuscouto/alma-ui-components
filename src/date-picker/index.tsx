import * as React from 'react';
import {DateRangePicker} from 'react-dates/initialize';

// import styled from 'styled-components';

class DatePicker extends React.Component {
    render() {
        return(
            <DateRangePicker
                startDate={null} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={null} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => console.log({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={null} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={(focusedInput:any) => console.log(focusedInput)} // PropTypes.func.isRequired,
            />
        )
    }
}

export default DatePicker