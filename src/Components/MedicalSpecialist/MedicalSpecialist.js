import 'swiper/css';
import { Box, Container, Typography } from "@mui/material";
import { Pagination,Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import Doctor1 from "../../assests/Doctor1.png";
import Doctor2 from "../../assests/Doctor2.png";
import Doctor3 from "../../assests/Doctor3.png";
import '../Offers/Offers.css';

export default function MedicalSpecialist() {
    return (
        <Box py={6}>
            <Container maxWidth='xl'>
            <Typography
                component="h1"
                fontSize={30}
                color="#1B3C74"
                fontWeight={1000}  
                textAlign="center"
                mb={8}
            >   Our Medical Specialist
            </Typography>
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
                    breakpoints={
                        {
                            767: {
                                slidesPerView: 3
                            }
                        }
                    }
                >
                    <SwiperSlide>
                        <Box component={'img'} src={Doctor1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component={'img'} src={Doctor2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component={'img'} src={Doctor3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component={'img'} src={Doctor1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component={'img'} src={Doctor2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component={'img'} src={Doctor3} />
                    </SwiperSlide>
                </Swiper>
                <Box className="custom-pagination"></Box>
            </Container>
        </Box>
    )
}