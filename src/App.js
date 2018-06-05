import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  CameraRoll,
} from 'react-native';
import ViewShot from 'react-native-view-shot';
import FilterImage from './components/FilterImage';
import Filters from './components/FilterImage/filters';

const { height, width } = Dimensions.get('window');
const mediaUri =
  'https://static.tvgcdn.net/mediabin/showcards/celebs/k-l/thumbs/leonardo-dicaprio_sc_768x1024.png';

export default class App extends Component {
  state = {
    loaded: false,
    selectedFilter: 'Normal',
  };
  componentDidMount() {
    Image.prefetch(mediaUri).then(() => {
      this.setState({ loaded: true });
    });
  }
  saveImage = () => {
    this.image.capture().then(uri => {
      // alert(uri);
      CameraRoll.saveToCameraRoll(uri);
      console.log('do something with ', uri);
    });
  };
  render() {
    if (!this.state.loaded) {
      return (
        <View style={styles.loading}>
          <Text style={{ color: 'white' }}>Loading</Text>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <ViewShot ref={input => (this.image = input)}>
          <FilterImage
            height={height}
            width={width}
            source={{ uri: mediaUri }}
            color={this.state.selectedFilter}
          />
        </ViewShot>
        <TouchableOpacity style={styles.saveBtn} onPress={this.saveImage}>
          <Text style={styles.text}>Save</Text>
        </TouchableOpacity>
        <View style={styles.filterBox}>
          <ScrollView horizontal>
            {Filters.map(filter => (
              <TouchableOpacity
                key={filter}
                onPress={() => this.setState({ selectedFilter: filter })}
                style={styles.filterItem}
              >
                <Text style={styles.text}>{filter}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  filterBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },
  filterItem: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  loading: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { color: 'white' },
  saveBtn: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    top: 30,
    right: 20,
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
    position: 'absolute',
  },
});
