// app/NextUIProvider.tsx
'use client';
import { ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';

interface Props {
  children: ReactNode;
}

export default function Provider({ children }: Props) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
