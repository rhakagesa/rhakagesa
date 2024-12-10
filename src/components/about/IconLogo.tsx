function IconLogo({imgsrc}: {imgsrc: string}) {
    return (
    <img
        src={imgsrc}
        alt={imgsrc}
        className="aspect-square w-12 object-contain transition-all duration-300 ease-in-out hover:animate-bounce"
    />)
}

export default IconLogo