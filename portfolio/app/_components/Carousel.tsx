"use client"
import { Button, Flex } from '@radix-ui/themes'
import classNames from 'classnames'
import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback, useState } from 'react'
import Paragraph from './Paragraph'

interface Props {
    slides: React.ReactNode[],
    captions?: string[],
    modifiers?: string,
}

const Carousel = (props: Props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [toggleSlideIndex, setToggledSlideIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev();
            setToggledSlideIndex(emblaApi.selectedScrollSnap())
        }
    }, [emblaApi,])

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext()
            setToggledSlideIndex(emblaApi.selectedScrollSnap())
        }
    }, [emblaApi])

    function onClickDotButton(index: number) {
        emblaApi?.scrollTo(index);
        setToggledSlideIndex(emblaApi?.selectedScrollSnap() ?? 0);
    }

    const showCaption: boolean = (props.captions != undefined && props.captions.length > toggleSlideIndex && props.captions[toggleSlideIndex] !== undefined);

    return (
        <div className={classNames("overflow-hidden max-w-3xl mt-5", props.modifiers)} ref={emblaRef}>
            <Flex mb='3'>
                {props.slides.map((element, index) => (
                    <div className="min-w-0 flex-shrink-0 basis-full h-auto justify-items-center" key={index}>
                        {element}
                    </div>
                ))
                }
            </Flex>

            {showCaption &&
                <Paragraph 
                modifiers='mb-3' 
                text={props.captions![toggleSlideIndex]} 
                isCaption='true' 
                />
            }

            <Flex direction={'row'} height={'50'} justify={'center'} mb='5'>
                <Button onClick={scrollPrev}>
                    Prev
                </Button>

                <Flex align={'center'}>
                    {props.slides.map((slide, index) => {
                        return <div
                            className={classNames(
                                'w-3 h-3 bg-gray-500 mr-1 cursor-pointer rounded-sm',
                                { 'ml-2': index == 0 },
                                { 'mr-2': index == props.slides.length - 1 },
                                { 'w-5 h-5': index == toggleSlideIndex }
                            )}
                            key={index}
                            onClick={() => { onClickDotButton(index) }}
                        />
                    })}
                </Flex>

                <Button onClick={scrollNext}>
                    Next
                </Button>
            </Flex>
        </div>
    )
}

export default Carousel


