'use client'
import {
  Header,
  Footer,
  Summary,
  MainImage,
  Divide,
  TitleBody,
  RightTitleBody,
  RightBody,
  MidBody,
  MidTitle,
  LeftTitle,
  MediaContainer,
  ImageGallery,
  Credit,
  CreditTutor,
  CreditThanksTo,
  ProjectNavigation,
  MobileNavigation,
  ArchiveSidebar,
  ArchivePoint,
  ArchiveImage,
} from '@/components'
import { useScrollAtBottom } from '@/hooks'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const tutorData = [
  {
    title: 'Advisory Professor',
    tutors: [
      { name: '홍길동', englishName: 'Gildong Hong' },
      { name: '김철수', englishName: 'Cheolsu Kim' },
    ],
  },
  {
    title: 'UX tutor',
    tutors: [{ name: '이영희', englishName: 'Younghee Lee' }],
  },
  {
    title: 'VD tutor',
    tutors: [
      { name: '박민수', englishName: 'Minsu Park' },
      { name: '최지은', englishName: 'Jieun Choi' },
      { name: '최지은', englishName: 'Jieun Choi' },
      { name: '최지은', englishName: 'Jieun Choi' },
    ],
  },
]

const thankstoData = [
  {
    title: 'VD tutor',
    tutors: [
      { name: '박민수', englishName: 'Minsu Park' },
      { name: '최지은', englishName: 'Jieun Choi' },
      { name: '최지은', englishName: 'Jieun Choi' },
      { name: '최지은', englishName: 'Jieun Choi' },
    ],
  },
]

const points = [
  {
    id: '1',
    top: '50%',
    left: '50%',
    images: [
      '/images/archive-process-1.png',
      '/images/archive-process-2.png',
      '/images/archive-process-3.png',
      '/images/archive-process-4.png',
      '/images/archive-process-5.png',
    ],
  },
]

export default function Page() {
  const [isPointClicked, setIsPointClicked] = useState(false)
  const [currentPoint, setCurrentPoint] = useState(
    points[0], // 초기값으로 첫 번째 포인트 설정
  )

  const isAtBottom = useScrollAtBottom(10)

  const setOpenSidebar = (point: any) => {
    if (isPointClicked) {
      setIsPointClicked(false)
      return
    }
    setCurrentPoint(point)
    setIsPointClicked(true)
  }

  return (
    <>
      <Header />
      <Summary />
      <MainImage />
      <Divide />
      <TitleBody />
      <RightTitleBody />
      <RightBody />
      <MidBody />
      <MidTitle />
      <LeftTitle />
      <MediaContainer type='video' src='https://player.vimeo.com/video/844128999' alt='이곳에 비디오를' />
      <ImageGallery images={['/images/image1.jpeg', '/images/image2.jpeg', '/images/image3.jpeg']} />
      <Credit
        title='Designed By'
        members={[
          {
            name: '김민채',
            role: 'PL · UX',
            englishName: 'Gildong Hong',
            profileImage: '/images/32_UX_백채영_1.png',
            socialLinks: {
              linkedin: 'https://linkedin.com',
              behance: 'https://behance.net/kim',
              instagram: 'https://instagram.com/kim',
            },
          },
          {
            name: '김민채',
            role: 'PL · UX',
            englishName: 'Gildong Hong',
            profileImage: '/images/32_UX_백채영_1.png',
            socialLinks: {
              linkedin: 'https://linkedin.com',
              behance: 'https://behance.net/kim',
              instagram: 'https://instagram.com/kim',
            },
          },
          {
            name: '김민채',
            role: 'PL · UX',
            englishName: 'Gildong Hong',
            profileImage: '/images/32_UX_백채영_1.png',
            socialLinks: {
              linkedin: 'https://linkedin.com',
              behance: 'https://behance.net/kim',
              instagram: 'https://instagram.com/kim',
            },
          },
          {
            name: '김민채',
            role: 'PL · UX',
            englishName: 'Gildong Hong',
            profileImage: '/images/32_UX_백채영_1.png',
            socialLinks: {
              linkedin: 'https://linkedin.com',
              behance: 'https://behance.net/kim',
              instagram: 'https://instagram.com/kim',
            },
          },
          {
            name: '김민채',
            role: 'PL · UX',
            englishName: 'Gildong Hong',
            profileImage: '/images/32_UX_백채영_1.png',
            socialLinks: {
              linkedin: 'https://linkedin.com',
              behance: 'https://behance.net/kim',
              instagram: 'https://instagram.com/kim',
            },
          },
        ]}
      />
      <CreditTutor title='Tutor' sections={tutorData} />
      <CreditThanksTo title='Thanks to' sections={thankstoData} />
      <MobileNavigation />
      <ProjectNavigation />
      <ArchiveImage src='/images/pc_archive.png'>
        <ArchivePoint point={points[0]} setOpenSidebar={setOpenSidebar} />
      </ArchiveImage>
      <AnimatePresence>
        {isPointClicked && <ArchiveSidebar isVisible={!isAtBottom} currentPoint={currentPoint} />}
      </AnimatePresence>
      {/* 여백 */}
      <div className='h-[100px] md:h-[200px] lg:h-[300px] bg-white' />
      <Footer />
    </>
  )
}
