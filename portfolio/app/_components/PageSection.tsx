import { Section, Flex } from '@radix-ui/themes'
import React from 'react'
import Header, { HeaderType } from './Header'

interface Props {
    header?: string,
    children?: React.ReactNode,
    id?: string,
}

const PageSection = (props: Props) => {
    return (
        <Section pt='0' id={props.id}>
            <Flex align={'center'} direction={'column'}>
                {props.header &&
                    <Header headerType={HeaderType.SectionHeader} label={props.header} />
                }

                {props.children}
            </Flex>
        </Section>
    )
}

export default PageSection