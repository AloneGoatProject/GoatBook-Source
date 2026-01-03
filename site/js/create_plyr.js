
// 动态创建并初始化新播放器
function createVideoPlayer(containerId, videoSrc, config = {}) {
    const container = document.getElementById(containerId);

    const video = document.createElement('video');
    video.className = 'dynamic-player';
    video.setAttribute('playsinline', '');
    video.setAttribute('controls', '');

    const source = document.createElement('source');
    source.src = videoSrc;
    source.type = 'video/mp4';

    video.appendChild(source);
    container.appendChild(video);

    return new Plyr(video, config);
}

// 使用示例
