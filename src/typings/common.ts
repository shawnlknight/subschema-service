// eslint-disable-next-line @typescript-eslint/ban-types
export type DeepPartial<T> = T extends Function
  ? T
  : T extends object // eslint-disable-line @typescript-eslint/ban-types
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T

export type AnyObject = Record<string, never>
