import { useState } from 'react';

interface EditPanelProps {
  onClose: () => void;
}

export function EditPanel({ onClose }: EditPanelProps) {
  const [siteTitle, setSiteTitle] = useState('Princess Alice Adoption Home');
  const [heroQuote, setHeroQuote] = useState(
    '"Every child deserves a safe, nurturing environment to grow and thrive."'
  );
  const [ctaText, setCtaText] = useState(
    'Together, we can build a brighter future. 🌟'
  );

  return (
    <div className="edit-panel">
      <div className="edit-panel-header">
        <span>✏️ Edit Content</span>
        <button onClick={onClose} className="edit-panel-close">
          ✕
        </button>
      </div>
      <div className="edit-panel-content">
        <div className="edit-panel-group">
          <label className="edit-panel-label">Site Title</label>
          <input
            type="text"
            className="edit-panel-input"
            value={siteTitle}
            onChange={(e) => setSiteTitle(e.target.value)}
            placeholder="Site Title"
          />
        </div>
        <div className="edit-panel-group">
          <label className="edit-panel-label">Hero Quote</label>
          <textarea
            className="edit-panel-input"
            style={{ minHeight: '80px', resize: 'vertical' }}
            value={heroQuote}
            onChange={(e) => setHeroQuote(e.target.value)}
            placeholder="Hero Quote"
          />
        </div>
        <div className="edit-panel-group">
          <label className="edit-panel-label">Call to Action</label>
          <input
            type="text"
            className="edit-panel-input"
            value={ctaText}
            onChange={(e) => setCtaText(e.target.value)}
            placeholder="Call to Action"
          />
        </div>
      </div>
    </div>
  );
}
