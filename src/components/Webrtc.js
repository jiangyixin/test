import React from 'react';
// webrtc 网页截屏
export default class Webrtc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowScreen: false,
    };
    this.screen = this.screen.bind(this);
  }
  async screen() {
    const media = await navigator.mediaDevices.getDisplayMedia().catch(err => { console.log('err: ', err) });

    const video = document.createElement('video');
    video.autoplay = true;
    video.srcObject = media;

    video.addEventListener('loadedmetadata', () => {
      const canvas = document.getElementById('screen-canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      setTimeout(() => {
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        media.getTracks().forEach(track => track.stop());
        video.remove();
        this.setState({ isShowScreen: true });
      }, 200);
    }, { once: true });
  }
  render() {
    return (
      <div>
        <button onClick={this.screen}>Take snapshot</button>
        <div className={ this.state.isShowScreen ? 'screen-mask show' : 'screen-mask' }>
          <canvas id="screen-canvas" className="screen-canvas"></canvas>
        </div>
      </div>
    );
  }
}
