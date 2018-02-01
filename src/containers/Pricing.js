import React, { Component } from "react";
import PropTypes from 'prop-types'

import { List, Button, Card, Row, Col, Icon } from 'antd';

const tierData = [
    {
        'title':'Basic',
        'price': '599',
        'subtitle': 'Powerful features and monthly uploads',
        'points': [true, true, false, false],
        'isPopular': false,
        'condition': 'Month to Month Plan'
    },
    {
        'title':'Premium',
        'price': '1,299',
        'subtitle': 'Unlimited reports and expert consultant analysis',
        'points': [true, true, true, false],
        'isPopular': true,
        'condition': 'Month to Month Plan'
    },
    {
        'title':'Customised',
        'price': '2,499',
        'subtitle': 'All features, support and customised reports',
        'points': [true, true, true, true],
        'isPopular': false,
        'condition': 'Minimum 12 month plan'
    },
]
const data = [
    'Classification of data through AI',
    'Access to analytics tools',
    'One-on-one expert analysis',
    'Customised reports',
  ];

const PricingCard = (props) =>
    <Col span={props.cardWidth} style={{padding:'0 16px'}}>
        {props.data.isPopular&&
            <Row type="flex" justify="center" style={{marginBottom:'16px', color:'rgb(159,193,69)'}}>
                <span>
                    <strong>Most Popular</strong>
                </span>
            </Row>
        }
        <Card style={{paddingBottom: '30px', borderColor: props.data.isPopular?'rgb(159,193,69)':null}}>
            <Row style={{textAlign:'center', padding: '20px'}}>
                <h3 style={{paddingBottom: '0px'}}><strong>{props.data.title}</strong></h3>
                <Row type="flex" justify="center" align="top">
                    <span>
                        <span style={{fontSize:"30px", fontWeight:'500', position: 'relative', top: '-20px'}}>$</span>
                        <span style={{fontSize:"58px"}}>{props.data.price}</span>
                        <span style={{ fontSize:"30px", fontWeight:'500', position: 'relative', top: '-20px'}}> month</span>
                    </span>
                </Row>
                <h4 style={{paddingTop: '10px', color: 'rgb(159,193,69)'}}>{props.data.subtitle}</h4>
            </Row>
            <Row style={{paddingLeft: '16px', paddingRight: '16px'}}>
                <List
                    dataSource={data}
                    renderItem={(item, i) => (
                    <List.Item>
                        {props.data.points[i]
                            ?
                            <Icon type='check-circle-o' style={{fontSize: '20px', color: '#52c41a', paddingRight: '30px'}}/>
                            :
                            <Icon type='cross-circle-o' style={{fontSize: '20px', color: '#ff4d4f', paddingRight: '30px'}}/>
                        }
                        {item}
                    </List.Item>)}
                />
            </Row>
            <Row style={{textAlign:'center'}}>
                <Button style={{marginTop: '30px', marginBottom: '30px'}} size='large' type='primary'>Sign Up</Button>
                <h4>{props.data.condition}</h4>
            </Row>
        </Card>
    </Col>

const FullWidthDiv = (props) =>
    <Row span={props.cardWidth} style={{...props.extraStyles, margin: props.margin?props.margin:'30px 0', padding: props.padding?props.padding:'40px 0', background: props.backgroundColor?props.backgroundColor:'#d9d9d9', textAlign:'center'}} {...props}>
        {props.children}
    </Row>

FullWidthDiv.propTypes = {
    backgroundColor: PropTypes.string
}


export default class Pricing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
  }

  render() {
    return (
      <div className="Pricing" style={{padding:'30px 0'}}>
        <FullWidthDiv backgroundColor='none' type='flex' justify='center' padding='16px 0' margin='16px 0'>
            <h1 style={{textAlign:'center', maxWidth: '70%', color: 'rgb(22,85,151)'}}><strong>Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</strong></h1>
        </FullWidthDiv>
        <Row style={{padding:'30px 0'}} gutter={16} type='flex' justify='center' align='bottom'>
            <PricingCard data={tierData[0]} cardWidth={7}/>
            <PricingCard data={tierData[1]} cardWidth={7}/>
            <PricingCard data={tierData[2]} cardWidth={7}/>
        </Row>
        <FullWidthDiv backgroundColor='rgb(159,193,69)'>
            <h1 style={{color:'#fff'}}><strong>Capitalize on low hanging fruit</strong></h1>
            <Row type='flex' justify='center'>
                <p style={{maxWidth: '50%'}}>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
            </Row>
            <Row type='flex' justify='center'>
                <p style={{maxWidth: '50%'}}>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </Row>
            <Row type='flex' justify='center'>
                <a href='#' style={{color:'#fff'}}>Learn more <Icon type='arrow-right' /></a>
            </Row>
        </FullWidthDiv>
        <FullWidthDiv>
        <h3 style={{color:'#1a9ed9'}}><strong>OVERRIDE THE DIGITAL DIVIDE</strong></h3>
            <h1 style={{color:'#fff'}}><strong>Capitalize on low hanging fruit</strong></h1>
            <Row type='flex' justify='center'>
                <p style={{maxWidth: '50%'}}>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
            </Row>
            <Row type='flex' justify='center'>
                <p style={{maxWidth: '50%'}}>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </Row>
            <Row type='flex' justify='center'>
                <a href='#' style={{color:'#fff'}}>Learn more <Icon type='arrow-right' /></a>
            </Row>
        </FullWidthDiv>
        <FullWidthDiv backgroundColor='#1a9ed9' extraStyles={{color: '#fff'}}>
            <h3 style={{color:'#fff'}}><strong>OVERRIDE THE DIGITAL DIVIDE</strong></h3>
            <h1 style={{color:'#fff'}}><strong>Capitalize on low hanging fruit</strong></h1>
            <Row type='flex' justify='center'>
                <p style={{maxWidth: '50%'}}>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
            </Row>
            <Row type='flex' justify='center'>
                <p style={{maxWidth: '50%'}}>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </Row>
            <Row type='flex' justify='center'>
                <a href='#' style={{color:'#fff'}}>Learn more <Icon type='arrow-right' /></a>
            </Row>
        </FullWidthDiv>
        <FullWidthDiv backgroundColor='linear-gradient(to right, rgb(22,85,151), #1a9ed9,rgb(159,193,69))' extraStyles={{color: '#fff'}}>
            <h3 style={{color:'#fff'}}><strong>OVERRIDE THE DIGITAL DIVIDE</strong></h3>
            <h1 style={{color:'#fff'}}><strong>Capitalize on low hanging fruit</strong></h1>
            <Row type='flex' justify='center'>
                <p style={{maxWidth: '50%'}}>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
            </Row>
            <Row type='flex' justify='center'>
                <p style={{maxWidth: '50%'}}>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </Row>
            <Row type='flex' justify='center'>
                <a href='#' style={{color:'#fff'}}>Learn more <Icon type='arrow-right' /></a>
            </Row>
        </FullWidthDiv>
      </div>
    );
  }
}