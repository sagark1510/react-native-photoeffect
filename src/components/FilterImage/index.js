import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Shaders, Node, GLSL } from 'gl-react';
import { Surface } from 'gl-react-native';
import GLImage from 'gl-react-image';
import {
  Hudson,
  F1977,
  Amaro,
  Brannan,
  Earlybird,
  Hefe,
  Inkwell,
  Lokofi,
  LordKelvin,
  Nashville,
  Normal,
  Rise,
  Sierra,
  Sutro,
  Toaster,
  Valencia,
  Walden,
  XproII,
} from 'gl-react-instagramfilters';

class FilterImage extends Component {
  renderFilter(node) {
    const { color } = this.props;
    switch (color) {
      case 'Hudson':
        return <Hudson>{node}</Hudson>;
        break;
      case 'F1977':
        return <F1977>{node}</F1977>;
        break;
      case 'Amaro':
        return <Amaro>{node}</Amaro>;
        break;
      case 'Brannan':
        return <Brannan>{node}</Brannan>;
        break;
      case 'Earlybird':
        return <Earlybird>{node}</Earlybird>;
        break;
      case 'Hefe':
        return <Hefe>{node}</Hefe>;
        break;
      case 'Inkwell':
        return <Inkwell>{node}</Inkwell>;
        break;
      case 'Lokofi':
        return <Lokofi>{node}</Lokofi>;
        break;
      case 'LordKelvin':
        return <LordKelvin>{node}</LordKelvin>;
        break;
      case 'Nashville':
        return <Nashville>{node}</Nashville>;
        break;
      case 'Normal':
        return <Normal>{node}</Normal>;
        break;
      case 'Rise':
        return <Rise>{node}</Rise>;
        break;
      case 'Sierra':
        return <Sierra>{node}</Sierra>;
        break;
      case 'Sutro':
        return <Sutro>{node}</Sutro>;
        break;
      case 'Toaster':
        return <Toaster>{node}</Toaster>;
        break;
      case 'Valencia':
        return <Valencia>{node}</Valencia>;
        break;
      case 'Walden':
        return <Walden>{node}</Walden>;
        break;
      case 'XproII':
        return <XproII>{node}</XproII>;
        break;
    }
  }
  render() {
    const { color, height, width, source } = this.props;
    return (
      <Surface style={{ width, height }}>
        {this.renderFilter(<GLImage resizeMode="contain" source={source} />)}
      </Surface>
    );
  }
}

export default FilterImage;
