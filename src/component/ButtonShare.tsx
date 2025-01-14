"use client";

const ButtonShare = () => {
  const handleShare = async () => {
    const imgUrl =
      "https://storage.googleapis.com/crm-go/REVAMP-LOYALTY/714c1700-288e-41d5-9dcf-e9e215bdf496.jpg";
    const shareText = `Yuk ikut event: ${process.env.NEXT_PUBLIC_URL}/event/detail/1`;
    const url = `${process.env.NEXT_PUBLIC_URL}/event/detail/1`;

    try {
      // Fetch the image and convert to a blob
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      const file = new File([blob], "event-image.jpg", { type: blob.type });

      // Check if the browser supports sharing with files
      if (
        navigator.share &&
        navigator.canShare({ files: [file], text: shareText, url })
      ) {
        await navigator.share({
          files: [file],
          text: shareText,
          url,
        });
      } else {
        alert("Web Share API tidak mendukung berbagi dengan file di perangkat ini.");
      }
    } catch (error) {
      console.error("Error saat mencoba berbagi:", error);
    }
  };

  return <button onClick={handleShare}>Share Event</button>;
};

export default ButtonShare;
