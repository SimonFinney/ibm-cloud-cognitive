/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react';
import cx from 'classnames';
import { node, string } from 'prop-types';

import React, {
  Children,
  cloneElement,
  forwardRef,
  useCallback,
  useRef,
  useState,
} from 'react';

import flattenChildren from 'react-keyed-flatten-children';
import { useResizeDetector } from 'react-resize-detector';

import { pkg } from '../../settings';

const { checkComponentEnabled, prefix } = pkg;

const componentName = 'Toolbar';
const blockClass = `${prefix}--toolbar`;

function children({ children, isActive, setItem }) {
  return Children.map(flattenChildren(children), (child) => {
    return cloneElement(child, {
      isActive,
      setItem,
    });
  });
}

function getWidth(ref) {
  return ref.current?.getBoundingClientRect().width;
}

/** Toolbar. */
let Toolbar = forwardRef(({ children: c, className, ...rest }, ref) => {
  const [items, setItems] = useState([]);
  const [overflowMenuItems, setOverflowMenuItems] = useState([]);

  const isActive = useCallback(
    (instanceId) => {
      return !overflowMenuItems.some(({ instanceId: id }) => id === instanceId);
    },
    [overflowMenuItems]
  );

  const setItem = useCallback((item) => {
    setItems((items) => [...items, item]);
  }, []);

  const container = useRef();
  const overflowMenu = useRef();

  function onResize(width) {
    let newOverflowMenuItems = overflowMenuItems;
    const containerWidth = getWidth(container);

    if (width < containerWidth) {
      newOverflowMenuItems = [
        items[items.length - 1 - overflowMenuItems.length],
        ...overflowMenuItems,
      ];
    } else if (width > containerWidth + getWidth(overflowMenu) * 2) {
      newOverflowMenuItems = overflowMenuItems.slice(1);
    }

    setOverflowMenuItems(newOverflowMenuItems);
  }

  const { ref: r } = useResizeDetector({
    onResize: useCallback(onResize, [items, overflowMenu, overflowMenuItems]),
    targetRef: ref,
  });

  return (
    <div {...rest} ref={r} className={cx(blockClass, className)} role="toolbar">
      <div ref={container} className={`${blockClass}__container`}>
        {children({ children: c, isActive, setItem })}
      </div>

      {overflowMenuItems.length > 0 && (
        <OverflowMenu
          ref={overflowMenu}
          className={`${blockClass}__overflow-menu`}
          flipped>
          {overflowMenuItems.map(
            ({ instanceId, itemText, renderIcon: Icon, ...rest }) => (
              <OverflowMenuItem
                {...rest}
                key={instanceId}
                itemText={
                  <>
                    <Icon />
                    <span className={`${blockClass}__overflow-menu__text`}>
                      {itemText}
                    </span>
                  </>
                }
              />
            )
          )}
        </OverflowMenu>
      )}
    </div>
  );
});

Toolbar.displayName = componentName;

Toolbar.propTypes = {
  /** Provide the content of the `Toolbar` */
  children: node.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

Toolbar = checkComponentEnabled(Toolbar, componentName);

export { blockClass, children, getWidth, Toolbar };
