
export default function isMobileDevice() {
    return /Android|webOS|iPhone|BlackBerry|IEMobile|UCBrow|Opera Mini/i.test(navigator.userAgent);
};
