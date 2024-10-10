'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirecionar para a página de login assim que a aplicação é carregada
    router.push('/login');
  }, []);

  return null; // Não renderiza nada na página inicial, apenas redireciona
}
