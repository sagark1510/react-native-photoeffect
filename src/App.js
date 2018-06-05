import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
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
  render() {
    if (!this.state.loaded) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white' }}>Loading</Text>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FilterImage
          height={height}
          width={width}
          source={{ uri: mediaUri }}
          color={this.state.selectedFilter}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: 10,
          }}
        >
          <ScrollView horizontal>
            {Filters.map(filter => (
              <TouchableOpacity
                key={filter}
                onPress={() => this.setState({ selectedFilter: filter })}
                style={{
                  height: 70,
                  width: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: 'white' }}>{filter}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}
