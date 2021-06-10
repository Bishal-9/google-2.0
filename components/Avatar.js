function Avatar({ url, className }) {
    return <img
    className='w-5' 
        loading='lazy'
        className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
        src={url}
        alt='Profile Picture'
    />
}

export default Avatar
