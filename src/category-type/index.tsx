import * as React from 'react';
import styled from 'styled-components';


import { library, IconName } from '@fortawesome/fontawesome'
import { faMedapps } from '@fortawesome/fontawesome-free-brands'
import { faAnchor, faPaintBrush } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faMedapps, faAnchor, faPaintBrush)

export interface ICategoryType {
  label: string;
  color: string;
  brand: boolean;
  icon: IconName;
}

export const CategoryTypes: { [type: string]: ICategoryType } = {
  hidraulic: {
    label: 'HIDRAULICO',
    color: '#4A90E2',
    brand: false,
    icon: 'anchor',
  },
  electric: {
    label: 'ELÉTRICO',
    color: '#F5A623',
    brand: true,
    icon: 'medapps',
  },
  painting: {
    label: 'PINTURA',
    color: '#FF1782',
    brand: false,
    icon: 'paint-brush',
  },
  category: {
    label: 'CATEGORIA',
    color: '#4A4A4A',
    brand: false,
    icon: 'adjust',
  }
}

export interface ICategoryTypeProps {
  type: 'hidraulic' | 'electric' | 'painting' |'category';
}

export const TypeColor = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: ${CategoryTypes[this.props.type].color};
`;

class CategoryButton extends React.Component<ICategoryTypeProps> {

  public state = {
    type: this.props.type,
  }

  public render() {
    return (
      <TypeColor>
        {CategoryTypes[this.props.type].brand ? (
          <FontAwesomeIcon
            icon={['fab', CategoryTypes[this.props.type].icon]}
          />
        ) : (
          <FontAwesomeIcon
            icon={CategoryTypes[this.props.type].icon}
          />
        )}
        {' '}
        {CategoryTypes[this.props.type].label}
      </TypeColor>
    );
  }
}

export default CategoryButton;
