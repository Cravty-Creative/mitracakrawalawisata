import style from './UnderConstruction.module.css';

export default function UnderConstruction() {
  return (
    <div className={style['wrapper']}>
      <div className='mb-10 font-light text-xl uppercase'>
        mitracakrawalawisata.com
      </div>
      <div className={style['img-wrapper']}>
        <img src="/under-construction.png" alt="under construction" />
      </div>
      <div className='flex flex-col items-center gap-2 text-xl font-light'>
        Created with love and passion by
        <div className='w-24'>
          <img src="/cravty-transparent.png" alt="cravty" className='w-full' />
        </div>
      </div>
    </div>
  )
}