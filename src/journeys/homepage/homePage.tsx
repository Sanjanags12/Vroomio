import React, {useState, useTransition} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './homePage.styles';
import Arrow from '../../components/svgs/arrowIcon';
import Bus from '../../components/svgs/busIcon';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import CalenderIcon from '../../components/svgs/calenderIcon';
import ReusableButton from '../../components/button/reButton';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
      <View style={{marginBottom: 40}}>
        <Text style={styles.title}>Vroomio</Text>
        <Text style={styles.subtitle}>Plan. Track. Ride.</Text>
        
      </View>
      <View style={styles.inputBox}>
        <Bus width={10} height={10} style={styles.Icon} />
        <TextInput
          style={styles.inputText}
          placeholder={t('from')}
          value={fromLocation}
          onChangeText={setFromLocation}
        />
      </View>

      <View style={styles.arrowContainer}>
        <Arrow width={16} height={16} />
      </View>

      <View style={styles.inputBox}>
        <Bus width={10} height={10} style={styles.Icon}/>
        <TextInput
          style={styles.inputText}
          placeholder={t('to')}
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
          placeholder={t('select_the_date')}
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
        title={t('search')}
        onPress={handleSearch}
        disabled={isButtonDisabled}
        textStyle={{fontSize:20}}
      />

    
          
      </ScrollView>
        <Image
          style={{backgroundColor: 'red', height: 180, width: 420, padding: 20}}
          source={require('../../common/images/BusWallpaper.jpg')}></Image>
    </SafeAreaView>
  );
};

export default HomeScreen;
