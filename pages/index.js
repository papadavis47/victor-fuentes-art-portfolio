import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Victor Fuentes - Painter</title>
        <meta name='description' content='Porfolio for painter, Victor Fuentes' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className='text-center my-6'>
          <h1 className='text-3xl font-bold underline'>Portfolio for Victor Fuentes</h1>
        </div>
      </main>
    </div>
  );
}
