"use client"

import { Box, Container, Flex } from '@radix-ui/themes'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type LinkData = {
    label: string,
    href: string,
}

const Navbar = () => {
    return (
        <nav className='border-b mb-5 px-5 py-3 bg-neutral-800'>
            <Container>
                <Flex justify='between'>
                    <Box>
                        <Link href='/' className='text-white'>
                                Logo
                            {/* <BsBugFill className='h-8 w-8' /> */}
                        </Link>
                    </Box>

                    <NavLinks />
                </Flex>
            </Container>
        </nav>
    )
}

const NavLinks = () => {
    const currentPath = usePathname();

    const links: LinkData[] = [
        { label: 'Professional Work', href: '/pro' },
        { label: 'Side Projects', href: '/side' },
    ]

    return <Flex align='center' gap='3'>
        <ul className='flex flex-1 space-x-6 justify-center'>
            {links.map((item: LinkData) => {

                return <li key={item.href}>
                    <Link
                        className={classNames(
                            'nav-link',
                            'text-white',
                            { '!text-shadow-white': item.href === currentPath }
                        )}
                        href={item.href}>
                        {item.label}
                    </Link>
                </li>
            })}
        </ul>
    </Flex>
}

export default Navbar