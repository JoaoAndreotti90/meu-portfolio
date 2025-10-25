import React, { useState } from 'react'; 
import './Certification.css'; 

function CertificateItem({ cert }) { 
  const [isExpanded, setIsExpanded] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  
  const handleCardClick = () => {
    setIsExpanded(!isExpanded); 
    if (isImageModalOpen) {
      setIsImageModalOpen(false);
    }
  };

  const handleImageClick = (event) => {
    event.stopPropagation(); 
    setIsImageModalOpen(true); 
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
  };

  return (
    <>
      <div 
        className={`certificate-card ${isExpanded ? 'expanded' : ''}`} 
        onClick={handleCardClick} 
      >
        <div className="card-content-wrapper"> 
          <img 
            src={cert.imageSrc} 
            alt={`Certificado ${cert.title}`} 
            className="certificate-image" 
            onClick={isExpanded ? handleImageClick : undefined}
            style={{ cursor: isExpanded ? 'zoom-in' : 'pointer' }} 
          />
          <h4 className="certificate-title">{cert.title}</h4>
        </div>
        
        <div className="certificate-description">
          <p>{cert.description}</p> 
        </div>
      </div>

      {isImageModalOpen && (
        <div className="image-modal-overlay" onClick={handleCloseImageModal}>
          <div className="image-modal-content" onClick={e => e.stopPropagation()}> 
            <button className="image-modal-close-button" onClick={handleCloseImageModal}>
              &times; 
            </button>
            <img 
              src={cert.imageSrc} 
              alt={`Certificado ${cert.title} expandido`} 
              className="image-modal-img" 
            />
          </div>
        </div>
      )}
    </>
  );
}

export default CertificateItem;