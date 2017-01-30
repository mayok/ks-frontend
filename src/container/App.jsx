import React from 'react';
import { connect } from 'react-redux';
import { requestRecord } from '../actions';

class App extends React.Component {
  componentDidMount() {
    const { dispatch, date } = this.props;
    dispatch(requestRecord(date));
  }

  render() {
    const { records, isFetching } = this.props;
    return (
      <div>
        {!isFetching &&
          <button>Refresh</button>
        }
        {isFetching && records.length === 0 &&
          <h2>Loading...</h2>
        }
        {!isFetching && records.length === 0 &&
          <h2>Empty.</h2>
        }
        {records.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <h1>Hello world</h1>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { recordsByDate, date } = state;
  const {
    isFetching,
    lastUpdated,
    items: records,
  } = recordsByDate[date] || {
    isFetching: true,
    items: [],
  };

  return {
    date,
    records,
    isFetching,
    lastUpdated,
  };
};

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  date: React.PropTypes.string.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  records: React.PropTypes.arrayOf(
    React.PropTypes.object,
  ).isRequired,
};

export default connect(mapStateToProps)(App);
