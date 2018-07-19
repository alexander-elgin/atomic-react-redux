/**
 * Asynchronously loads the component for HomePage
 */
import Loadable from 'react-loadable';

import LoadingIndicator from 'common/molecules/LoadingIndicator';

export default Loadable({
  loader: () => import('./container'),
  loading: LoadingIndicator,
});
