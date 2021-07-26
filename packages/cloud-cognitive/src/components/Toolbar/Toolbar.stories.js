/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AlignHorizontalCenter16,
  Minimize16,
  Printer16,
  Redo16,
  Save16,
  Share16,
  Undo16,
  Upload16,
  ZoomIn16,
  ZoomOut16,
} from '@carbon/icons-react';

import React from 'react';

import { getStorybookPrefix } from '../../../config';
import { pkg } from '../../settings';

import { Toolbar, ToolbarGroup, ToolbarItem } from '.';

import mdx from './Toolbar.mdx';

const { displayName } = Toolbar;

const width = 512;

export default {
  title: `${getStorybookPrefix(pkg, displayName)}/${displayName}`,
  component: Toolbar,
  subcomponents: { ToolbarGroup, ToolbarItem },

  args: {
    width,
  },

  argTypes: {
    width: {
      control: { type: 'number' },
    },
  },

  parameters: {
    docs: {
      page: mdx,
    },
  },
};

function Template({ width }) {
  return (
    <main style={{ width }}>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarItem iconDescription="Save" renderIcon={Save16} />
          <ToolbarItem iconDescription="Share" renderIcon={Share16} />
          <ToolbarItem iconDescription="Upload" renderIcon={Upload16} />
          <ToolbarItem iconDescription="Print" renderIcon={Printer16} />
        </ToolbarGroup>

        <ToolbarGroup>
          <ToolbarItem iconDescription="Undo" renderIcon={Undo16} />
          <ToolbarItem iconDescription="Redo" renderIcon={Redo16} />
          <ToolbarItem iconDescription="Zoom in" renderIcon={ZoomIn16} />
          <ToolbarItem iconDescription="Zoom out" renderIcon={ZoomOut16} />
          <ToolbarItem iconDescription="Minimize" renderIcon={Minimize16} />

          <ToolbarItem
            iconDescription="Align horizontal center"
            renderIcon={AlignHorizontalCenter16}
          />
        </ToolbarGroup>
      </Toolbar>
    </main>
  );
}

export const _Toolbar = Template.bind({});
