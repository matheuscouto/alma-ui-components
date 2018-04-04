import * as React from 'react';
import styled from 'styled-components';


//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome'
import { faMedapps } from '@fortawesome/fontawesome-free-brands'
import { faAnchor } from '@fortawesome/fontawesome-free-solid'
import { faPaintBrush } from '@fortawesome/fontawesome-free-solid'
import CategoryType from '../category-type'
 
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

/*export interface SampleButtonProps {
  type: 'hidraulic' | 'electric' | 'painting' |'category';
}*/


class ProblemItem extends React.Component {

  state = {
    //type: this.props.type,
  }

  private onClick = () => {
    console.log("oi")
    this.setState({
      status: 'clicked',
    });
  }

  private ProblemItem = styled.button`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 133px;
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  
`;

  private ProblemItemImage = styled.img`
    width:133px;
    height:88px;
    border-radius: 3px;
    margin-bottom 5px;
  `;

  private ProblemItemTitle = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    margin: 5px 0 5px 0;
    text-align: left;
    color: #6C6A6C;
  `;

  private ProblemItemPrice = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 14px;
  margin: 0px 0 5px 0;
  text-align: left;
  color: #6C6A6C;

  `;


  public render() {
    
    const problemImage = require(`../image/pintura-mulher.jpg`);
    const problemTitle = "Pintura de parede";
    const problemPrice = "R$300";
    return (
      <this.ProblemItem type="submit" onClick={this.onClick}>
        <this.ProblemItemImage src={problemImage}/>
        <this.ProblemItemTitle>
          {problemTitle}
        </this.ProblemItemTitle>
        <this.ProblemItemPrice>
          {problemPrice}
        </this.ProblemItemPrice>
        <CategoryType type="painting"/>
      </this.ProblemItem>
    );
  }
}

export default ProblemItem;
