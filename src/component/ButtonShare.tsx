"use client";

const ButtonShare = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.platform);
console.log(isMobile)
  const img = "https://storage.googleapis.com/crm-go/REVAMP-LOYALTY/714c1700-288e-41d5-9dcf-e9e215bdf496.jpg";
  const handleShare = async () => {
    const imgUrl = img;
    const shareText = `Yuk ikut event: `;
    try {
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      const file = new File([blob], 'event-image.jpg', { type: blob.type });

      if (
        navigator.share &&
        navigator.canShare({ files: [file], title: shareText, url: shareText, text: shareText })
      ) {
        if (isMobile) {
          await navigator.share({
            files: [file],
            url: img,
            text: shareText,
            title: shareText
          });
        } else {
          await navigator.share({
            url: img,
            text: shareText,
            title: shareText
          });
        }
      }
    } catch (error) {
      throw error;
    }
  };

  return <button onClick={handleShare}>Share Event</button>;
};

export default ButtonShare;
