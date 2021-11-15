import '../styles/globals.css'
import { initializeApp, getApps } from 'firebase/app';
import { useEffect } from "react";
import { getDatabase, get, ref } from 'firebase/database'

const FIREBASE_CONFIG = { }; // TODO replace with your config

if (!getApps().length) {
  initializeApp(FIREBASE_CONFIG);
}

function MyApp({ Component, pageProps }) {
  const getData = async () => {
    try {
      const data = await get(ref(getDatabase(), '/')); // TODO replace with the data you want to fetch
      console.log('Got data successfully', data)
    } catch (e) {
      console.error('An error occurred while getting data');
      console.error(e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
