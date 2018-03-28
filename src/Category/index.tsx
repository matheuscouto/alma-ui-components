import * as React from 'react';
import styled from 'styled-components';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome'
import { faMedapps } from '@fortawesome/fontawesome-free-brands'
import { faAnchor } from '@fortawesome/fontawesome-free-solid'
import { faPaintBrush } from '@fortawesome/fontawesome-free-solid'
 
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

export interface SampleButtonProps {
  type: 'hidraulic' | 'electric' | 'painting' |'category';
}


class CategoryButton extends React.Component<SampleButtonProps> {

  state = {
    type: this.props.type,
  }

  private onClick = () => {
    console.log("oi")
    this.setState({
      status: 'clicked',
    });
  }

  private CategoryButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
  width: 103px;
  height: 26px;
  border-radius: 4px;
  color: ${CategoryTypes[this.props.type].color};
  border-color: ${CategoryTypes[this.props.type].color};
`;

  public render() {
    return (
      <this.CategoryButton type="submit" onClick={this.onClick}>
        {CategoryTypes[this.props.type].brand ? <FontAwesomeIcon icon={['fab',CategoryTypes[this.props.type].icon]}  /> : <FontAwesomeIcon icon={CategoryTypes[this.props.type].icon} />} {CategoryTypes[this.props.type].label}
      </this.CategoryButton>
    );
  }
}

export default CategoryButton;
