const REGEX = /[0-9]+/
export const isNumber = (value: string) => {
    return REGEX.test(value)
}