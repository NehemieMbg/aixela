import Image from 'next/image';

const VideoPlayer = ({ videoUrl, alt }: { videoUrl: string; alt: string }) => {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Image src={videoUrl} alt={alt} height={1080} width={1920} />
    </div>
  );
};
export default VideoPlayer;
