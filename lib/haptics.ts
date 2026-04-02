/**
 * Browser Haptics Support (Prompt 08)
 * Light and Medium vibration patterns for compatible devices.
 */
export function triggerHaptic(intensity: 'light' | 'medium' = 'light') {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(intensity === 'light' ? [10] : [25]);
    }
}
