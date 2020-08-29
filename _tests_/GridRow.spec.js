import React from 'react';
import { mount } from 'enzyme';
import _ from 'lodash';

import { GridRow } from '../components/GridRow';
import { Text } from '../components/Text';

describe('GridRow', () => {
  it('renders a GridRow', () => {
    const testNumberOfColumns = 2;
    const demo = mount(<GridRow columns={testNumberOfColumns} />);
    const instance = demo.instance();
    const instanceColumns = instance.props.columns;

    expect(instance).toBeInstanceOf(GridRow);
    expect(instanceColumns).toEqual(testNumberOfColumns);

    demo.unmount();
  });

  it('uses groupByRows method to group data by rows', () => {
    const testNumberOfColumns = 2;
    const testData = [
      { counter: 1 },
      { counter: 2 },
      { counter: 3 },
      { counter: 4 },
      { counter: 5 },
    ];
    const demo = mount(<GridRow columns={testNumberOfColumns} />);
    const instance = demo.instance();
    const instanceColumns = instance.props.columns;
    const groupedData = GridRow.groupByRows(testData, testNumberOfColumns);
    const expectedGroupedData = [
      [{ counter: 1 }, { counter: 2 }],
      [{ counter: 3 }, { counter: 4 }],
      [{ counter: 5 }],
    ];

    expect(instance).toBeInstanceOf(GridRow);
    expect(instanceColumns).toEqual(testNumberOfColumns);
    expect(groupedData).toEqual(expectedGroupedData);

    demo.unmount();
  });

  it('renders nested children', () => {
    const testNumberOfColumns = 2;
    const testData = [{ count: 1 }, { count: 2 }];
    const testItemViews = _.map(testData, (testItem) => {
      return <Text key={testItem.count}>{testItem.count}</Text>
    });
    const demo = mount(
      <GridRow columns={testNumberOfColumns}>
        {testItemViews}
      </GridRow>
    );
    const instance = demo.instance();
    const instanceColumns = instance.props.columns;
    const numberOfChildren = instance.props.children.length;

    expect(instance).toBeInstanceOf(GridRow);
    expect(instanceColumns).toEqual(testNumberOfColumns);
    expect(numberOfChildren).toEqual(testData.length);

    demo.unmount();
  });
});
