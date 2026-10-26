interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
}

export function EditorialImage({ src, alt, className = '', objectPosition = 'center' }: EditorialImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`w-full h-full object-cover ${className}`}
      style={{ objectPosition }}
    />
  );
}
