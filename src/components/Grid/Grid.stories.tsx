import React from 'react';
import { Meta } from '@storybook/react';
import GridContainer from './GridContainer';
import Column from './Column';
import Row from './Row';

export default {
  title: 'Components/Layout/Grid System',
  component: GridContainer,
} as Meta;

export const NormalGrid = () => (
  <GridContainer>
    <Row>
      <Column sm={4} md={2} lg={1}>Col 1</Column>
      <Column sm={4} md={2} lg={1}>Col 2</Column>
      <Column sm={4} md={2} lg={1}>Col 3</Column>
      <Column sm={4} md={2} lg={1}>Col 4</Column>
      <Column sm={4} md={2} lg={1}>Col 5</Column>
      <Column sm={4} md={2} lg={1}>Col 6</Column>
      <Column sm={4} md={2} lg={1}>Col 7</Column>
      <Column sm={4} md={2} lg={1}>Col 8</Column>
      <Column sm={4} md={2} lg={1}>Col 9</Column>
      <Column sm={4} md={2} lg={1}>Col 10</Column>
      <Column sm={4} md={2} lg={1}>Col 11</Column>
      <Column sm={4} md={2} lg={1}>Col 12</Column>
    </Row>
  </GridContainer>
);
