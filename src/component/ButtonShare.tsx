"use client";

const ButtonShare = () => {
  const img = "https://storage.googleapis.com/crm-go/REVAMP-LOYALTY/714c1700-288e-41d5-9dcf-e9e215bdf496.jpg";
  const shareText = `Yuk ikut event: https://loyalty-kalbe-family-dev-chdcaf35ya-et.a.run.app/event/detail/28`;
  const handleShare = async () => {
    try {
      const response = await fetch(img);
      const blob = await response.blob();
      const file = new File([blob], 'event-image.jpg', { type: blob.type });

      if (
        navigator.share &&
        navigator.canShare({ files: [file], title: shareText, url: shareText, text: shareText })
      ) {
        await navigator.share({
          files: [file],
          url: decodeURI(shareText),
        });
      }
    } catch (error) {
      throw error;
    }
  };

  return <button onClick={handleShare}>Share Event</button>;
};

export default ButtonShare;
