import { Heading } from '@radix-ui/themes'
import React from 'react'

export const enum HeaderType {
    PageHeader,
    SectionHeader,
}

interface Props {
    label: string;
    headerType: HeaderType;
}

const Header = (props: Props) => {

    return (
        <Heading
            className={props.headerType == HeaderType.PageHeader ? 'text-decoration-line: underline' : 'text-center'}
            size={props.headerType == HeaderType.PageHeader ? '8' : '6'}
            mb={props.headerType == HeaderType.PageHeader ? '7' : '2'}
        >
            {props.label}
        </Heading>
            // {/* <Separator.Root className="h-0.5 w-2xl opacity-30 bg-black" style={{ margin: "15px 0" }} /> */}

    )

}

export default Header