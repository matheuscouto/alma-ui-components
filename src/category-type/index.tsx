import * as React from 'react';
import styled from 'styled-components';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome'
import { faMedapps } from '@fortawesome/fontawesome-free-brands'
import { faAnchor, faPaintBrush } from '@fortawesome/fontawesome-free-solid'
 
library.add(faMedapps, faAnchor, faPaintBrush)

export const CategoryTypes = {
  hidraulic: {
    label: 'HIDRAULICO',
    color: '#4A90E2',
    brand: false,
    icon: 'anchor'
  },
  electric: {
    label: 'ELÉTRICO',
    color: '#F5A623',
    brand: true,
    icon: 'medapps'
  },
  painting: {
    label: 'PINTURA',
    color: '#FF1782',
    brand: false,
    icon: 'paint-brush'
  },
  category: {
    label: 'CATEGORIA',
    color: '#4A4A4A',
    brand: false,
    icon: ''
  } 
}

export interface CategoryTypeProps {
  type: 'hidraulic' | 'electric' | 'painting' |'category';
}


class CategoryButton extends React.Component<CategoryTypeProps> {

  state = {
    type: this.props.type,
  }

  private TypeColor = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: ${CategoryTypes[this.props.type].color};
  `;

  public render() {
    return (
      <this.TypeColor>
        {CategoryTypes[this.props.type].brand ? <FontAwesomeIcon icon={['fab',CategoryTypes[this.props.type].icon]}  /> : <FontAwesomeIcon icon={CategoryTypes[this.props.type].icon} />} {CategoryTypes[this.props.type].label}
      </this.TypeColor>
    );
  }
}

export default CategoryButton;
