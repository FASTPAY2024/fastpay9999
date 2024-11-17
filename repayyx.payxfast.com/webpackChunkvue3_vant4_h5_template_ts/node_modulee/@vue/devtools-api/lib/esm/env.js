export function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
export function getTarget() {
    // @ts-ignore
    return (typeof navigator !== 'defined' && typeof window !== 'undefined')
        ? window
        : typeof global !== 'defined'
            ? global
            : {};
}
export const isProxyAvailable = typeof Proxy === 'function';
