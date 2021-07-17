import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Luminous } from 'luminous-lightbox';
import 'luminous-lightbox/dist/luminous-basic.min.css';

interface ImageViewProps {
    src: string;
    alt: string;
    children: ReactNode;
}

// Component for showing an image.
export const ImageView = ({ src, alt, children }: ImageViewProps) => {
    const [isLoad, setLoad] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;

        if (element !== null) {
            new Luminous(element, { sourceAttribute: 'data-src' });
        }
    }, []);

    // Show 'Loading...' until the image is loaded.
    return (
        <div
            ref={ref}
            className={'ImageView'}
            data-src={src}
        >
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
