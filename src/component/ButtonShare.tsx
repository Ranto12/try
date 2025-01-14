"use client";

const ButtonShare = () => {
  const handleShare = async () => {
    const shareText = `Yuk ikut event: ${process.env.NEXT_PUBLIC_URL}/event/detail/1`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Bagikan Event",
          text: shareText,
          url: `${process.env.NEXT_PUBLIC_URL}/event/detail/1`,
        });
      } else {
        alert("Fitur berbagi tidak didukung di browser ini.");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return <button onClick={handleShare}>Share Event</button>;
};

export default ButtonShare;
