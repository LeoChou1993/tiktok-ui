import classNames from 'classnames';
import styles from './Image.module.scss';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            atl={alt}
            ref={ref}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
