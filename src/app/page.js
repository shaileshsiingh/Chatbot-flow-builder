import FlowBuilder from '@/components/FlowBuilder';
import Head from 'next/head';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Chatbot flow builder</title>
      </Head>

      <FlowBuilder />
    </main>
  );
}
