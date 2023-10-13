import styles from './layout.module.scss';
import type { Metadata } from 'next';
import Image from 'next/image'
import { Encode_Sans_Expanded } from 'next/font/google';

const font = Encode_Sans_Expanded({ weight: '700', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Authenticacion | Buscauth',
  description: 'Sitio para utenticarse en Buscauth.',
}


const AuthLayout = ({ children, }: { children: React.ReactNode }) => {
  return (
    <section className={styles['auth-layout']}>
      <div className={styles.card}>
        <figure className={styles.logo}>
          <Image
            src="/assets/images/buscauth-logo.svg"
            width={129.711}
            height={117.821}
            alt="Logo de Buscauth"
          />
          <figcaption className={font.className}>
            <h2 className={styles['logo-title']}>
              BUSCAUTH
            </h2>
          </figcaption>
        </figure>

        <div className={styles['card__body']}>
          {children}
        </div>
      </div>
    </section>
  )
}

export default AuthLayout;