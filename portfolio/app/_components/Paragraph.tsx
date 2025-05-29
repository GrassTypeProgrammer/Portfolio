import classNames from 'classnames'
import React from 'react'

interface Props {
    text: string,
    isCaption?: string,
    modifiers?: string,
}

const Paragraph = (props: Props) => {
    return (
        <p className={classNames(
            "whitespace-pre-line text-lg",
            { 'text-center italic': props.isCaption },
            props.modifiers
        )}
        >
            {props.text}
        </p>
    )
}

export default Paragraph