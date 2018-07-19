/**
 * Asynchronously loads the component for FeatureList
 */
import Loadable from 'react-loadable';

import LoadingIndicator from 'common/molecules/LoadingIndicator';

export default Loadable({
  loader: () => import('./component'),
  loading: LoadingIndicator,
});
