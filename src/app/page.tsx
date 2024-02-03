import Image from 'next/image'
import { IoStarSharp } from 'react-icons/io5'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

import bgPatternTopDesktop from '@/assests/images/bg-pattern-top-desktop.svg'
import bgPatternBottomDesktop from '@/assests/images/bg-pattern-bottom-desktop.svg'

import bgPatternTopMobile from '@/assests/images/bg-pattern-top-mobile.svg'
import bgPatternBottomMobile from '@/assests/images/bg-pattern-bottom-mobile.svg'

import user1 from '@/assests/images/image-colton.jpg'
import user2 from '@/assests/images/image-irene.jpg'
import user3 from '@/assests/images/image-anne.jpg'

const userReviews: UserCardProps[] = [
  {
    name: 'Colton Smith',
    avatar: user1,
    review:
      'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!',
  },
  {
    name: 'Irene Roberts',
    avatar: user2,
    review:
      'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.',
    style: 'md:mt-5',
  },
  {
    name: 'Anne Wallace',
    avatar: user3,
    review:
      'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!',
    style: 'md:mt-10',
  },
]

function Home() {
  return (
    <div className='min-h-screen h-full w-full  flex justify-center items-center '>
      <BGImges />
      <main className='max-w-6xl w-full flex flex-col gap-7 '>
        <section className='flex justify-between px-4 lg:px-10 py-5 flex-col md:flex-row  gap-5 md:gap-0'>
          <div className='md:w-1/2 md:max-w-[400px] flex flex-col gap-5 '>
            <h2 className='text-4xl lg:text-5xl text-very-dark-magenta font-bold leading-10 text-center md:text-start px-10 md:px-0'>
              10,000+ of our users love our products.
            </h2>
            <p className='text-dark-grayish-magenta leading-5 text-sm lg:text-base text-center md:text-start px-5 md:px-0'>
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>

          <div className='md:w-1/2 flex flex-col justify-center gap-5 sm:px-14 md:px-0 xl:pl-14  items-center'>
            <Review count={5} label={'Reviews'} />
            <Review
              style='md:ml-4 lg:ml-5 xl:ml-10'
              count={5}
              label={'Report Guru'}
            />
            <Review
              style='md:ml-8 lg:ml-16 xl:ml-20'
              count={5}
              label={'Best Tech'}
            />
          </div>
        </section>

        <section className='flex justify-between gap-5 px-4 lg:px-10 py-5 flex-col sm:flex-row items-center sm:items-start'>
          {userReviews.map((review) => (
            <UserCard {...review} />
          ))}
        </section>
      </main>
    </div>
  )
}

export default Home

type StarsProps = { count: number; label: string; style?: string }

function Review({ count, label, style }: StarsProps) {
  let stars: number[] = []
  for (let i = 1; i <= count; i++) {
    stars.push(i)
  }

  return (
    <div
      className={`flex items-center justify-center md:justify-start gap-2 md:gap-6 bg-light-grayish-magenta px-4 lg:px-7 py-3 rounded-xl md:rounded-md w-full max-w-[400px] flex-col md:flex-row ${style}`}
    >
      <div className='flex  gap-1.5 text-amber-400'>
        {stars.map((s) => (
          <IoStarSharp className='text-lg' />
        ))}
      </div>
      <p className='text-very-dark-magenta font-semibold text-xs lg:text-sm'>
        Rated {count} Stars in {label}
      </p>
    </div>
  )
}

type UserCardProps = {
  name: string
  avatar: string | StaticImport
  review: string
  style?: string
}

function UserCard({ name, avatar, review, style }: UserCardProps) {
  return (
    <div
      className={`bg-very-dark-magenta rounded-lg flex flex-col gap-5 px-6 lg:px-9 py-7 max-w-[400px] h-fit ${style}`}
    >
      <div className='flex gap-4'>
        <div>
          <Image className='rounded-full h-8 w-8 md:h-10 md:w-10' src={avatar} alt='avatar' />
        </div>
        <div>
          <h4 className='text-white font-medium text-xs md:text-base'>
            {name}
          </h4>
          <p className='text-soft-pink text-xs md:text-base'>Verified Buyer</p>
        </div>
      </div>
      <div>
        <p className='text-white text-sm lg:text-base'>"{review}"</p>
      </div>
    </div>
  )
}

function BGImges() {
  return (
    <div className=''>
      <div className=' hidden md:block'>
        <Image
          className='absolute top-0 left-0'
          src={bgPatternTopDesktop}
          alt='bg-pattern-top-desktopbg-pattern-top-desktop'
        />
        <Image
          className='absolute bottom-0 right-0'
          src={bgPatternBottomDesktop}
          alt='bg-pattern-top-desktopbg-pattern-top-desktop'
        />
      </div>
      {/* mobiles images */}
      <div className='md:hidden'>
        <Image
          className='absolute top-0 left-0'
          src={bgPatternTopMobile}
          alt='bg-pattern-top-desktopbg-pattern-top-desktop'
        />
        <Image
          className='absolute bottom-0 right-0'
          src={bgPatternBottomMobile}
          alt='bg-pattern-top-desktopbg-pattern-top-desktop'
        />
      </div>
    </div>
  )
}