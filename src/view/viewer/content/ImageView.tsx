import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Luminous } from 'luminous-lightbox';
import 'luminous-lightbox/dist/luminous-basic.min.css';

export interface ImageViewProps {
    src: string;
    alt: string;
    children: ReactNode;
}

// Component for showing an image.
export const ImageView = ({ src, alt, children }: ImageViewProps) => {
    const [isLoad, setLoad] = useState(false);
    const ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const element = ref.current;

        if (element !== null) {
            new Luminous(element, { sourceAttribute: 'src' });
        }
    }, []);

    // Show 'Loading...' until the image is loaded.
    return (
        <div className={'ImageView'}>
            {!isLoad && 'Loading...'}
            <img
                ref={ref}
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
