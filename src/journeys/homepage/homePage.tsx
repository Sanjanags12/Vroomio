import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './homePage.styles';
import Arrow from '../../components/svgs/arrowIcon';
import Bus from '../../components/svgs/busIcon';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import CalenderIcon from '../../components/svgs/calenderIcon';
import {Endpoints} from '../../common/constants/endpoints.constants';
import ReusableButton from '../../components/button/reButton';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Tabs'
>;

const HomeScreen = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const isButtonDisabled = !fromLocation || !toLocation || !selectedDate;

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleSearch = () => {
    if (fromLocation && toLocation && selectedDate) {
      navigation.navigate('BusDetails', {
        from: fromLocation,
        to: toLocation,
        date: selectedDate.toISOString(),
      });
    }
  };
  
  const handleDateChange = (event: any, date?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (date) {
      setSelectedDate(date);
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginBottom: 40}}>
        <Text style={styles.title}>Vroomio</Text>
        <Text style={styles.subtitle}>Plan. Track. Ride.</Text>
        <Image
          style={{backgroundColor: 'red', height: 180, width: 380, padding: 20}}
          source={require('../../common/images/BusWallpaper.jpg')}></Image>
      </View>
      <View style={styles.inputBox}>
        <Bus width={10} height={10} style={styles.Icon} />
        <TextInput
          style={styles.inputText}
          placeholder="From (e.g. Bangalore)"
          value={fromLocation}
          onChangeText={setFromLocation}
        />
      </View>

      <View style={styles.arrowContainer}>
        <Arrow width={16} height={16} />
      </View>

      <View style={styles.inputBox}>
        <Bus width={10} height={10} style={styles.Icon} />
        <TextInput
          style={styles.inputText}
          placeholder="To (e.g. Honnavar)"
          value={toLocation}
          onChangeText={setToLocation}
        />
      </View>

      <TouchableOpacity
        style={styles.calenderBox}
        onPress={showDatePickerModal}>
        <CalenderIcon width={10} height={10} style={styles.Icon} />
        <TextInput
          style={styles.inputText}
          placeholder="Select The Date"
          value={selectedDate ? selectedDate.toDateString() : ''}
          editable={false}
        />
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <ReusableButton
        title={'Search'}
        onPress={handleSearch}
        disabled={isButtonDisabled}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
