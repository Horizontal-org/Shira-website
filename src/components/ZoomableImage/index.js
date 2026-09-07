import React, { useCallback, useEffect, useRef, useState } from 'react';
import { translate } from '@docusaurus/Translate';
import classNames from 'classnames';
import styles from './styles.module.css';

// Wraps an image so that clicking it opens a full screen preview.
// Uses the native <dialog> element, which gives us Esc to close and a focus
// trap for free. The button reuses the image's alt as its accessible name, so
// no new translatable strings are needed.
export default function ZoomableImage({ className, src, alt, ...props }) {
  const dialogRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    dialogRef.current?.showModal();
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // Clicking the backdrop reports the dialog itself as the event target.
  const onDialogClick = useCallback(
    (event) => {
      if (event.target === dialogRef.current) {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={classNames(styles.trigger, className)}
        onClick={open}
        aria-label={alt}
      >
        <img src={src} alt="" {...props} />
        <span className={styles.badge} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        onClick={onDialogClick}
        onClose={() => setIsOpen(false)}
      >
        <button
          type="button"
          className={styles.close}
          onClick={close}
          aria-label={translate({
            id: 'theme.AnnouncementBar.closeButtonAriaLabel',
            message: 'Close',
          })}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>
        <img className={styles.fullImage} src={src} alt={alt} />
      </dialog>
    </>
  );
}
