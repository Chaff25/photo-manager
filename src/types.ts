export interface Photo {
  id: string;
  url: string;
  name: string;
}

export interface UploadAreaProps {
  onSelect: (files: File[]) => void;
}

export interface PreviewGridProps {
  photos: Photo[];
  onRemove: (id: string) => void;
}