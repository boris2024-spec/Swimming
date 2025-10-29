import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Always scrolls to top on route change. If URL has a hash (e.g. /page#id),
 * tries to scroll to the element by hash instead.
 */
export default function ScrollToTop({ smooth = true }) {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If navigating to an anchor, scroll to that element
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
                return;
            }
        }

        // Fallback: scroll to page top
        window.scrollTo({ top: 0, left: 0, behavior: smooth ? 'smooth' : 'auto' });
    }, [pathname, hash, smooth]);

    return null;
}
