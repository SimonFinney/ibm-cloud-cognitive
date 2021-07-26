/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button } from 'carbon-components-react';
import setupGetInstanceId from 'carbon-components-react/es/tools/setupGetInstanceId';

import cx from 'classnames';
import { number, string } from 'prop-types';
import React, { forwardRef, useEffect, useRef } from 'react';

import { pkg } from '../../settings';

const { checkComponentEnabled, prefix } = pkg;

const componentName = 'ToolbarItem';
const getInstanceId = setupGetInstanceId();

export let ToolbarItem = forwardRef(
  ({ className, isActive, setItem, weight, ...rest }, ref) => {
    const { current: instanceId } = useRef(
      `${componentName}__${getInstanceId()}`
    );

    useEffect(() => {
      if (setItem) {
        setItem({
          instanceId,
          weight,
        });
      }
    }, [instanceId, setItem, weight]);

    return (
      (!isActive || isActive(instanceId)) && (
        <Button
          {...rest}
          ref={ref}
          className={cx(`${prefix}--toolbar-item`, className)}
          kind="ghost"
          size="md"
          hasIconOnly
        />
      )
    );
  }
);

ToolbarItem.displayName = componentName;

ToolbarItem.propTypes = {
  /** Provide an optional class to be applied to the containing node */
  className: string,

  /** Provide a weight to the `ToolbarItem` to determine whether it will move from the top level into the `OverflowMenu` */
  weight: number,
};

ToolbarItem.defaultProps = {
  weight: 1,
};

ToolbarItem = checkComponentEnabled(ToolbarItem, componentName);
