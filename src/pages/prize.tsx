import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { PrizeView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Prize - ${CONFIG.appName}`}</title>
      </Helmet>

      <PrizeView />
    </>
  );
}
