/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { addons } from '@storybook/addons';
import { STORY_RENDERED } from '@storybook/core-events';

function trackPageView(url) {
  console.log('trackPageView', url);
}

addons.register('addon-analytics', ({ on }) => {
  on(STORY_RENDERED, trackPageView);
});
