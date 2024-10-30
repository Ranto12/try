
"use client"

const ButtonShare = () => {
  const handleShare = async () => {
    const imgUrl =
      "https://storage.googleapis.com/crm-go/REVAMP-LOYALTY/714c1700-288e-41d5-9dcf-e9e215bdf496.jpg";
      const shareText = `Yuk ikut event:  https://try-three-pearl.vercel.app//event/detail/1`;
    try {
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      const file = new File([blob], "event-image.jpg", { type: blob.type });

      if (navigator.share && navigator.canShare({ files: [file], title: shareText, url: shareText  })) {
        await navigator.share({
          files: [file],
          title: shareText,
          url: shareText,
        });
      }
    } catch (error) {
      throw error;
    }
  };
  return <button onClick={handleShare}>Share Event</button>;
};

export default ButtonShare;
