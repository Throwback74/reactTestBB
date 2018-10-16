import PropTypes from 'prop-types';
import React, { Component } from 'react';
import products from '../../products.json';
import { Hero, HeroHeader, Navbar, NavbarBrand, NavbarItem, NavbarEnd, Tabs, NavbarMenu, HeroBody, Title, HeroFooter, Container } from 'bloomer';
import { MenuSelect, Panel, InstantSearch, Hits, SearchBox, Highlight, Pagination, CurrentRefinements, ClearRefinements } from 'react-instantsearch-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// eslint-disable-next-line 
import reactbulma from 'reactbulma';
import Footer from '../Footer';
import './Products.css';
var Prices;

function Result() {
  return (
    <div className="container">
      <SearchBox translations={{placeholder: 'Search for products'}}/>
      <CurrentRefinements />
      <ClearRefinements />
      <Panel
      className="panelSection"
      header="Select Category"
      >
      <MenuSelect attribute='categoryName'
      defaultRefinement="Flower"
      limit={10}
      showMore={false}
      showMoreLimit={20} />
      <Hits hitComponent={Response} />
      <Pagination showLast/>
      </Panel>
    </div>
  );
};

// function Response({ hit }) {
//   console.log({hit});
//   return (    
//   <div className="hit" style={{ marginTop: '10px' }}>
//     <div className="hit-image">
//       <img alt={hit.name} src={`${hit.thumbURL}`}/>
//     </div>
//     <div className="hit-content">
//       <div className="hit-price">${hit && hit.prices ? hit.prices[0].cost : null}/{hit.prices[0].unit}</div>
//       <span className="hit-name">
//         <Highlight attribute="name" hit={hit} />
//       </span>
//     </div>
//   </div>
//   );
// };${hit.prices[0].cost}

function isUndefined({ hit }) {
  console.log("checking", {hit});
  if(`${hit.prices[0].cost}`) {
    return (
      Prices = <div className="hit-price">${hit.prices[0].cost}/{hit.prices[0].unit}</div>);
  }else {
    return (
      Prices = <div className="hit-price">No Prices Available</div>
      );
  }
}

function Response({ hit }) {
  console.log({hit});
  isUndefined({ hit });
  return (
  <div className="hit" style={{ marginTop: '10px' }}>
    <div className="hit-image">
      <img alt={hit.name} src={`${hit.thumbURL}`}/>
    </div>
    <div className="hit-content">
      {Prices}
      {/* <div className="hit-price">${hit.prices[0].cost ? hit.prices[0].cost : ''}/{hit.prices[0].unit}</div>*/}
      <span className="hit-name"> 
        <Highlight attribute="name" hit={hit} />
      </span>
    </div>
  </div>
  );
};

Response.propTypes = {
  hit: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
};

class Products extends Component {

  state = {
    products: products
  }



  

  componentDidMount = (products) => {
    console.log(this.state.products);
  }

  render() {
    return (
      <div>
      <Hero className='bbImage' isColor='success' isFullHeight>
        <HeroHeader>
        <Navbar style={{ border: 'solid 1px #454545', margin: '0' }}>
          <NavbarBrand>
              <NavbarItem>
                  <a href='https://budbytes.com/' className='imgLink'><img src='https://budbyteshome-c59c.kxcdn.com/wp-content/uploads/2017/08/New_BB_Logo_White_V2.png' alt='BudBytes Logo' style={{ marginRight: 5 }} /> </a>
              </NavbarItem>
          </NavbarBrand>
          <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
              <NavbarEnd>
                  <NavbarItem>
                    <a className='github' href='https://github.com/Throwback74/reactTest'><span className='githubLabel'>Check Us Out on GitHub  </span><FontAwesomeIcon icon={faGithub} /></a>
                  </NavbarItem>
              </NavbarEnd>
          </NavbarMenu>
          </Navbar>
        </HeroHeader>

        <HeroBody>
            <Container hasTextAlign='centered'>
                <Title>Search Cannabis Products from Participating Dispensaries</Title>
                <InstantSearch
                appId='K4NTU5WRFF'
                apiKey='4a12f963cfba9e587640d890b47d0120'
                indexName='BBFlowers'
                >
                <Result />
              </InstantSearch>
            </Container>
        </HeroBody>

        <HeroFooter>
          <Tabs isBoxed isFullWidth>
            <Container>
              <Footer />
            </Container>
          </Tabs>
        </HeroFooter>
        </Hero>
      </div>
    )
  }
}

export default Products;