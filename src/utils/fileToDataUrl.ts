export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.addEventListener('load', (evt: ProgressEvent<FileReader>) => {
      resolve(evt.currentTarget?.result as string);
    });

    fileReader.addEventListener('error', (evt: ProgressEvent<FileReader>) => {
      reject(new Error(evt.currentTarget?.error?.message || 'File reading error'));
    });

    fileReader.readAsDataURL(file);
  });
}