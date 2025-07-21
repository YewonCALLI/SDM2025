'use client'
import { Header, Footer, MainImage } from '@/components/projects'
import { HeaderBody, Credit, SolutionSentence } from '@/components/about'

export default function AboutPage() {
  return (
    <>
      <Header />
      <MainImage />
      <HeaderBody />
      <Credit
        title='Designed By'
        members={[
          {
            name: '김자영',
            role: 'PL',
            englishName: 'Gildong Hong',
            profileImage: '/images/about/32_UX_김자영_1.png',
            socialLinks: {
              linkedin: 'https://linkedin.com',
              behance: 'https://behance.net/kim',
              instagram: 'https://instagram.com/kim',
            },
          },
          {
            name: '고윤서',
            englishName: 'Gildong Hong',
            profileImage: '/images/about/32_UX_고윤서_1.png',
            socialLinks: {
              linkedin: 'https://linkedin.com',
              behance: 'https://behance.net/kim',
              instagram: 'https://instagram.com/kim',
            }
          },
          {
            name: '황다영',
            englishName: 'Gildong Hong',
            profileImage: '/images/about/32_UX_황다영_1.png',
            socialLinks: {
              linkedin: 'https://linkedin.com',
              behance: 'https://behance.net/kim',
              instagram: 'https://instagram.com/kim',
            }
          },
          {
            name: '김민채',
            englishName: 'Gildong Hong',
            profileImage: '/images/about/32_UX_김민채_1.png',
            socialLinks: {
              linkedin: 'https://linkedin.com',
              behance: 'https://behance.net/kim',
              instagram: 'https://instagram.com/kim',
            }
          },
          {
            name: '이채연',
            englishName: 'Gildong Hong',
            profileImage: '/images/about/32_UX_이채연_1.png',
            socialLinks: {
              linkedin: 'https://linkedin.com',
              behance: 'https://behance.net/kim',
              instagram: 'https://instagram.com/kim',
            }
          },
          {
            name: '장유진',
            englishName: 'Gildong Hong',
            profileImage: '/images/about/32_UX_장유진_1.png',
            socialLinks: {
              linkedin: 'https://linkedin.com',
              behance: 'https://behance.net/kim',
              instagram: 'https://instagram.com/kim',
            }
          }
        ]}
      />
      <SolutionSentence text="Solution sentence"/>
      <Footer />
    </>
  )
}
