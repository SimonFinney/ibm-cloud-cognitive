/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cx from 'classnames';
import { node, string } from 'prop-types';

import React, { Children, cloneElement, forwardRef } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { pkg } from '../../settings';

const { checkComponentEnabled, prefix } = pkg;

const componentName = 'ToolbarGroup';

export let ToolbarGroup = forwardRef(
  ({ className, children, isActive, setItem, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(`${prefix}--toolbar__group`, className)}
        {...rest}>
        {Children.map(flattenChildren(children), (child) =>
          cloneElement(child, {
            isActive,
            setItem,
          })
        )}
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
