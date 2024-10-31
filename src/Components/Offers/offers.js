import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Box, Container } from "@mui/material";
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import offer1 from '../../assests/offer1.png';
import Offer2 from '../../assests/Offer2.png';
import Offer3 from '../../assests/Offer3.png';
import './Offers.css';

export default function Offers() {
    return (
        <Box py={6}>
            <Container maxWidth='xl'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Pagination, Navigation]}
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination',
                        bulletClass: 'custom-bullet',
                        bulletActiveClass: 'custom-bullet-active',
                    }}
                    breakpoints={{
                        767: {
                            slidesPerView: 3,
                        }
                    }}
                >
                    <SwiperSlide>
                        <Box component={'img'} src={offer1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component={'img'} src={Offer2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component={'img'} src={Offer3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component={'img'} src={offer1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component={'img'} src={Offer2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component={'img'} src={Offer3} />
                    </SwiperSlide>
                </Swiper>
                <Box className="custom-pagination"></Box>
            </Container>
        </Box>
    );
}
