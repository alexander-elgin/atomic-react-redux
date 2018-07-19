/**
 * Asynchronously loads the component for NotFoundPage
 */
import Loadable from 'react-loadable';

import LoadingIndicator from '../../common/molecules/LoadingIndicator';

export default Loadable({
  loader: () => import('./component'),
  loading: LoadingIndicator,
});
