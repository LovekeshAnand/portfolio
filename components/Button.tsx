import React from 'react';

const DownloadButton = () => {
  return (
    <div>
      <button className="btn" style={buttonStyles}>
        RESUME
      </button>
      <style jsx>{`
        .btn {
          width: 130px;
          height: 40px;
          font-size: 1.1em;
          cursor: pointer;
          background-color: #171717;
          color: #fff;
          border: none;
          border-radius: 5px;
          transition: all 0.4s;
        }

        .btn:hover {
          border-radius: 5px;
          transform: translateY(-10px);
          box-shadow: 0 7px 0 -2px #c40505,
                      0 15px 0 -4px #e85555,
                      0 16px 10px -3px #f28888;
        }

        .btn:active {
          transition: all 0.2s;
          transform: translateY(-5px);
          box-shadow: 0 2px 0 -2px #c40505,
                      0 8px 0 -4px #e85555,
                      0 12px 10px -3px #f28888;
        }
      `}</style>
    </div>
  );
};

const buttonStyles: React.CSSProperties = {
  width: '130px',
  height: '40px',
  fontSize: '1.1em',
  cursor: 'pointer',
  backgroundColor: '#171717',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  transition: 'all 0.4s',
};

export default DownloadButton;