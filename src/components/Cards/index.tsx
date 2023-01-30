import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Card from "./Card"
import { Promotion } from '../../entities/Promotion';

type props = {
    cards: Promotion[];
};

export default function Cards({ cards }: props) {
    return (
        <>
            <div className='cards'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.25}
                    loop={false}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                >
                    {cards.map((card, index) => (
                        <SwiperSlide>
                            <Card card={card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
