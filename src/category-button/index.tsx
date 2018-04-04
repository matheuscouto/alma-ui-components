import * as React from 'react';
import styled from 'styled-components';


import { library } from '@fortawesome/fontawesome'
import { faMedapps } from '@fortawesome/fontawesome-free-brands'
import { faAnchor, faPaintBrush } from '@fortawesome/fontawesome-free-solid'

import CategoryType from '../category-type';
 
library.add(faMedapps, faAnchor, faPaintBrush)

export const CategoryTypes = {
  hidraulic: {
    color: '#4A90E2',
  },
  electric: {
    color: '#F5A623',
  },
  painting: {
    color: '#FF1782',
  },
  category: {
    color: '#4A4A4A',
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
  width: 103px;
  height: 26px;
  border-radius: 4px;
  border-color: ${CategoryTypes[this.props.type].color};
`;

  public render() {
    return (
      <this.CategoryButton type="submit" onClick={this.onClick}>
        <CategoryType
          type={this.props.type}
        />
      </this.CategoryButton>
    );
  }
}

export default CategoryButton;
