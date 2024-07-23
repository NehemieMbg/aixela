import Image from 'next/image';

/**
 * Hero Image component
 * @param imageUrl - The image URL
 * @param alt - The alt text for the image
 * @returns the hero image component
 */
const HeroImage = ({ imageUrl, alt }: { imageUrl: string; alt: string }) => {
  return (
    <div className="h-[90vh] w-full overflow-hidden">
      <Image
        src={imageUrl}
        alt={alt}
        height={1080}
        width={1920}
        className="size-full object-cover"
        priority={true}
      />
    </div>
  );
};
export default HeroImage;
