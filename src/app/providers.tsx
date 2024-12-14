'use client'

import { NextUIProvider } from "@nextui-org/react"
import { ReactNode } from "react"
interface ProviderProps {
  children: ReactNode
}

const Providers: React.FC<ProviderProps> = ({children})=>{
  return <NextUIProvider>{children}</NextUIProvider>
}


export default Providers