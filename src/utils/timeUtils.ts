import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const displayTimeFrom = (unixTime: number) => {
    const now = dayjs();
    const thePast = dayjs(unixTime);
    const nowMs = now.valueOf();
    const thePastMs = thePast.valueOf();
    const secondsDiff = Math.floor((nowMs - thePastMs) / 1000);
    if (secondsDiff > 60) {
        return thePast.from(now, false);
    } else if (secondsDiff === 0) {
        return 'just now';
    }
    return `${String(secondsDiff)} seconds ago`;
};
