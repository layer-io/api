import { expect, tap } from '@pushrocks/tapbundle';
import * as api from '../ts/index';

tap.test('first test', async () => {
  console.log(api.standardExport);
});

tap.start();
