import type { ChangeEvent } from 'react';
import type { UploadAreaProps } from '../types';

function UploadArea({ onSelect }: UploadAreaProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const files: File[] = Array.from(target.files ?? []);

    if (files.length > 0) {
      onSelect(files);
    }

    target.value = '';
  };

  return (
    <div className="upload-area">
      <div className="upload-text">Click to select</div>
      <input
        type="file"
        className="file-input"
        multiple
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
}

export default UploadArea;