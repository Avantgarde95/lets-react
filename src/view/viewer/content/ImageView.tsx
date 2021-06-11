import React, { ReactNode, useState } from 'react';

export interface ImageViewProps {
    src: string;
    alt: string;
    children: ReactNode;
}

export const ImageView = ({ src, alt, children }: ImageViewProps) => {
    const [isLoad, setLoad] = useState(false);

    return (
        <div className={'ImageView'}>
            {!isLoad && 'Loading...'}
            <img
                src={src}
                alt={alt}
                onLoad={() => {
                    setLoad(true);
                }}
            >
                {children}
            </img>
        </div>
    );
};
