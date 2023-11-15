import { useEffect, useState } from "react";

export const FallbackImage = ({ src, ...rest }) => {
    const [imgSrc, setImgSrc] = useState(src)

    useEffect(() => {
        setImgSrc(src)
    }, [src])

    return (
        <img
        {...rest}
        src={imgSrc ? imgSrc : "../images/sillouette.jpg"}
        onError={() => {
            setImgSrc("../images/sillouette.jpg")
        }}
        />
    )
}