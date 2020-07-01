declare module 'types/home' {
  export type Window = {
    w: number
    h: number
  }

  export type Pointer = {
    x: number
    y: number
    z: number
  }

  export type Data = {
    window: Window
    pointer: Pointer
  }

  export type Computed = {
    mousePoint: string
  }

  export type Methods = {
    setMousePoint: (evt: any) => void
    pointer: Pointer
  }
}
