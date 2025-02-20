document.addEventListener("DOMContentLoaded", function () {
    const videoListContainer = document.getElementById("videoList");

    if (!videoListContainer) return;

    videoListContainer.innerHTML = ""; // Wyczyść listę

    videoData.forEach(video => {
        const videoItem = document.createElement("a");
        videoItem.classList.add("video-item");

        // Ustal link do filmu
        const videoLink = video.filename ? `videos/${video.filename}` : video.url;
        
        videoItem.href = videoLink;
        videoItem.textContent = video.title;
        videoItem.target = "_blank"; // Otwiera film w nowej karcie

        videoListContainer.appendChild(videoItem);
    });
});
