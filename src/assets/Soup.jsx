import React from 'react';
import PropTypes from 'prop-types';

export default function Soup({ size, ...others }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 504 512" height={size} {...others}>
      <path d="M136,256,64,184s-8,40,8,72Z" fill="#f96720" />
      <path
        d="M432,88V198.16A57.87,57.87,0,0,1,374.16,256H256s41.6-39.84,80-72l40-40c20.24-21.68,31.2-31.28,53.36-53.36Z"
        fill="#f96720"
      />
      <path
        d="M432,88V198.16A57.87,57.87,0,0,1,374.16,256h-19c3.36-5.2,6.48-10.56,9.6-16A778.19,778.19,0,0,0,416,128.4c5.28-14.08,9.76-27,13.36-37.76Z"
        fill="#d34f1c"
      />
      <path d="M176,256s0-48,32-72c0,0,32,32,32,72Z" fill="#a7d745" />
      <path d="M193.88,240h28.06a100.8,100.8,0,0,0-15.14-32A83,83,0,0,0,193.88,240Z" fill="#a7d745" />
      <path d="M496,256v56A144,144,0,0,1,352,456H160A144.2,144.2,0,0,1,16,312V256Z" fill="#fcda44" />
      <path d="M152,456H360v48H152Z" fill="#b2920d" />
      <path d="M168,480H344v-8H168Z" fill="#b2920d" />
      <circle cx="160" cy="72" r="64" fill="#ff9100" />
      <path
        d="M448,256s-72,88-192,100S96,440,96,440l-.58.58A142.4,142.4,0,0,0,160,456H352A144,144,0,0,0,496,312V256Z"
        fill="#e8be0f"
      />
      <circle cx="364" cy="172" r="28" fill="#f96720" />
      <path d="M364,160a12,12,0,1,0,12,12A12,12,0,0,0,364,160Z" fill="#933815" />
      <path
        d="M160,144A72,72,0,1,0,88,72,72,72,0,0,0,160,144ZM104.64,80H152v47.36A56,56,0,0,1,104.64,80ZM168,127.36V80h47.36A56,56,0,0,1,168,127.36ZM215.36,64H168V16.64A56,56,0,0,1,215.36,64ZM152,16.64V64H104.64A56,56,0,0,1,152,16.64Z"
        fill="#082944"
      />
      <path d="M64,144a8,8,0,0,0,8-8v-8a8,8,0,0,0-16,0v8A8,8,0,0,0,64,144Z" fill="#082944" />
      <path
        d="M8,192H54.82a137,137,0,0,0,5.27,56H16a8,8,0,0,0-8,8v56A152.2,152.2,0,0,0,144,463.14V504a8,8,0,0,0,8,8H360a8,8,0,0,0,8-8V463.14A152.2,152.2,0,0,0,504,312a8,8,0,0,0-16,0A136.15,136.15,0,0,1,352,448H160a135.2,135.2,0,0,1-52.56-10.58C120.5,420.07,163.88,373.26,256.8,364a284.06,284.06,0,0,0,57.6-12,8,8,0,0,0-4.8-15.2A268.14,268.14,0,0,1,255.2,348c-103.69,10.4-149.6,63.86-162.34,82.08A136,136,0,0,1,24,312V264H429.46a315,315,0,0,1-88.75,60.8,8,8,0,1,0,6.6,14.58A322.34,322.34,0,0,0,451.66,264H488v16a8,8,0,0,0,16,0V256a8,8,0,0,0-8-8H417.07A65.6,65.6,0,0,0,440,198.18V171.9c13.38-10.72,64-54.3,64-99.9a8,8,0,1,0-16,0c0,30.76-30.17,62.62-48,78.77V88a8,8,0,0,0-13.66-5.66l-54.58,54.58a35.83,35.83,0,0,0-42.9,42.66c-38.88,34.28-68,61-76,68.42h-5.25a126.83,126.83,0,0,0-34-69.66,8,8,0,0,0-10.46-.74c-27,20.22-33.26,54.82-34.73,70.4H139.31L72,180.69V160a8,8,0,0,0-16,0v16H8a8,8,0,0,0,0,16ZM352,464v32H160V464Zm4.32-310.47a19.92,19.92,0,1,1-.16.07ZM336,194.61a36,36,0,0,0,61.21-36.43,35.55,35.55,0,0,0-10.4-13.75L424,107.31v90.87A49.87,49.87,0,0,1,374.18,248H276.54c13.14-12,34.11-31,59.46-53.39Zm-128.8.59A108.57,108.57,0,0,1,231.52,248H184.58a90.15,90.15,0,0,1,22.62-52.8ZM77.14,248a111,111,0,0,1-7-46.51L116.69,248Z"
        fill="#082944"
      />
      <path d="M88,304a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z" fill="#082944" />
      <path d="M120,304a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z" fill="#082944" />
    </svg>
  );
}

Soup.propTypes = {
  size: PropTypes.number,
};

Soup.defaultProps = {
  size: 18,
};