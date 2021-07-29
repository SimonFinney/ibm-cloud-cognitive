/**
 * Copyright IBM Corp. 2021, 2021
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

const width = 401;

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
          <ToolbarItem
            iconDescription="Save"
            itemText="Save"
            renderIcon={Save16}
          />

          <ToolbarItem
            iconDescription="Share"
            itemText="Share"
            renderIcon={Share16}
          />

          <ToolbarItem
            iconDescription="Upload"
            itemText="Upload"
            renderIcon={Upload16}
          />

          <ToolbarItem
            iconDescription="Print"
            itemText="Print"
            renderIcon={Printer16}
          />
        </ToolbarGroup>

        <ToolbarGroup>
          <ToolbarItem
            iconDescription="Undo"
            itemText="Undo"
            renderIcon={Undo16}
          />

          <ToolbarItem
            iconDescription="Redo"
            itemText="Redo"
            renderIcon={Redo16}
          />

          <ToolbarItem
            iconDescription="Zoom in"
            itemText="Zoom in"
            renderIcon={ZoomIn16}
          />

          <ToolbarItem
            iconDescription="Zoom out"
            itemText="Zoom out"
            renderIcon={ZoomOut16}
          />

          <ToolbarItem
            iconDescription="Minimize"
            itemText="Minimize"
            renderIcon={Minimize16}
          />

          <ToolbarItem
            iconDescription="Align horizontal center"
            itemText="Align horizontal center"
            renderIcon={AlignHorizontalCenter16}
          />
        </ToolbarGroup>
      </Toolbar>
    </main>
  );
}

export const _Toolbar = Template.bind({});
