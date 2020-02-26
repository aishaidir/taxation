import React, { Component } from 'react'
import Carousel from 'nuka-carousel';
import { styles } from '../styles/scss/custom';
import { withStyles, Typography } from '@material-ui/core';
  
export class Slider extends Component {
    constructor(props) { 
        super(props);
        this.state = {
          autoplay: true,
          slideIndex:0,
          dotIndex:0,
        };
        
      }
      
      gotoSlide=(id)=>{
        this.setState({slideIndex:id});
      }
      static sliderItems = [
        {'topic':'Salary', 'description':'Ea occaecat exercitation tempor anim est irure nisi.', 'img':require('../image/slide1.jpg')},
        {'topic':'Leave Management', 'description':'Ut ea adipisicing ut tempor incididunt veniam minim sunt ullamco sunt cupidatat non occaecat.', 'img':require('../image/slide2.jpg')},
        {'topic':'Loan Management', 'description':'Consectetur est minim occaecat amet aliqua.', 'img':require('../image/slide1.jpg')},
        {'topic':'Support', 'description':'Qui esse laborum in pariatur voluptate veniam aliquip Lorem non aliqua eiusmod aliqua proident id.', 'img':require('../image/slide2.jpg')},
        {'topic':'Gross Income', 'description':'Excepteur elit eiusmod sunt culpa officia nisi excepteur adipisicing.', 'img':require('../image/slide1.jpg')},
        {'topic':'Pension', 'description':'Sit culpa duis qui nostrud consectetur mollit commodo tempor duis ex Lorem excepteur nostrud nostrud.', 'img':require('../image/slide2.jpg')},
        {'topic':'Income & Tax', 'description':'Eu esse fugiat anim ad consectetur sit esse nisi laboris.', 'img':require('../image/slide1.jpg')}
        
      ]
      dotsSize = ()=>{ 
        const dots = <div className="dots "></div>
        return Array.from({length:Slider.sliderItems.length},x=>dots)  
      }
      render() {
        const {classes} = this.props;
        return (
          //   <div >

          //    <Carousel  
          //    slideIndex={this.state.slideIndex}
          //    afterSlide={slideIndex =>{
          //        if(slideIndex>=4) return this.setState({slideIndex:0})
          //        this.setState({ slideIndex })} }
          //    renderCenterLeftControls={false} 
          //    renderCenterRightControls={false}
          //    renderBottomCenterControls={false}
          //    transitionMode={'fade'}
          //  width={260}
          //   autoplay={true}
          // className="carousel"
          //  >
          // {Slider.sliderItems.map((item, i)=>{
          //   return(
          //   <div className="caroItem" key={i+item.topic}>
          //   <img className="sliderContainer" style={{border:`2px solid ${blue}`}} width="250px" height="120px" src={item.img} alt={"image"+i}/>
          //   <h4 style={{fontFamily:Fonts.primary,color:blue}} className='slider-text-header'>{item.topic}</h4>
          //   <p className={classes.smallText}>{item.description}</p>
          //   </div>
          //   )
          // })}

          // </Carousel>
          //   </div>
          <div >

          <Carousel  
          speed={300}
          autoplay={this.state.autoplay}
          autoplayInterval={5000}
          slideIndex={this.state.slideIndex}
          afterSlide={slideIndex =>{
              this.setState({ slideIndex ,dotIndex:slideIndex },()=>{
                slideIndex===Slider.sliderItems.length-1? setTimeout(()=>this.setState({slideIndex:0}),4000): this.setState({ slideIndex ,dotIndex:slideIndex })
              })} }
              withoutControls={true}
          transitionMode={'fade'}
        width={260}
        wrapToIndex={true}
       className="carousel"
        >
       {Slider.sliderItems.map((item, i)=>{
         return(
         <div className="caroItem" key={i+item.topic}>
         <img className="sliderContainer"  width="250px" height="154px" src={item.img} alt={"image"+i}/>
         <Typography  className={classes.smallText}>{item.description}</Typography>
         </div>
         )
       })}
       </Carousel>
        <div className="dotsWrapper">
          {
           //  this.dotsSize()
         }
          {
            Slider.sliderItems.map((item, index) => {
              return (
               <div onClick={()=>this.gotoSlide(index)} className={`dots ${this.state.dotIndex !== index ? "dots" : "dots sliderIndex" }`}></div>
              )
            })
          }
        </div>
         </div>
        );
      }
    }
  
export default withStyles(styles)(Slider)
