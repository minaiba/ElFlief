import video1 from '../../assets/aiba/video.mp4'
import { useState, useEffect } from "react";
import qr from '../../assets/aiba/qr-kod.jpg'
import video2 from '../../assets/aiba/beaty.mp4'
import video3 from '../../assets/aiba/konkyrs.mp4'
import tama from '../../assets/aiba/tama.jpg'
import shrek from '../../assets/aiba/video2.png'
import love from '../../assets/aiba/loveS.jpg'

export default function Stories() {
  const [activeStory, setActiveStory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    { id: 1, type: "image", src: qr, title: "Сторис 1" },
    { id: 2, type: "video", src: video1, title: "Видео 1" },
    { id: 3, type: "video", src: video2, title: "видео 2" },
    { id: 4, type: "image", src: tama, title: "Сторис 3" },
    { id: 5, type: "video", src: video3, title: "видео 3" },
    { id: 6, type: "image", src: shrek, title: "сторис 4 " },
    { id: 7, type: "image", src: love, title: "сторис 5" },
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
    // <div className="flex flex-col items-center p-4">
    //   <div className="flex space-x-4 overflow-x-auto p-2 scrollbar-hide max-w-[500px] mx-auto">
    //     {stories.map((story, index) => (
    //       <div
    //         key={story.id}
    //         className={`w-20 h-20 rounded-full border-4 border-pink-500 cursor-pointer overflow-hidden duration-300 ${activeStory === story ? "" : "opacity-50 hover:opacity-100"
    //           }`}
    //         onClick={() => {
    //           setActiveStory(story);
    //           setCurrentIndex(index);
    //         }}
    //       >
    //         <img src={story.src} alt={story.title} className="w-full h-full object-cover" />
    //       </div>
    //     ))}
    //   </div>
    //   {activeStory && (
    //     <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-90">
    //       <div className="relative w-[500px] h-[880px] flex items-center justify-center">
    //         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gray-300 rounded-full overflow-hidden">
    //           <div
    //             className="h-full bg-white transition-all duration-5000"
    //             style={{ width: `${((currentIndex + 1) / stories.length) * 100}%` }}
    //           ></div>
    //         </div>
    //         {stories[currentIndex].type === "image" ? (
    //           <img src={stories[currentIndex].src} className="w-full h-full object-cover rounded-lg" />
    //         ) : (
    //           <video src={stories[currentIndex].src} className="w-full h-full rounded-lg" autoPlay controls />
    //         )}
    //         <button
    //           className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full"
    //           onClick={() => setActiveStory(null)}
    //         >
    //           ✖
    //         </button>

    //         <div
    //           className="absolute left-0 top-0 bottom-0 w-1/3 cursor-pointer"
    //           onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
    //         ></div>
    //         <div
    //           className="absolute right-0 top-0 bottom-0 w-1/3 cursor-pointer"
    //           onClick={() => currentIndex < stories.length - 1 && setCurrentIndex(currentIndex + 1)}
    //         ></div>
    //       </div>
    //     </div>
    //   )}
    // </div>
    <div className="flex flex-col items-center p-4">
    <div className="flex space-x-4 overflow-x-auto p-2 scrollbar-hide max-w-full sm:max-w-[500px] mx-auto">
        {stories.map((story, index) => (
            <div
                key={story.id}
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-1 border-pink-100 cursor-pointer overflow-hidden duration-300 
                ${activeStory === story ? "" : "opacity-50 hover:opacity-100"}`}
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
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-90 p-4">
            <div className="relative w-full max-w-[500px] h-auto sm:h-[720px] flex items-center justify-center">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gray-300 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-white transition-all duration-5000"
                        style={{ width: `${((currentIndex + 1) / stories.length) * 100}%` }}
                    ></div>
                </div>

                {stories[currentIndex].type === "image" ? (
                    <img src={stories[currentIndex].src} className="w-full h-auto sm:h-full object-cover rounded-lg" />
                ) : (
                    <video src={stories[currentIndex].src} className="w-full h-auto sm:h-full rounded-lg" autoPlay controls />
                )}

                <button
                    className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full"
                    onClick={() => setActiveStory(null)}
                >
                    ✖
                </button>

                <div
                    className="absolute left-0 top-0 bottom-0 w-1/3 cursor-pointer"
                    onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
                ></div>
                <div
                    className="absolute right-0 top-0 bottom-0 w-1/3 cursor-pointer"
                    onClick={() => currentIndex < stories.length - 1 && setCurrentIndex(currentIndex + 1)}
                ></div>
            </div>
        </div>
    )}
</div>

  );
}
