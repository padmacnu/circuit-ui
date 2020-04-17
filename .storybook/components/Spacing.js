/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { ThemeProvider } from '@emotion/react';

import { theme as themes, Text } from '../../src';

const Box = styled('div')`
  ${({ theme, spacingName }) => css`
    width: ${theme.spacings[spacingName]};
    height: ${theme.spacings[spacingName]};
    border-radius: ${theme.borderRadius.kilo};
    background-color: ${theme.colors.r300};
    margin-right: ${theme.spacings.mega};
  `};
`;

const Wrapper = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacings.mega};
  `};
`;

const SpacingSize = styled('span')`
  ${({ theme }) => css`
    color: ${theme.colors.n500};
  `};
`;

const SpacingName = styled(Text)`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.kilo};
    color: ${theme.colors.n500};
  `};
`;

const Spacing = ({ spacingName }) => (
  <ThemeProvider theme={themes.circuit}>
    <Wrapper>
      <Box spacingName={spacingName} />
      <div>
        <Text as="span">{spacingName}</Text>
        <SpacingSize>
          <SpacingName size={Text.KILO} as="span">
            {themes.circuit.spacings[spacingName]}
          </SpacingName>
        </SpacingSize>
      </div>
    </Wrapper>
  </ThemeProvider>
);

Spacing.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  spacingName: PropTypes.string.isRequired
};

export default Spacing;
