import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useProductViewModel} from '../../viewmodels/ProductViewModel';
import CategoriesSheet from '../components/CategoriesSheet';
export default function ProductListScreen() {
  const {filteredProducts, openCategorySheet} = useProductViewModel();

  return (
    <View style={{flex: 1, paddingTop: 22}}>
      <CategoriesSheet sheetId="categories-sheet" />

      <FlatList
        ListHeaderComponent={() => (
          <TouchableOpacity
            style={styles.filterButton}
            onPress={openCategorySheet}>
            <Image
              style={styles.filterImg}
              source={require('../icons/filter.png')}
            />
          </TouchableOpacity>
        )}
        data={filteredProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image source={{uri: item.images[0]}} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButton: {alignSelf: 'flex-end', paddingRight: 8},
  filterImg: {width: 32, height: 32},
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  image: {width: '100%', height: 150, borderRadius: 8},
  title: {fontWeight: 'bold', fontSize: 16, marginTop: 8},
  price: {color: 'green', marginTop: 4},
});
