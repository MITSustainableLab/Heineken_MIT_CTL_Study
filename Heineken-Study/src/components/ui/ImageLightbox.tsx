import { useState, useEffect } from 'react';

interface Props {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  containerClassName?: string;
}

const ImageLightbox = ({ src, alt, caption, className, containerClassName }: Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <div className={containerClassName}>
        <img
          src={src}
          alt={alt}
          className={`cursor-zoom-in transition-opacity hover:opacity-90 ${className ?? ''}`}
          onClick={() => setOpen(true)}
        />
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <div
            className="relative flex max-h-[92vh] max-w-[92vw] flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute -right-3 -top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg hover:bg-slate-100"
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={src}
              alt={alt}
              className="max-h-[82vh] max-w-[88vw] rounded-lg object-contain shadow-2xl"
            />
            {caption && (
              <p className="mt-3 max-w-2xl text-center text-xs text-white/70">{caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageLightbox;
