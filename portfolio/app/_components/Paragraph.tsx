import React from 'react'

interface Props {
    text: string;
}

const Paragraph = (props: Props) => {
    return (
        <p className="whitespace-pre-line text-lg">
            {props.text}
        </p>
    )
}

export default Paragraph