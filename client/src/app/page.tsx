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
  CreditThanksTo
} from '@/components'


const tutorData = [
  {
    title: "Advisory Professor",
    tutors: [
      { name: "홍길동", englishName: "Gildong Hong" },
      { name: "김철수", englishName: "Cheolsu Kim" }
    ]
  },
  {
    title: "UX tutor", 
    tutors: [
      { name: "이영희", englishName: "Younghee Lee" }
    ]
  },
  {
    title: "VD tutor",
    tutors: [
      { name: "박민수", englishName: "Minsu Park" },
      { name: "최지은", englishName: "Jieun Choi" },
      { name: "최지은", englishName: "Jieun Choi" },
      { name: "최지은", englishName: "Jieun Choi" }
    ]
  }
]


const thankstoData = [
  {
    title: "VD tutor",
    tutors: [
      { name: "박민수", englishName: "Minsu Park" },
      { name: "최지은", englishName: "Jieun Choi" },
      { name: "최지은", englishName: "Jieun Choi" },
      { name: "최지은", englishName: "Jieun Choi" }
    ]
  }
]


export default function Page() {
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
        title="Designed By"
        members={[
          {
            name: "김민채",
            role: "PL · UX", 
            englishName: "Gildong Hong",
            profileImage: "/images/32_UX_백채영_1.png",
            socialLinks: {
              linkedin: "https://linkedin.com",
              behance: "https://behance.net/kim",
              instagram: "https://instagram.com/kim"
            }
          },
          {
            name: "김민채",
            role: "PL · UX", 
            englishName: "Gildong Hong",
            profileImage: "/images/32_UX_백채영_1.png",
            socialLinks: {
              linkedin: "https://linkedin.com",
              behance: "https://behance.net/kim",
              instagram: "https://instagram.com/kim"
            }
          },
          {
            name: "김민채",
            role: "PL · UX", 
            englishName: "Gildong Hong",
            profileImage: "/images/32_UX_백채영_1.png",
            socialLinks: {
              linkedin: "https://linkedin.com",
              behance: "https://behance.net/kim",
              instagram: "https://instagram.com/kim"
            }
          },
          {
            name: "김민채",
            role: "PL · UX", 
            englishName: "Gildong Hong",
            profileImage: "/images/32_UX_백채영_1.png",
            socialLinks: {
              linkedin: "https://linkedin.com",
              behance: "https://behance.net/kim",
              instagram: "https://instagram.com/kim"
            }
          },
          {
            name: "김민채",
            role: "PL · UX", 
            englishName: "Gildong Hong",
            profileImage: "/images/32_UX_백채영_1.png",
            socialLinks: {
              linkedin: "https://linkedin.com",
              behance: "https://behance.net/kim",
              instagram: "https://instagram.com/kim"
            }
          },
        ]}
      />
      <CreditTutor title="Tutor" sections={tutorData} />
      <CreditThanksTo title="Thanks to" sections={thankstoData}/>
      <Footer />
    </>
  )
}
