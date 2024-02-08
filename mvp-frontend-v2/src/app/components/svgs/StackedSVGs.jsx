import React from "react";
import "../../styles/StackedSVGs.css";

const StackedSVGs = ({ top, left, rotate }) => {
  return (
    <div
      className="svg-container"
      style={{ top, left, transform: `rotate(${rotate})` }}
    >
      <svg
        className="svg-line "
        xmlns="http://www.w3.org/2000/svg"
        width="62"
        height="179"
        viewBox="0 0 62 179"
        fill="none"
      >
        <path
          d="M109.799 96.9668C101.741 103.262 97.1109 113.499 94.1569 124.55C91.6444 133.949 90.3274 144.009 89.1707 152.844C88.9668 154.401 88.7679 155.921 88.5683 157.392C87.9009 162.311 87.2272 166.679 86.3381 170.145C85.4418 173.639 84.3531 176.096 82.934 177.31C82.2449 177.9 81.4801 178.195 80.5967 178.177C79.6985 178.158 78.6349 177.815 77.369 177.044C74.8282 175.497 71.6103 172.313 67.5009 167.053C51.0654 146.016 28.7588 108.311 14.5265 72.7768C7.40969 55.0082 2.32498 37.8146 0.990398 23.5373C-0.346786 9.23203 2.09292 -1.98187 9.81 -8.01111C13.6371 -11.0012 19.1722 -12.151 26.0814 -11.7159C32.9838 -11.2813 41.1905 -9.26852 50.2857 -6.01352C68.4739 0.495636 90.1242 11.9386 111.833 25.4852C155.263 52.5861 198.801 88.0256 215.213 109.031C217.264 111.657 218.762 113.801 219.766 115.522C220.778 117.257 221.256 118.509 221.332 119.365C221.369 119.784 221.306 120.072 221.196 120.273C221.09 120.467 220.913 120.625 220.629 120.741C220.025 120.987 219.015 121.008 217.562 120.754C214.686 120.252 210.454 118.75 205.247 116.655C201.653 115.209 197.62 113.49 193.278 111.64C191.341 110.814 189.342 109.962 187.294 109.097C174.031 103.494 158.711 97.3311 144.713 94.1234C137.714 92.5193 131.022 91.6485 125.07 91.9647C119.117 92.281 113.87 93.7863 109.799 96.9668Z"
          stroke="#383838"
          stroke-opacity="0.25"
        />
      </svg>
      <svg
        className="svg-line "
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="131"
        viewBox="0 0 40 131"
        fill="none"
      >
        <path
          d="M74.2827 74.8191C68.7868 79.1129 65.6413 86.0832 63.6391 93.5735C61.9355 99.9463 61.0426 106.767 60.2599 112.746C60.122 113.8 59.9875 114.828 59.8525 115.822C59.4008 119.151 58.9459 122.1 58.3467 124.435C57.7403 126.799 57.0128 128.416 56.0942 129.202C55.6553 129.578 55.1755 129.761 54.6206 129.75C54.0509 129.738 53.359 129.52 52.5167 129.007C50.8233 127.976 48.6601 125.84 45.881 122.283C34.7669 108.058 19.6767 82.5509 10.0493 58.514C5.23491 46.4939 1.79978 34.8734 0.898582 25.2324C-0.00521013 15.5636 1.6517 8.04943 6.80651 4.02204C9.35248 2.03291 13.0523 1.25519 17.7098 1.54845C22.3605 1.84129 27.8991 3.19844 34.0476 5.39887C46.3423 9.79889 60.9847 17.5371 75.6732 26.7029C105.063 45.0424 134.511 69.0168 145.602 83.2116C146.988 84.9861 147.997 86.4308 148.671 87.5865C149.353 88.7563 149.661 89.5784 149.709 90.1205C149.732 90.3822 149.691 90.5431 149.637 90.6428C149.586 90.7362 149.498 90.8209 149.334 90.8878C148.97 91.036 148.326 91.058 147.346 90.887C145.419 90.5504 142.57 89.5409 139.044 88.122C136.613 87.1437 133.886 85.9815 130.948 84.7296C129.637 84.1706 128.283 83.5938 126.895 83.0075C117.92 79.2155 107.538 75.0391 98.0491 72.8644C93.3035 71.7769 88.7584 71.1845 84.7091 71.3996C80.6595 71.6147 77.0724 72.6396 74.2827 74.8191Z"
          stroke="#383838"
          stroke-opacity="0.25"
        />
      </svg>
      <svg
        className="svg-line "
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="69"
        viewBox="0 0 15 69"
        fill="none"
      >
        <path
          d="M38.8073 38.8958C35.8627 41.1963 34.1953 44.9145 33.1407 48.8597C32.2426 52.2192 31.772 55.815 31.3616 58.951C31.2893 59.5028 31.219 60.0404 31.1485 60.5599C30.9114 62.3069 30.6743 63.8409 30.3639 65.051C30.0461 66.2895 29.6782 67.0705 29.2579 67.4302C29.0683 67.5925 28.8723 67.665 28.6444 67.6603C28.4017 67.6553 28.08 67.5613 27.6595 67.3053C26.8097 66.7878 25.6967 65.6964 24.2423 63.8349C18.4267 56.3912 10.5218 43.0309 5.47945 30.4415C2.95765 24.1453 1.16497 18.0739 0.69531 13.0494C0.223036 7.99696 1.10053 4.16662 3.70409 2.1325C4.97444 1.13999 6.84683 0.732754 9.26231 0.88485C11.671 1.03652 14.553 1.74083 17.7675 2.89123C24.1941 5.19119 31.8587 9.24057 39.5572 14.0445C54.9668 23.6603 70.3863 36.2189 76.178 43.6319C76.902 44.5586 77.4239 45.307 77.77 45.9003C78.1242 46.5076 78.2629 46.9009 78.2832 47.1307C78.2879 47.1827 78.2854 47.2179 78.2818 47.2398C78.2783 47.2608 78.2739 47.2688 78.2736 47.2694C78.2733 47.2699 78.2733 47.2699 78.2735 47.2696C78.2736 47.2695 78.2735 47.2697 78.273 47.2701C78.2728 47.2704 78.2723 47.2708 78.2717 47.2713C78.2686 47.2739 78.2579 47.2821 78.2333 47.2921C78.1087 47.3428 77.8285 47.3662 77.3215 47.2776C76.3386 47.106 74.8659 46.5861 73.0141 45.8408C71.7413 45.3286 70.3142 44.7204 68.7744 44.0642C68.0859 43.7708 67.3749 43.4678 66.6451 43.1595C61.9373 41.1706 56.4743 38.972 51.4739 37.826C48.9727 37.2528 46.5648 36.9375 44.4104 37.0519C42.2557 37.1664 40.3213 37.7129 38.8073 38.8958Z"
          stroke="#383838"
          stroke-opacity="0.25"
        />
      </svg>
    </div>
  );
};

export default StackedSVGs;
