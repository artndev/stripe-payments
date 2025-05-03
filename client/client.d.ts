export {}
import { storeConfig } from './src/storeConfig'

declare global {
  export type RootState = ReturnType<typeof storeConfig.getState>
  export type AppDispatch = typeof storeConfig.dispatch

  declare module '*.svg' {
    import React = require('react')

    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
    const src: string
    export default src
  }
}
