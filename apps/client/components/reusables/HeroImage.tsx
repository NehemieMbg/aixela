import { cn } from '@/lib/utils';
import Image from 'next/image';

/**
 * Hero Image component
 * @param imageUrl - The image URL
 * @param alt - The alt text for the image
 * @returns the hero image component
 */
const HeroImage = ({
  imageUrl,
  alt,
  className,
  imageClassName,
}: {
  imageUrl: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}) => {
  return (
    <div className={cn('h-[90vh] w-full overflow-hidden', className)}>
      <Image
        src={imageUrl}
        alt={alt}
        height={1080}
        width={1920}
        className={cn('size-full object-cover', imageClassName)}
        priority={true}
      />
    </div>
  );
};
export default HeroImage;
