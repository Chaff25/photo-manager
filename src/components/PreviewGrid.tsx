import type { PreviewGridProps } from '../types';

function PreviewGrid({ photos, onRemove }: PreviewGridProps) {
  if (photos.length === 0) {
    return null;
  }

  return (
    <div className="preview-grid">
      {photos.map((photo) => (
        <div className="preview-item" key={photo.id}>
          <img src={photo.url} alt={photo.name} className="preview-image" />
          <button
            type="button"
            className="remove-btn"
            title="Удалить"
            onClick={() => onRemove(photo.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

export default PreviewGrid;