/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Add20 } from '@carbon/icons-react';
import mdx from './ErrorEmptyState.mdx';
import {
  getStoryTitle,
  prepareStory,
} from '../../../global/js/utils/story-helper';

import { ErrorEmptyState } from '.';

import styles from '../_index.scss';

export default {
  title: getStoryTitle(ErrorEmptyState.displayName),
  component: ErrorEmptyState,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultStoryProps = {
  title: 'Empty state title',
  subtitle: 'Description text explaining why this section is empty.',
};

const Template = (args) => {
  return <ErrorEmptyState {...args} />;
};

export const Default = prepareStory(Template, {
  args: {
    ...defaultStoryProps,
  },
});

export const WithDarkModeIllustration = prepareStory(Template, {
  args: {
    ...defaultStoryProps,
    illustrationTheme: 'dark',
  },
});

export const withAction = prepareStory(Template, {
  args: {
    ...defaultStoryProps,
    action: {
      text: 'Create new',
      onClick: action('Clicked empty state action button'),
    },
  },
});

export const withActionIconButton = prepareStory(Template, {
  args: {
    ...defaultStoryProps,
    action: {
      text: 'Create new',
      onClick: action('Clicked empty state action button'),
      renderIcon: Add20,
      iconDescription: 'Add icon',
    },
  },
});

export const withLink = prepareStory(Template, {
  args: {
    ...defaultStoryProps,
    link: {
      text: 'View documentation',
      href: 'https://www.carbondesignsystem.com',
    },
  },
});

export const withActionAndLink = prepareStory(Template, {
  args: {
    ...defaultStoryProps,
    action: {
      text: 'Create new',
      onClick: action('Clicked empty state action button'),
      renderIcon: Add20,
      iconDescription: 'Add icon',
    },
    link: {
      text: 'View documentation',
      href: 'https://www.carbondesignsystem.com',
    },
  },
});
