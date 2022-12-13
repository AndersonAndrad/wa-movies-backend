/// <reference types="jest" />
import Mock = jest.Mock
/** Tipagem para possibilitar mock individual de funcoes */
export declare type Mocked<T> = Partial<{
  [K in keyof T]: Mock<
    T[K] extends (...args: any[]) => any ? ReturnType<T[K]> : T[K],
    T[K] extends (...args: infer P) => any ? P : any[]
  >
}>
