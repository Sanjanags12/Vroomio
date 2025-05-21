import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './busDetails.styles';
import BackArrow from '../../components/svgs/backArrow';
import MoreIcon from '../../components/svgs/moreIcon';
import SortIcon from '../../components/svgs/sortIcon';
import FilterIcon from '../../components/svgs/filterIcon';
import {Dropdown} from 'react-native-element-dropdown';
import useFetchBusDetails from '../../services/fetchBusDetails';
import {RootStackParamList} from '../../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import MemoizedDropdown from '../../components/memoizedComponent/memoizedDropdown';

type BusDetailsProps = NativeStackScreenProps<RootStackParamList, 'BusDetails'>;

const BusDetailsScreen =({ navigation, route }: BusDetailsProps): React.JSX.Element => {
  const [sortValue, setSortValue] = useState<string>('all');
  const [filterValue, setFilterValue] = useState<string>('all');
  const {data, isLoading, isError, error} = useFetchBusDetails();
  const { from = '', to = '', date = '' } = route.params || {};
  const { t }  = useTranslation();


  const sortOptions = [
    {label: 'Customer Rating', value: 'rating'},
    {label: 'Price: Low to High', value: 'lowToHigh'},
    {label: 'Price: High to Low', value: 'highToLow'},
  ];

  const filterOptions = [
    {label: 'All', value: 'all'},
    {label: 'A/C', value: 'ac'},
    {label: 'Non-A/C', value: 'nonac'},
  ];

  const handleMenuPress = () => {
    navigation.navigate('Home');
  };

  const handleMorePress = () => {
    console.log('More pressed');
  };

  const getFilteredAndSortedBuses = () => {
    let filtered = data?.data || [];

    // Filter by from and to
   filtered = filtered.filter(
  bus =>
    bus.from?.toLowerCase?.() === from.toLowerCase() &&
    bus.to?.toLowerCase?.() === to.toLowerCase(),
);

    // Filter by A/C or Non-A/C
    if (filterValue === 'ac') {
      filtered = filtered.filter(bus =>
        bus.type.toLowerCase().includes('a/c'),
      );
    } else if (filterValue === 'nonac') {
      filtered = filtered.filter(bus =>
        bus.type.toLowerCase().includes('non-a/c'),
      );
    }

    // Sort
    const sorted = [...filtered];
    if (sortValue === 'rating') {
      sorted.sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings));
    } else if (sortValue === 'lowToHigh') {
      sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortValue === 'highToLow') {
      sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    return sorted;
  };

  const buses = getFilteredAndSortedBuses();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={handleMenuPress}>
          <BackArrow width={10} height={10} style={styles.back1} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleMorePress}>
          <MoreIcon width={10} height={10} style={styles.back1} />
        </TouchableOpacity>
      </View>

      <View style={styles.heading}>
        <Text style={styles.title}>{t('bus_details')}</Text>
        <Text style={styles.subtitle}>
          {from} → {to} ({buses.length} {t('buses_found')})
        </Text>
      </View>

      <View style={styles.Filtercard}>
        

        <MemoizedDropdown
        icon={<SortIcon width={24} height={24} />}
        data={sortOptions}
        value={sortValue}
        onChange={item => setSortValue(item.value)}
        placeholder="Sort"
      />
      
      <MemoizedDropdown
      icon={<FilterIcon width={24} height={24} />}
      data={filterOptions}
      value={filterValue}
      onChange={item => setSortValue(item.value)}
      placeholder="Filter"
    />


        {/* <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <FilterIcon width={24} height={24} />
          <Dropdown
            style={[styles.dropdown, {flex: 1, marginHorizontal: 8}]}
            data={filterOptions}
            labelField="label"
            valueField="value"
            placeholder="Filter"
            value={filterValue}
            onChange={item => setFilterValue(item.value)}
          />
        </View> */}
      </View>

      <View style={styles.container}>
        {isLoading ? (
          <Text style={styles.loadingText}>Loading...</Text>
        ) : isError ? (
          <Text style={styles.errorText}>Error: {error.message}</Text>
        ) : buses.length === 0 ? (
          <Text style={styles.noBusesText}>No buses found for this route.</Text>
        ) : (
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={true}>
            {buses.map(bus => (
              <TouchableOpacity
                key={bus.id}
                style={styles.busCard}
                onPress={() =>
                  navigation.navigate('BusDescription', {
                    traveller: bus.traveller,
                    type: bus.type,
                    ratings: bus.ratings,
                    seats: bus.seats,
                    timing: bus.timing,
                    price: bus.price,
                    from: bus.from,
                    to:bus.to
                  })
                }>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text style={styles.optionTitle}>{bus.traveller}</Text>
                    <Text style={styles.bustype}>{bus.type}</Text>
                  </View>
                  <View style={styles.ratingBox}>
                    <Text style={styles.ratingText}>⭐ {bus.ratings}</Text>
                  </View>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={styles.optionSubtitle}>
                    Seats Available: {bus.seats}
                  </Text>
                  <Text style={styles.timing}>Timings: {bus.timing}</Text>
                </View>

                <Text style={styles.priceText}>₹ {bus.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default BusDetailsScreen;
