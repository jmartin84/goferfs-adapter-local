import { resolve } from 'path';
import { goferTests } from 'goferfs-test-suite';

import LocalAdapter from './.';

describe('Local Adapter', () => {
    const adapter = new LocalAdapter({
        rootPath: resolve(__dirname, './test-files'),
    });

    goferTests(adapter);
});
