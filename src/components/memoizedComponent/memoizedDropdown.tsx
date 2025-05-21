import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

interface MemoizedDropdownProps {
  icon: React.ReactNode;
  data: Array<{ label: string; value: string }>;
  value: string;
  onChange: (item: { label: string; value: string }) => void;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
}

const MemoizedDropdown: React.FC<MemoizedDropdownProps> = React.memo(
  ({ icon, data, value, onChange, placeholder = '', style }) => {
    return (
      <View style={[{ flexDirection: 'row', flex: 1, alignItems: 'center'}, style]}>
        {icon}
        <Dropdown
          style={{ flex: 1, marginHorizontal: 8 }}
          data={data}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </View>
    );
  },
  (prevProps, nextProps) =>
    prevProps.value === nextProps.value &&
    prevProps.data === nextProps.data &&
    prevProps.placeholder === nextProps.placeholder
);

export default MemoizedDropdown;
