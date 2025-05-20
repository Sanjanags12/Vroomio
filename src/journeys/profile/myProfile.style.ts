import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000',
  },
  NameHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#000',
    fontFamily: 'ShadowlightRegular',
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    color: '#888',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  name: {
    fontSize: 30,
    color: '#000',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#f4f4f4',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    fontSize: 16,
    color: '#000',
    minWidth: 200,
  },

  box: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  insideBox: {
    flex: 1,
    flexDirection: 'column',
  },
});
