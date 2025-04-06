import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 500,
  height: 500,
};
export const contentType = 'image/svg';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          // fontSize: 24,
          // background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 500 500"
        >
          <rect className="st0" width="500" height="500" fill={'#231F20'} />
          <path
            className="st1"
            d="M442.3,108.9L273.6,419.6c-6.3,11.7-13.1,16.8-22.6,16.8c-9.5,0-16.3-5-22.6-16.8L59.6,108.9 c-4.8-9.3-6.1-19.2-3.4-26.5c2.1-5.9,6.5-10,13-12.4c3.4-1.2,7.3-1.8,12.6-1.8H420c5.3,0,9.2,0.5,12.6,1.8 c6.5,2.3,10.9,6.5,13.1,12.4C448.4,89.8,447.1,99.7,442.3,108.9 M461.4,87c-0.3-3.5-1.1-6.9-2.2-10c-1.9-5.2-4.8-9.7-8.7-13.4 c-3.6-3.4-8.1-6.1-13.2-8l-0.1,0c-2.6-0.9-5.4-1.6-8.3-2c-2.7-0.4-5.6-0.6-8.9-0.6H81.8c-3.3,0-6.2,0.2-8.9,0.6 c-3,0.4-5.7,1.1-8.3,2l-0.1,0c-5.1,1.8-9.5,4.5-13.2,8c-3.9,3.7-6.8,8.2-8.7,13.4c-1.2,3.1-1.9,6.5-2.2,10 c-0.3,3.2-0.2,6.6,0.2,10.1c0.4,3.2,1.2,6.6,2.2,9.8c1,3.2,2.4,6.4,4,9.5l0.1,0.2l168.7,310.7c2,3.8,4.1,7,6.3,9.8 c1.2,1.5,2.5,3,3.8,4.2c1.4,1.4,2.8,2.6,4.3,3.7c3.1,2.3,6.5,4,10,5.1c3.4,1.1,7,1.6,10.8,1.6c3.8,0,7.4-0.5,10.8-1.6 c3.6-1.1,6.9-2.8,10-5.1c1.5-1.1,2.9-2.3,4.3-3.7c1.3-1.3,2.6-2.7,3.8-4.2c2.2-2.8,4.3-6,6.3-9.8l168.7-310.7l0.1-0.2 c1.6-3.1,2.9-6.3,4-9.5c1-3.3,1.8-6.6,2.2-9.8C461.6,93.6,461.7,90.2,461.4,87 M310.8,206.6l39.6,22l8.1-14.4L310.8,189h61.8 l12.4-22.1h-95.8v170.9l21.6-38.6V206.6z M191,206.6l-39.6,22l-8.1-14.4L191,189h-61.8l-12.4-22.1h95.8v170.9L191,299.2V206.6z"
            fill="#FEFEFE"
          />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
