import { Swiper, SwiperSlide } from 'swiper/react';
import Tag from "./Tag"

type Tag = {
    IconUrl: string;
    Id: number;
    Name: string;
    Rank: number;
}

type props = {
    tags: Tag[];
};

export default function Tags({ tags }: props) {
    return (
        <>
            <div className='tags'>
                <Swiper
                    spaceBetween={5}
                    slidesPerView={3.1}
                    loop={false}
                >
                    <SwiperSlide>
                        <div className='tag'>
                            <div className="tag-container"> 
                                <div className="icon">
                                    <img src="/images/search.svg" />
                                </div>
                                <div className="title">
                                    Fırsat Bul
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {tags.map((tag, index) => (
                        <SwiperSlide>
                            <Tag tag={tag} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
