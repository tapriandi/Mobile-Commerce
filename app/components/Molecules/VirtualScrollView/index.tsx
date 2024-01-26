import React, { FC, ReactElement } from 'react';
import { FlatList } from 'react-native';

interface props {
  children: ReactElement;
  showsVerticalScrollIndicator?: boolean;
  nestedScrollEnabled?: boolean;
}

const VirtualizedScrollView: FC<props> = props => {
  const {
    children,
    showsVerticalScrollIndicator = false,
    nestedScrollEnabled = false,
  } = props;

  return (
    <FlatList
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      data={[]}
      keyExtractor={(e, i) => 'dom' + i.toString()}
      ListEmptyComponent={null}
      renderItem={null}
      ListHeaderComponent={() => children}
      nestedScrollEnabled={nestedScrollEnabled}
    />
  );
};

export default VirtualizedScrollView;
