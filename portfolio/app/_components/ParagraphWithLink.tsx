import { Flex } from '@radix-ui/themes';
import React from 'react'
import Paragraph from './Paragraph';
import Link from 'next/link';

interface Props {
    text: string;
    linkText: string;
    href: string;
}

const ParagraphWithLink = (props: Props) => {
    return (
        <Flex width={'100%'}>
            <Paragraph text={props.text} />
            <Link className='text-lg ml-1' href={props.href} >
                {props.linkText}
            </Link>
        </Flex>
    )
}

export default ParagraphWithLink