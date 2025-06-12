export const debounceResizeListener = (fn: () => void, ms = 150) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: () => void) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this), ms);
    };
};

// Copy the provided text to the users clipboard, shows errors in console
export const copyTextToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Text copied to clipboard');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}
