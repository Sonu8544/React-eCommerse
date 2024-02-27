import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - eCom`;
        } else {
            document.title = 'eCom | eCommerse Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
