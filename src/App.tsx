import { useState } from 'react';
import UploadArea from './components/UploadArea';
import PreviewGrid from './components/PreviewGrid';
import { fileToDataUrl } from './utils/fileToDataUrl';
import type { Photo } from './types';
import './App.css';

function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const handleSelect = async (files: File[]) => {
    try {
      const urls = await Promise.all(
        files.map((file) => fileToDataUrl(file)),
      );

      const newPhotos: Photo[] = files.map((file, index) => ({
        id: `${Date.now()}-${index}-${Math.random().toString(36).slice(2)}`,
        url: urls[index],
        name: file.name,
      }));

      setPhotos((prev) => [...prev, ...newPhotos]);
    } catch (err) {
      console.error('Ошибка чтения файла:', err);
    }
  };

  const handleRemove = (id: string) => {
    setPhotos((prev) => prev.filter((photo) => photo.id !== id));
  };

  return (
    <div className="photo-manager">
      <UploadArea onSelect={handleSelect} />
      <PreviewGrid photos={photos} onRemove={handleRemove} />
    </div>
  );
}

export default App;