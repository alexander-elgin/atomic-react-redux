import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setLoading } from '../../../store/loading/actions';
import { makeSelectLoading } from '../../../store/loading/selectors';

import HomePageComponent from '../component';

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }

      dispatch(setLoading());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
});

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);
export default HomePageContainer;
