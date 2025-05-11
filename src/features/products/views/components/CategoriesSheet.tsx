import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';

import {categories} from '../../constants/categories';
import {colors} from '../../../../constants/colors';

const CategoriesSheet = (props: SheetProps<'categories-sheet'>) => {
  return (
    <ActionSheet>
      <Text style={styles.text}>Categories</Text>
      <View style={styles.sheet}>
        {categories.map(category => (
          <TouchableOpacity
            style={[
              styles.category,
              category.id === props?.payload?.categoryId && {
                backgroundColor: colors.primary.main,
              },
            ]}
            key={category.id}
            onPress={() => {
              SheetManager.hide('categories-sheet', {payload: category.id});
            }}>
            <Text>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ActionSheet>
  );
};

export default CategoriesSheet;

const styles = StyleSheet.create({
  text: {
    paddingLeft: 12,
    paddingVertical: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  sheet: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    rowGap: 10,
    paddingBottom: 32,
  },
  category: {
    width: '49%',
    padding: 10,
    backgroundColor: colors.neutral.lightGray,
    borderRadius: 12,
  },
});
