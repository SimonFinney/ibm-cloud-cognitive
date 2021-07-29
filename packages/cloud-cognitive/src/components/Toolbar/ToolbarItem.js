/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, OverflowMenuItem } from 'carbon-components-react';
import setupGetInstanceId from 'carbon-components-react/lib/tools/setupGetInstanceId'; // 'carbon-components-react/es/tools/setupGetInstanceId';

import cx from 'classnames';
import { string } from 'prop-types';
import React, { forwardRef, useEffect, useRef } from 'react';

import { pkg } from '../../settings';
import { getWidth } from './Toolbar';

const { checkComponentEnabled, prefix } = pkg;

const componentName = 'ToolbarItem';
const getInstanceId = setupGetInstanceId();

export let ToolbarItem = forwardRef(
  (
    { className, isActive, itemText, onClick, renderIcon, setItem, ...rest },
    r
  ) => {
    const { current: instanceId } = useRef(
      `${componentName}__${getInstanceId()}`
    );

    const ref = useRef(r);

    useEffect(() => {
      setItem({
        instanceId,
        itemText,
        renderIcon,
        onClick,
        width: getWidth(ref),
      });
    }, [instanceId, itemText, onClick, ref, renderIcon, setItem]);

    return (
      isActive(instanceId) && (
        <Button
          {...rest}
          ref={ref}
          className={cx(`${prefix}--toolbar-item`, className)}
          kind="ghost"
          onClick={onClick}
          renderIcon={renderIcon}
          size="md"
          hasIconOnly
        />
      )
    );
  }
);

ToolbarItem.displayName = componentName;

const {
  propTypes: { onClick, renderIcon },
} = Button;

ToolbarItem.propTypes = {
  /** Provide an optional class to apply to the containing node */
  className: string,

  /** The [text for the `ToolbarItem`](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu) */
  itemText: OverflowMenuItem.propTypes.itemText,

  /** Provide an [optional function to be called when the `ToolbarItem` is clicked](https://react.carbondesignsystem.com/?path=/docs/components-button) */
  onClick,

  /** Provide an [optional function to override icon rendering](https://react.carbondesignsystem.com/?path=/docs/components-button--default#button-rendericon) */
  renderIcon,
};

ToolbarItem.defaultProps = {
  itemText: OverflowMenuItem.defaultProps.itemText,
};

ToolbarItem = checkComponentEnabled(ToolbarItem, componentName);
