"use client"

import mainImg from '../assets/img/main.jpg'
import first from '../assets/img/first.svg'
import second from '../assets/img/second.svg'
import third from '../assets/img/third.svg'

import staff1 from '../assets/img/staff-1.jpg'
import staff2 from '../assets/img/staff-2.jpg'
import staff3 from '../assets/img/staff-3.jpg'

import Image from "next/image";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';


export default function Home() {
  return (
    <>
      <div className="container mx-auto px-2 sm:px-2 md:px-0 lg:px-0">
        <header className="flex w-full py-4 justify-between lg:justify-normal">
          <div className='text-2xl font-semibold text-[#EE8B53]'>
            ТепликДЮСШ
          </div>
          <ul className="ml-auto lg:flex gap-16 font-semibold hidden">
            <li className='text-[#727070] hover:text-[#EE8B53] cursor-pointer transition-all duration-200'>
              Направления
            </li>
            <li className='text-[#727070] hover:text-[#EE8B53] cursor-pointer transition-all duration-200'>
              Наш коллектив
            </li>
            <li className='text-[#727070] hover:text-[#EE8B53] cursor-pointer transition-all duration-200'>
              Фотогалерея
            </li>
            <li className='text-[#727070] hover:text-[#EE8B53] cursor-pointer transition-all duration-200'>
              Новости
            </li>
            <li className='text-[#727070] hover:text-[#EE8B53] cursor-pointer transition-all duration-200'>
              Контакты
            </li>
          </ul>

          <button className='lg:hidden'>
            ....
          </button>
        </header>
      </div>
      <div className="container mx-auto px-2 sm:px-2 md:px-3 lg:px-4 mb-4 lg:mb-0">
        <div className="flex-col lg:flex-row flex justify-around py-4 lg:pt-6 lg:pb-2 gap-5">
          <div className="flex flex-col lg:w-[600px]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold lg:mb-5 xl:mb-10">
              Ласкаво просимо на сайт Теплицької Спортивної Школи – це місце мрій та формування майбутніх чемпіонів!
            </h1>
            <div className="text-[18px] xl:text-xl hidden lg:block">
              Наша школа – це інноваційний центр, створений для розвитку фізичних та розумових здібностей молоді. Наша
              команда професійних тренерів та педагогів пропонує унікальні програми з різних видів спорту, адаптовані до
              індивідуальних потреб кожного учня.
            </div>
          </div>
          <div>
            <Image src={mainImg} className='w-full' alt="Main Image"/>
            <div className='py-4 gap-5'>
              <ul className='flex justify-around '>
                <li className='text-center'>
                <span className='font-bold sm:text-lg'>
                  297+
                </span><br/>
                  <p className='text-black/60 sm:text-[14px] text-[12px]'>
                    Учнiв
                  </p>
                </li>
                <li className='text-center'>
                <span className='font-bold sm:text-lg'>
                  43+
                </span>
                  <p className='text-black/60 sm:text-[14px] text-[12px]'>
                    Турнiрiв за рiк
                  </p>
                </li>
                <li className='text-center '>
                <span className='font-bold  sm:text-lg'>
                  23+
                </span>
                  <p className='text-black/60 sm:text-[14px] text-[12px]'>
                    Медалi <br/>i нагороди
                  </p>
                </li>
                <li className='text-center'>
                <span className='font-bold sm:text-lg'>
                  12+
                </span>
                  <p className='text-black/60 sm:text-[14px] text-[12px]'>
                    Спортивнi <br/>напрямки
                  </p>
                </li>
              </ul>
            </div>
            <div className="text-xl lg:hidden">
              Наша школа – це інноваційний центр, створений для розвитку фізичних та розумових здібностей молоді. Наша
              команда професійних тренерів та педагогів пропонує унікальні програми з різних видів спорту, адаптовані до
              індивідуальних потреб кожного учня.
            </div>
          </div>
        </div>
      </div>
      <article className='mb-8 md:mb-14'>
        <div className="container mx-auto px-2 sm:px-2 md:px-2 lg:px-2">

          <div className='mb-8'>
            <h2 className='text-2xl font-semibold text-center'>Що робить нашу школу особливою?</h2>
          </div>
          <div className='flex  flex-col items-center sm:items-start sm:gap-5 gap-10 sm:flex-row sm:justify-around'>

            <div className='w-[255px] gap-3 justify-between flex flex-col items-center text-center '>
              <div className='h-[71px] w-[71px] bg-[#749BFF] rounded-full flex justify-center items-center '>
                <Image src={first} height={40} width={40} alt={""}/>
              </div>
              <p className='text-[#749BFF] text-[18px] font-semibold'>
                Індивідуальний підхід
              </p>
              <p className='text-[15px]'>
                Ми віримо в унікальність кожної особи. Наші тренери ретельно аналізують потенціал кожного учня, створюючи персоналізовані тренувальні програми
              </p>
            </div>

            <div className='w-[255px] gap-3 justify-between flex flex-col items-center text-center '>
              <div className='h-[71px] w-[71px] bg-[#82DC3B] rounded-full flex justify-center items-center '>
                <Image src={second} height={40} width={40} alt={""}/>
              </div>
              <p className='text-[#82DC3B] text-[18px] font-semibold'>
                Сучасні тренувальні
                майданчики
              </p>
              <p className='text-[15px]'>
                Обладнані за останнім словом техніки спортивні майданчики забезпечують комфортні умови для тренувань та змагань

              </p>
            </div>
            <div className='w-[255px] gap-3 justify-between flex flex-col items-center text-center '>
              <div className='h-[71px] w-[71px] bg-[#EE8B53] rounded-full flex justify-center items-center '>
                <Image src={third} height={40} width={40} alt={""}/>
              </div>
              <p className='text-[#EE8B53] text-[18px] font-semibold'>
                Емоційна підтримка

              </p>
              <p className='text-[15px]'>
                Ми не просто навчаємо спорту, ми формуємо сильних, упевнених у собі особистостей. Психологічна підтримка та командна робота – важливі складові наших програм
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className='mx-2 sm:mx-10 mb-10'>
        <div className="container mx-auto px-2 sm:px-0 md:px-0 lg:px-0">
          <div className='flex justify-center pb-8'>
            <h2 className='text-2xl font-semibold'>Наш коллектив</h2>
          </div>
          <StaffSlider/>
          <p className='text-[15px] lg:w-1/2 lg:text-center mx-auto '>
            Дозвольте нам представити наш колектив талановитих фахівців, які віддано працюють над досягненням спільної мети. Кожен з нас - висококваліфікований професіонал, готовий забезпечити вас найкращими послугами і знаннями в своїй галузі.          </p>
        </div>
      </article>

      <article className='mx-2 sm:mx-10 mb-10'>
        <div className="container mx-auto px-2 sm:px-0 md:px-0 lg:px-0">

          <div className='flex justify-center pb-8'>
            <h2 className='text-2xl font-semibold'>Нашi Напрямки</h2>
          </div>
          <StaffSlider/>
          <p className='text-[15px] lg:w-1/2 lg:text-center mx-auto '>
            Погляньте на різноманітні напрямки роботи нашої команди. Ми спеціалізуємося в різних галузях, таких як волейбол, футбол та інші види спорту, щоб надати вам широкий спектр високоякісних рішень.
          </p>
        </div>

      </article>

      <footer className='py-6 border-t-4'>
        <div className="container mx-auto px-2 sm:px-0 md:px-0 lg:px-0">
          <div className='flex flex-col sm:flex-row w-full justify-between gap-3'>
            <div className=' '>
              <p className='text-2xl font-semibold  text-[#EE8B53] pb-2'>ТепликДЮСШ</p>
              <p className='text-[13px]'>©2014-2024, ТепликДЮСШ. Всi права захищені .
              </p>
            </div>
            <div className='text-[15px] '>
              <p>
                Україна, м. Теплик,<br/>
                вул. Незалежності 1А
              </p>
            </div>
            <div className='text-[15px]'>
              <p className='sm:pb-2'>тел. <a className='text-[#EE8B53] font-semibold' href="tel:+380930558669">+38 099 999 99 99</a></p>
              <p className='text-[14px]  text-[#EE8B53] font-semibold'><a
                href="mailto:email@gmail.com">email@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


const slideSettings = {
  columnGap: 50,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
}

const staffProps = [{
  name: "Андрій Шевченко",
  img: staff1,
  id: 1
}, {
  name: "Сергій Ковальчук",
  img: staff2,
  id: 2
}, {
  name: "Наталія Іваненко",
  img: staff3,
  id: 3,
}, {
  name: "Андрій Шевченко",
  img: staff1,
  id: 4
}, {
  name: "Сергій Ковальчук",
  img: staff2,
  id: 5
}, {
  name: "Наталія Іваненко",
  img: staff3,
  id: 6,
},
]
const StaffSlider = () => {
  return (
    <div className='mb-5'>
      <div className='slider-container'>
        <Swiper
          className="flex justify-between mx-0"
          spaceBetween={74}
          slidesPerView={1}
          breakpoints={{
            310: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1240: {
              slidesPerView: 3,
            },
            1650: {
              slidesPerView: 3,
            }
          }}

          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {staffProps.map(item =>
            <SwiperSlide className="relative   inline-block rounded-xl " key={item.id}>
              <Image src={item.img} alt={item.name} className='rounded-xl w-full '/>
              <h3 className='z-10 absolute bottom-4 left-4 text-white text-[28px] font-semibold'>
                {item.name}
              </h3>
              <div className='img-staff rounded-xl overflow-hidden'></div>
            </SwiperSlide>)}
        </Swiper>

      </div>
    </div>

  )
}