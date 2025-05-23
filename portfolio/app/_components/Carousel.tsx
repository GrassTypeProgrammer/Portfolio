"use client"
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Button, Flex } from '@radix-ui/themes'

interface Props{
    slides: React.ReactNode[],
}

const Carousel = (props: Props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    // useEffect(() => {
    //     if (emblaApi) {
    //         console.log(emblaApi.slideNodes()) // Access API
    //     }
    // }, [emblaApi])

    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev();
        }
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext()
        }
    }, [emblaApi])

    return (
        <div className="overflow-hidden max-w-3xl" ref={emblaRef}>
            <Flex>
                {props.slides.map((element, index) => (
                    <div className="w-50 min-w-0 flex-shrink-0 basis-full pl-4" key={index}>
                        {element}
                    </div>
                ))
                }
            </Flex>

            <Button className="embla__prev" onClick={scrollPrev}>
                Prev
            </Button>
            <Button className="embla__next" onClick={scrollNext}>
                Next
            </Button>
        </div>
    )
}

export default Carousel