import { AspectRatio } from '../ui/aspect-ratio';

const VideoPlayer = ({
  videoUrl,
  thumbnailUrl,
}: {
  videoUrl: string;
  thumbnailUrl: string;
}) => {
  const youtubeVideoId = videoUrl.split('/').pop();

  return (
    <div className="relative rounded-xl overflow-hidden">
      <AspectRatio ratio={16 / 9}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="size-full"
        ></iframe>
      </AspectRatio>
    </div>
  );
};

export default VideoPlayer;
