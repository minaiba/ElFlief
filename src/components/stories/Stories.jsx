import { useState, useEffect } from "react";

export default function Stories() {
  const [activeStory, setActiveStory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    { id: 1, type: "image", src: "https://picsum.photos/400/700?random=1", title: "Сторис 1" },
    { id: 2, type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Видео 1" },
    { id: 3, type: "image", src: "https://picsum.photos/400/700?random=2", title: "Сторис 2" },
    { id: 4, type: "image", src: "https://picsum.photos/400/700?random=3", title: "Сторис 3" },
  ];

  useEffect(() => {
    if (activeStory !== null) {
      const timer = setTimeout(() => {
        if (currentIndex < stories.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setActiveStory(null);
        }
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [activeStory, currentIndex]);

  return (
    <div className="w-[1400px] h-[600px] mt-[300px] flex flex-col items-center p-4">
      <div className="flex space-x-4 overflow-x-auto p-2 scrollbar-hide">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className={`w-20 h-20 rounded-full border-4 border-pink-500 cursor-pointer overflow-hidden  duration-300 ${
              activeStory === story ? "" : "opacity-50 hover:opacity-100"
            }`}
            onClick={() => {
              setActiveStory(story);
              setCurrentIndex(index);
            }}
          >
            <img src={story.src} alt={story.title} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      {activeStory && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="relative w-[400px] h-[700px] flex items-center justify-center">
            {stories[currentIndex].type === "image" ? (
              <img src={stories[currentIndex].src} className="w-full h-full object-cover rounded-lg" />
            ) : (
              <video src={stories[currentIndex].src} className="w-full h-full rounded-lg" autoPlay controls />
            )}

            <button
              className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full"
              onClick={() => setActiveStory(null)}
            >
              ✖
            </button>

            {currentIndex > 0 && (
              <button
                className="absolute left-4 bg-white text-black px-4 py-2 rounded-full"
                onClick={() => setCurrentIndex(currentIndex - 1)}
              >
                ◀
              </button>
            )}
            {currentIndex < stories.length - 1 && (
              <button
                className="absolute right-4 bg-white text-black px-4 py-2 rounded-full"
                onClick={() => setCurrentIndex(currentIndex + 1)}
              >
                ▶
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
