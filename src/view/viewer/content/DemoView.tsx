import React, { useState } from 'react';

export interface DemoViewProps {
    href: string;
}

export const DemoView = ({ href }: DemoViewProps) => {
    const [show, setShow] = useState(false);

    return (
        <div className={'DemoView'}>
            <button
                className={'Show'}
                onClick={() => {
                    setShow(!show);
                }}
            >
                {show ? '데모 접기' : '데모 열기'}
            </button>
            {show && (
                <div className={'Main'}>
                    <iframe
                        className={'Code'}
                        src={href}
                        allow={'accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'}
                        sandbox={'allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'}
                    />
                </div>
            )}
        </div>
    );
};
