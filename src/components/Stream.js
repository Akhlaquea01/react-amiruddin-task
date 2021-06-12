import React from 'react';
import { Carousel } from 'react-bootstrap'
import london from './img/london.png'
import sydney from './img/sydney.png'
import './stream.css'
import $ from 'jquery'


const Stream = () => {

   
    return (
        <>
            <h3 style={{textAlign:"center"}}>EXPLORE STREAMS</h3>
            <div class="container-fluid">
  <div class="content-wrapper narrow products-in-focus">
    <div class="product-wrapper">
      <div class="swiper-container products-in-focus">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src={london}/>
            <div class="product-info-wrapper">
              <div class="product-info">
                <div class="row no-gutters">
                  <div class="col-7">
                    <strong class="text-uppercase">Amino Force</strong>
                    <span class="product-info-link"><a href="#">Kurzinfo</a></span>
                  </div>
                  <div class="col-5 text-right">
                   
                    <div class="product-info-price">CHF 34.00</div>
                  </div>
                </div>
              </div>
              <div class="product-badge-wrapper">
                <div class="product-badge dark-gray">
                  <div class="product-badge-content text-center">
                    %&nbsp;&nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <img src={london}/>
            <div class="product-info-wrapper">
              <div class="product-info">
                <div class="row no-gutters">
                  <div class="col-8">
                    <strong class="text-uppercase">Basic Minerals</strong>
                    <span class="product-info-link"><a href="#">Kurzinfo</a></span>
                  </div>
                  <div class="col-4 text-right">
                    <span class="product-info-price">CHF 34.00</span>
                  </div>
                </div>
              </div>
              <div class="product-badge-wrapper">
                <div class="product-badge red">
                  <div class="product-badge-content">
                    new
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <img src="http://www.placehold.it/80x130"/>
            <div class="product-info-wrapper">
              <div class="product-info">
                <div class="row no-gutters">
                  <div class="col-8">
                    <strong class="text-uppercase">Amino Force</strong>
                    <span class="product-info-link"><a href="#">Kurzinfo</a></span>
                  </div>
                  <div class="col-4 text-right">
                    <span class="product-info-price">CHF 34.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <img src="http://www.placehold.it/80x130"/>
            <div class="product-info-wrapper">
              <div class="product-info">
                <div class="row no-gutters">
                  <div class="col-8">
                    <strong class="text-uppercase">Whey Isolat CFM</strong>
                    <span class="product-info-link"><a href="#">Kurzinfo</a></span>
                  </div>
                  <div class="col-4 text-right">
                    <span class="product-info-price">CHF 34.00</span>
                  </div>
                </div>
              </div>
              <div class="product-badge-wrapper">
                <div class="product-badge">
                  <div class="product-badge-content text-small">
                    nicht<br/>auf lager
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <img src="http://www.placehold.it/80x130"/>
            <div class="product-info-wrapper">
              <div class="product-info">
                <div class="row no-gutters">
                  <div class="col-8">
                    <strong class="text-uppercase">Amino Force</strong>
                    <span class="product-info-link"><a href="#">Kurzinfo</a></span>
                  </div>
                  <div class="col-4 text-right">
                    <span class="product-info-price">CHF 34.00</span>
                  </div>
                </div>
              </div>
              <div class="product-badge-wrapper">
                <div class="product-badge red">
                  <div class="product-badge-content">
                    new
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <img src="http://www.placehold.it/80x130"/>
            <div class="product-info-wrapper">
              <div class="product-info">
                <div class="row no-gutters">
                  <div class="col-8">
                    <strong class="text-uppercase">Basic Minerals</strong>
                    <span class="product-info-link"><a href="#">Kurzinfo</a></span>
                  </div>
                  <div class="col-4 text-right">
                    <span class="product-info-price">CHF 34.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <img src="http://www.placehold.it/80x130"/>
            <div class="product-info-wrapper">
              <div class="product-info">
                <div class="row no-gutters">
                  <div class="col-8">
                    <strong class="text-uppercase">Amino Force</strong>
                    <span class="product-info-link"><a href="#">Kurzinfo</a></span>
                  </div>
                  <div class="col-4 text-right">
                    <span class="product-info-price">CHF 34.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <img src="http://www.placehold.it/80x130"/>
            <div class="product-info-wrapper">
              <div class="product-info">
                <div class="row no-gutters">
                  <div class="col-8">
                    <strong class="text-uppercase">Whey Isolat CFM</strong>
                    <span class="product-info-link"><a href="#">Kurzinfo</a></span>
                  </div>
                  <div class="col-4 text-right">
                    <span class="product-info-price">CHF 34.00</span>
                  </div>
                </div>
              </div>
              <div class="product-badge-wrapper">
                <div class="product-badge">
                  <div class="product-badge-content text-small">
                    nicht<br/>auf lager
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-focus-prev"><i class="fa fa-chevron-left"></i></div>
      <div class="product-focus-next"><i class="fa fa-chevron-right"></i></div>
    </div>
  </div>
</div>
            
        </>
    )
}

export default Stream
