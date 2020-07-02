declare module 'types/works' {
  export type Window = {
    w: number
    h: number
  }

  export type Pointer = {
    x: number
    y: number
    z: number
  }

  export type Work = {
    id: number
    thumb: string
  }

  export type Data = {
    window: Window
    pointer: Pointer
    works: Work[]
    slide: any
  }

  export type Computed = {
    mousePoint: string
  }
}
