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
import { ToolbarGroup } from '.';

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

/** Toolbar. */
let Toolbar = forwardRef(({ children: c, className, ...rest }, ref) => {
  const isActive = useCallback((instanceId) => {
    return instanceId === instanceId;
  }, []);

  const setItem = useCallback((item) => {
    setItems((items) => [...items, item]);
  }, []);

  const container = useRef();

  function onResize(width) {
    setOverflowMenu(width < container.current.getBoundingClientRect().width);
  }

  const { ref: r } = useResizeDetector({
    onResize: useCallback(onResize, []),
    targetRef: ref,
  });

  const [items, setItems] = useState([]);
  const [overflowMenu, setOverflowMenu] = useState();

  console.log('items', items);

  return (
    <div {...rest} className={cx(blockClass, className)} ref={r} role="toolbar">
      <div ref={container} className={`${blockClass}__container`}>
        {children({ children: c, isActive, setItem })}
      </div>

      {overflowMenu && (
        <ToolbarGroup>
          <OverflowMenu>
            {items.map(({ instanceId }) => (
              <OverflowMenuItem key={instanceId} itemText={instanceId} />
            ))}
          </OverflowMenu>
        </ToolbarGroup>
      )}
    </div>
  );
});

Toolbar.displayName = componentName;

Toolbar.propTypes = {
  /** Provide the content of the `Toolbar` */
  children: node,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

Toolbar = checkComponentEnabled(Toolbar, componentName);

export { children, Toolbar };
