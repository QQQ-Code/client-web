import { useState } from 'react'
import { Box, Flex, IconButton, Text, useColorModeValue } from '@chakra-ui/react'
import { FiEye } from 'react-icons/fi'
import { TYoutube } from '@/src/commons/types/generated/types'
import { YoutubeSliderProps } from './types'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import YoutubeImageStyle from '@/src/components/units/main/components/youtubeImageStyle'
import Slider, { CustomArrowProps } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function YoutubeSlider({
  youtubeData,
  onClickSelectedVideo,
}: YoutubeSliderProps) {
  const [slider, setSlider] = useState<Slider | null>(null)
  const [arrowVisible, setArrowVisible] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)

  const onClickPrev = () => {
    slider?.slickGoTo(currentSlide - 3)
  }

  const onClickNext = () => {
    slider?.slickGoTo(currentSlide + 3)
  }

  const PrevArrow = (props: CustomArrowProps) => {
    const { onClick, className } = props

    return (
      <IconButton
        css={{ '&:hover, &:focus': { background: 'none', color: '#666bffd2' } }}
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        zIndex={2}
        top="35%"
        left="2"
        onClick={onClickPrev}
        color="#f8f8f8c8">
        <IoIosArrowDropleftCircle size="50px" />
      </IconButton>
    )
  }

  const NextArrow = (props: CustomArrowProps) => {
    const { onClick, className } = props

    return (
      <IconButton
        css={{ '&:hover, &:focus': { background: 'none', color: '#666bffd2' } }}
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        zIndex={2}
        top="35%"
        right="0"
        onClick={onClickNext}
        color="#f8f8f8c8">
        <IoIosArrowDroprightCircle size="50px" />
      </IconButton>
    )
  }

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3.15,
    slidesToScroll: 3,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex)
      setArrowVisible(false)
    },
    afterChange: () => setArrowVisible(true),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <Slider {...settings} ref={slider => setSlider(slider)}>
      {youtubeData.map((youtube: TYoutube, index: number) => (
        <Box
          key={youtube.videoUrl}
          m="2"
          flexShrink="0"
          cursor="pointer"
          onClick={() => onClickSelectedVideo(youtube.videoUrl)}>
          <YoutubeImageStyle src={youtube.thumbnailUrl} alt={youtube.videoUrl} />
          <Flex
            justifyContent="center"
            alignItems="center"
            fontSize="13pt"
            fontWeight="700"
            color={useColorModeValue('dGray.dark', 'dGray.light')}>
            <Box>
              {youtube.title.substring(0, 30)}
              {youtube.title.length > 30 ? '...' : ''}
            </Box>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            pr="5px"
            color={useColorModeValue('#8e9193', 'dGray.light')}
            fontWeight="500">
            <br />
            <FiEye />
            <Text ml="5px">{youtube.views} views</Text>
          </Flex>
        </Box>
      ))}
    </Slider>
  )
}