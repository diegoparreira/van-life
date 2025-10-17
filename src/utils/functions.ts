import { SetURLSearchParams } from "react-router-dom";

export function genNewSearchParamString(searchParams: URLSearchParams, key: string, value: string) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
        sp.delete(key);
    } else {
        sp.set(key, value);
    }
    return `?${sp.toString()}`;
}

export function genNewSearchParamsObj(setFn: (value: SetURLSearchParams) => void, key: string, value: string | null) {
    setFn((prev) => {
        const currentParams = prev instanceof URLSearchParams ? prev : new URLSearchParams(prev);

        const newParams = new URLSearchParams(currentParams);

        if (value === null) {
            newParams.delete(key);
        } else {
            newParams.set(key, value);
        }

        return newParams;
    });
}
