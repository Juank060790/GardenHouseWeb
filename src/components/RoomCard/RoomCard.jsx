import React, { useState } from "react";
import ImageCarousel from "../ImageCarousel";
import "./RoomCard.css";
import bookingIcon from "../../assets/booking.png";
import VideoModal from "../VideoModal";

const RoomCard = ({ roomsData, setHideCards }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { title, description, airbnLink, bookingLink, youtubeLink } = roomsData;

  const handleOpenModal = () => {
    setModalIsOpen(true);
    setHideCards(false);
  };

  return (
    <>
      <div className="card">
        <ImageCarousel images={roomsData} />
        <div className="card-body">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="room-icons-container">
            {airbnLink ? (
              <a
                target="_blank"
                className="icon-hover"
                rel="noopener noreferrer"
                href={airbnLink}
              >
                <div className="room-icon" style={{ width: "30px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z" />
                  </svg>
                </div>
              </a>
            ) : null}
            {bookingLink ? (
              <a
                target="_blank"
                className="icon-hover"
                rel="noopener noreferrer"
                href={bookingLink}
              >
                <div className="room-icon" style={{ width: "30px" }}>
                  <img src={bookingIcon} alt="Booking.com" />
                </div>
              </a>
            ) : null}
            {youtubeLink ? (
              <div
                target="_blank"
                className="icon-hover"
                rel="noopener noreferrer"
                href={youtubeLink}
                onClick={() => handleOpenModal()}
              >
                <div className="room-icon" style={{ width: "30px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
                  </svg>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {modalIsOpen && (
        <VideoModal
          youtubeLink={youtubeLink}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          setHideCards={setHideCards}
        />
      )}
    </>
  );
};

export default RoomCard;
