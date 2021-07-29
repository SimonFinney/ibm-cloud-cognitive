/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cx from 'classnames';
import { node, string } from 'prop-types';

import React, { forwardRef } from 'react';

import { pkg } from '../../settings';
import { children } from './Toolbar';

const { checkComponentEnabled, prefix } = pkg;

const componentName = 'ToolbarGroup';

export let ToolbarGroup = forwardRef(
  ({ className, children: c, isActive, setItem, ...rest }, ref) => {
    return (
      <div
        {...rest}
        ref={ref}
        className={cx(`${prefix}--toolbar__group`, className)}>
        {children({ children: c, isActive, setItem })}
      </div>
    );
  }
);

ToolbarGroup.displayName = componentName;

ToolbarGroup.propTypes = {
  /** Provide the contents of the `ToolbarGroup` */
  children: node.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

ToolbarGroup = checkComponentEnabled(ToolbarGroup, componentName);
