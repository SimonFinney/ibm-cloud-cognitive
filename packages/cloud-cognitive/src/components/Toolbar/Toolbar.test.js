/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render as r, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { Toolbar, ToolbarGroup, ToolbarItem } from '../..';
import { blockClass } from './Toolbar';

const { getByTestId } = screen;
const { displayName } = Toolbar;

describe(displayName, () => {
  const { fn } = jest;
  const { ResizeObserver } = window;

  const dataTestId = 'dataTestId';

  beforeAll(() => {
    window.ResizeObserver = fn().mockImplementation(() => ({
      disconnect: fn(),
      observe: fn(),
      unobserve: fn(),
    }));
  });

  afterAll(() => {
    window.ResizeObserver = ResizeObserver;
  });

  function render(props) {
    return r(
      <Toolbar data-test-id={dataTestId} {...props}>
        <ToolbarGroup>
          <ToolbarItem>{ToolbarItem.displayName}</ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );
  }

  it('renders', () => {
    render();

    expect(getByTestId(dataTestId)).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render();

    await expect(container).toBeAccessible(displayName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('adds a class to the containing node', () => {
    const className = 'class-name';
    render({ className });

    expect(getByTestId(dataTestId)).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render();

    getByTestId(dataTestId);
  });

  it('forwards a reference to the appropriate DOM node', () => {
    const ref = createRef();
    render({ ref });

    expect(getByTestId(dataTestId)).toEqual(ref.current);
  });
});
