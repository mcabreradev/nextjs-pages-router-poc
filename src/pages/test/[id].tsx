import React from 'react';
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  return <div className='container mt-5 mx-auto'>
    Hola el parametro es: {router.query.id}
  </div>;
}
