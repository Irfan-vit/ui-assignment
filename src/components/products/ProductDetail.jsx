import { useState } from 'react'
import { Link, useParams, NavLink, Outlet } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import './productDetail.css'
import useProductDetailData from '../../queryHooks/useGetProductDetail'
import fb from '../../assets/img/fb.svg'
import tw from '../../assets/img/tw.svg'
import pt from '../../assets/img/pt.svg'
const ProductDetail = () => {
  const { productId } = useParams()
  const { getProductDetailQuery } = useProductDetailData(productId)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <>
      <div className="product-detail-container">
        <div className="detail-images">
          <Link to="/product">
            <div>
              <span className="material-symbols-outlined">arrow_back</span>
              <p>Back to producs</p>
            </div>
          </Link>
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src={getProductDetailQuery.data?.imgSrc} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.abokichi.com/cdn/shop/collections/Bulk_Products_2.png?v=1675878702&width=535" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.abokichi.com/cdn/shop/collections/Miso_Page.png?v=1678908136&width=535" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.abokichi.com/cdn/shop/collections/20220510_ABORamenALL.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.abokichi.com/cdn/shop/collections/Screen_Shot_2022-10-04_at_9.48.19_AM_1.png" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={getProductDetailQuery?.data?.imgSrc} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.abokichi.com/cdn/shop/collections/Bulk_Products_2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.abokichi.com/cdn/shop/collections/Miso_Page.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.abokichi.com/cdn/shop/collections/20220510_ABORamenALL.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.abokichi.com/cdn/shop/collections/Screen_Shot_2022-10-04_at_9.48.19_AM_1.png" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="detail-content">
          <h1>{getProductDetailQuery?.data?.title}</h1>
          <h2>${getProductDetailQuery?.data?.price}</h2>
          <div className="product-secondary-data">
            <Rating
              fillColor="#FF8636"
              initialValue={getProductDetailQuery?.data?.rating}
              transition
              size={34}
            />
            <hr
              style={{
                background: '#707070',
                height: '180%',
                width: '1px',
                margin: '0',
                padding: '0',
              }}
            />
            <p>24 Reviews</p>
          </div>
          <div className="product-description">
            <p>
              Your new cooking BFF! You can add this to virtually everything.
              Try it on rice, on meat or tofu, in your burger, ramen and pretty
              much anything.
            </p>
          </div>
          <div className="product-actions">
            <div className="product-action-btns">
              <button>Add To Cart</button>
              <button>Buy Now</button>
            </div>
            <div className="wishlist">
              <span className="material-symbols-outlined">favorite</span>
              <span>WISHLIST</span>
            </div>
          </div>
          <div className="share-icons">
            <span>SHARE</span>
            <img src={fb} alt="" />
            <img src={tw} alt="" />
            <img src={pt} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="product-details-div">
          <div className="produc-details-nav">
            <NavLink
              to={`/product/${productId}/description`}
              className="profile-tab"
              //   style={getActiveStyle}
            >
              DESCRIPTION
            </NavLink>
            <NavLink
              to={`/product/${productId}/reviews`}
              className="profile-tab"
              //   style={getActiveStyle}
            >
              REVIEWS
            </NavLink>
            <NavLink
              to={`/product/${productId}/videos`}
              className="profile-tab"
              //   style={getActiveStyle}
            >
              VIDEOS
            </NavLink>
            <NavLink
              to={`/product/${productId}/comments`}
              className="profile-tab"
              //   style={getActiveStyle}
            >
              COMMENTS
            </NavLink>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductDetail
