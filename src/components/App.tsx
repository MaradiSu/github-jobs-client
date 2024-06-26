import classNames from 'classnames'
import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'
import { ReactQueryDevtools } from 'react-query-devtools'

export default function App({ children }: { children: ReactNode }) {
  const [darkMode, setDarkModeState] = useState(false)
  const MODE = 'githubJobsColorMode'

  const setDarkMode = (value: boolean) => {
    if (value) {
      localStorage.setItem(MODE, 'dark')
      setDarkModeState(true)
    } else {
      localStorage.setItem(MODE, 'light')
      setDarkModeState(false)
    }
  }

  useEffect(() => {
    if (localStorage.getItem(MODE) === 'dark') {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])

  return (
    <>
      <div className={classNames(darkMode && 'dark')}>
        <div className={'bg-normal-grey dark:bg-midnight pb-12'}>
          <div className='flex items-baseline px-6 pt-8 h-34 bg-violet'>
            <Link href='/'>
              <svg
                className='cursor-pointer'
                width='115'
                height='32'
                xmlns='http://www.w3.org/2000/svg'
                // onClick={() => router.push('/')}
              >
                <path
                  d='M7.612 24.08c1.022 0 1.967-.178 2.838-.531a6.998 6.998 0 002.29-1.498l.109 1.711h4.252V0h-4.502v9.49a7.369 7.369 0 00-2.251-1.387 7.394 7.394 0 00-2.736-.499c-1.458 0-2.764.356-3.915 1.07-1.152.712-2.056 1.689-2.712 2.93C.328 12.844 0 14.257 0 15.842c0 1.584.328 2.996.985 4.237.656 1.241 1.56 2.218 2.712 2.93 1.151.714 2.457 1.07 3.915 1.07zm1.017-3.961c-1.147 0-2.095-.407-2.845-1.22s-1.126-1.832-1.126-3.057c0-1.225.375-2.245 1.126-3.058.75-.813 1.698-1.22 2.845-1.22 1.146 0 2.094.407 2.844 1.22s1.126 1.833 1.126 3.058c0 1.225-.375 2.244-1.126 3.057-.75.813-1.698 1.22-2.844 1.22zm20.258 3.96c1.084 0 2.217-.18 3.4-.538 1.182-.36 2.378-1.02 3.587-1.98l-2.72-3.296a7.804 7.804 0 01-1.946 1.37c-.714.354-1.613.531-2.696.531-1.011 0-1.894-.274-2.65-.823a4.154 4.154 0 01-1.555-2.139h12.192v-1.378c0-1.595-.354-3.01-1.063-4.246a7.772 7.772 0 00-2.9-2.915c-1.224-.707-2.623-1.061-4.196-1.061-1.584 0-2.999.356-4.244 1.07a7.897 7.897 0 00-2.947 2.914c-.719 1.23-1.078 2.632-1.078 4.206 0 1.595.375 3.018 1.125 4.27.75 1.25 1.787 2.233 3.11 2.946 1.324.713 2.85 1.07 4.58 1.07zm2.985-9.41h-7.659a4.047 4.047 0 011.383-2.233c.704-.581 1.535-.872 2.494-.872.948 0 1.76.286 2.438.856.677.57 1.126 1.32 1.344 2.25zm16.273 9.093l6.174-15.841h-4.736l-2.61 7.715a23.244 23.244 0 00-.509 1.774c-.193.76-.351 1.452-.477 2.075h-.062a32.377 32.377 0 00-.43-2.09c-.182-.772-.346-1.358-.492-1.76l-2.83-7.714h-4.892l6.487 15.841h4.377zM58.399 5.07c.75 0 1.355-.232 1.813-.697.459-.464.688-1.077.688-1.837s-.23-1.373-.688-1.838C59.754.232 59.149 0 58.399 0s-1.355.232-1.813.697c-.459.465-.688 1.077-.688 1.838 0 .76.229 1.373.688 1.837.458.465 1.062.697 1.813.697zM54.882 32c1.865 0 3.293-.504 4.283-1.513.99-1.008 1.485-2.453 1.485-4.333V7.921h-4.502v17.71c0 .75-.237 1.34-.711 1.767-.474.428-1.076.642-1.806.642-.542 0-1.1-.122-1.672-.365v3.739c.99.39 1.964.586 2.923.586zm16.835-7.92c1.605 0 3.032-.357 4.283-1.07a7.903 7.903 0 002.962-2.93c.724-1.242 1.086-2.654 1.086-4.238 0-1.585-.362-2.997-1.086-4.238A7.903 7.903 0 0076 8.674c-1.25-.714-2.678-1.07-4.283-1.07-1.605 0-3.035.356-4.291 1.07a7.887 7.887 0 00-2.97 2.93c-.724 1.24-1.086 2.653-1.086 4.238 0 1.584.362 2.996 1.086 4.237a7.887 7.887 0 002.97 2.93c1.256.714 2.686 1.07 4.29 1.07zm0-3.961c-1.147 0-2.095-.407-2.845-1.22s-1.126-1.832-1.126-3.057c0-1.225.376-2.245 1.126-3.058.75-.813 1.698-1.22 2.845-1.22 1.146 0 2.094.407 2.845 1.22.75.813 1.125 1.833 1.125 3.058 0 1.225-.375 2.244-1.125 3.057-.75.813-1.699 1.22-2.845 1.22zm20.79 3.96c1.469 0 2.777-.356 3.923-1.07 1.146-.712 2.048-1.689 2.704-2.93.657-1.24.985-2.653.985-4.237 0-1.585-.328-2.997-.985-4.238-.656-1.241-1.558-2.218-2.704-2.93-1.146-.714-2.454-1.07-3.924-1.07-.98 0-1.89.166-2.735.499a7.369 7.369 0 00-2.251 1.386V0h-4.502v23.762h4.252l.11-1.71a6.978 6.978 0 002.297 1.497c.876.353 1.819.53 2.83.53zm-1.017-3.96c-1.146 0-2.094-.407-2.844-1.22s-1.126-1.832-1.126-3.057c0-1.225.375-2.245 1.126-3.058.75-.813 1.698-1.22 2.844-1.22 1.147 0 2.095.407 2.845 1.22s1.126 1.833 1.126 3.058c0 1.225-.375 2.244-1.126 3.057-.75.813-1.698 1.22-2.845 1.22zm17.304 3.96c1.136 0 2.173-.198 3.111-.594.938-.396 1.688-.969 2.25-1.719.564-.75.845-1.642.845-2.677 0-1.035-.263-1.872-.79-2.51a5.958 5.958 0 00-1.93-1.537c-.76-.386-1.5-.721-2.22-1.006a18.284 18.284 0 01-1.727-.777c-.484-.253-.727-.575-.727-.966 0-.348.175-.583.524-.705.35-.121.67-.182.961-.182.511 0 1.134.119 1.868.356.735.238 1.332.51 1.79.816l1.985-3.47a9.31 9.31 0 00-2.837-1.148 13.27 13.27 0 00-2.962-.356c-1.917 0-3.4.433-4.447 1.299-1.047.866-1.571 1.97-1.571 3.31 0 .972.247 1.765.742 2.377a5.807 5.807 0 001.845 1.497 28.35 28.35 0 002.196 1.038c.688.285 1.295.575 1.821.871.526.296.79.681.79 1.156 0 .328-.141.597-.422.808-.282.212-.652.317-1.11.317-.594 0-1.269-.177-2.025-.53-.755-.354-1.58-.832-2.477-1.434l-2.126 3.437c1.053.793 2.155 1.379 3.306 1.759 1.152.38 2.264.57 3.337.57z'
                  fill='#FFF'
                  fillRule='nonzero'
                />
              </svg>
            </Link>
            <div className='flex items-center ml-auto space-x-4'>
              <svg width='20' height='19' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M10 15.635c.33 0 .612.295.612.639v1.89c0 .344-.282.638-.612.638s-.612-.294-.612-.638v-1.89c0-.344.282-.639.612-.639zm-4.488-1.783c.27.262.27.68 0 .941L4.03 16.231a.698.698 0 01-.97 0 .649.649 0 010-.941l1.482-1.438c.27-.261.7-.261.97 0zm9.946 0l1.483 1.438c.27.261.27.68 0 .941a.698.698 0 01-.97 0l-1.483-1.438a.649.649 0 010-.94c.242-.262.674-.262.97 0zM10 4.552c1.396 0 2.685.525 3.598 1.4.913.85 1.504 2.05 1.504 3.35 0 1.3-.59 2.5-1.504 3.35a5.314 5.314 0 01-3.598 1.4c-1.396 0-2.685-.525-3.598-1.4-.913-.85-1.504-2.05-1.504-3.35 0-1.3.564-2.5 1.504-3.35A5.314 5.314 0 0110 4.552zM2.607 8.906c.355 0 .658.274.658.594 0 .32-.303.594-.658.594H.658C.304 10.094 0 9.82 0 9.5c0-.32.304-.594.658-.594h1.95zm16.735 0c.354 0 .658.274.658.594 0 .32-.304.594-.658.594h-1.95c-.354 0-.657-.274-.657-.594 0-.32.303-.594.658-.594h1.949zM4.03 2.77l1.482 1.438c.27.261.27.68 0 .94-.242.262-.674.262-.97 0L3.059 3.71a.649.649 0 010-.941c.27-.261.701-.261.97 0zm12.91 0c.27.261.27.68 0 .941l-1.482 1.438a.698.698 0 01-.97 0 .649.649 0 010-.941l1.482-1.438c.27-.261.701-.261.97 0zM10 .198c.33 0 .612.294.612.638v1.89c0 .344-.282.639-.612.639s-.612-.295-.612-.639V.836c0-.344.282-.638.612-.638z'
                  fill='#FFF'
                  fillRule='nonzero'
                />
              </svg>
              <span
                onClick={() => setDarkMode(!darkMode)}
                role='checkbox'
                tabIndex={0}
                aria-checked='false'
                className={classNames(
                  'p-1 items-center relative bg-white inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-12 focus:outline-none focus:shadow-outline'
                )}
              >
                <span
                  aria-hidden='true'
                  className={classNames(
                    'inline-block w-3.5 h-3.5 transition duration-200 ease-in-out transform bg-violet rounded-full shadow',
                    darkMode ? 'translate-x-5' : 'translate-x-0'
                  )}
                ></span>
              </span>
              <svg width='12' height='12' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M6 0c1.516 0 2.925.566 3.978 1.523A3.979 3.979 0 008 1a4.014 4.014 0 00-2.821 1.179A3.927 3.927 0 004 5c0 1.095.463 2.105 1.179 2.821A3.927 3.927 0 008 9a4.034 4.034 0 003.974-3.548c.017.18.026.364.026.548a6.02 6.02 0 01-1.768 4.232A6.02 6.02 0 016 12a5.89 5.89 0 01-4.232-1.768A6.02 6.02 0 010 6a5.89 5.89 0 011.768-4.232A6.02 6.02 0 016 0z'
                  fill='#FFF'
                  fillRule='nonzero'
                />
              </svg>
            </div>
          </div>
          {children}
        </div>

        <footer className='fixed bottom-0 z-10 w-screen bg-white border-t border-normal-grey dark:border-dark-grey dark:border-very-dark-blue dark:bg-very-dark-blue'>
          <div className='max-w-screen-xl px-4 py-4 mx-auto sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
            <div className='flex justify-center space-x-6 md:order-2'>
              <a
                href='https://b'
                className='relative text-gray-400 hover:text-gray-500'
                target='_blank'
                style={{ bottom: '0.19rem' }}
              >
                <span className='sr-only'>ghghgfhg</span>
                <img
                  className='w-8 opacity-30 hover:opacity-100'
                  src='/b-logo.png'
                />
              </a>
              <a
                href='https://bh-09999uteja.dev'
                className='text-gray-400 hover:text-gray-500'
                target='_blank'
              >
                <span className='sr-only'>
                  s Personal Website
                </span>
                <svg
                  className='w-6 h-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                  />
                </svg>
              </a>
              <a
                href='https://hashnode.com/@998'
                className='text-gray-400 hover:text-gray-500'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                <span className='sr-only'>Hashnode</span>
                <svg
                  className='w-6 h-6'
                  aria-hidden='true'
                  viewBox='0 0 337 337'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z'
                  />
                </svg>
              </a>
              <a
                href='https://twitter.com/fgh'
                className='text-gray-400 hover:text-gray-500'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                <span className='sr-only'>Twitter</span>
                <svg
                  className='w-6 h-6'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                </svg>
              </a>
              <a
                href='https://github.com/1998'
                className='text-gray-400 hover:text-gray-500'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                <span className='sr-only'>GitHub</span>
                <svg
                  className='w-6 h-6'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    fillRule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
              <a
                href='https://github.com/998'
                className='text-gray-400 hover:text-gray-500'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                <span className='sr-only'>LinkedIn</span>
                <svg
                  style={{ width: '1.2rem' }}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
                </svg>
              </a>
            </div>
            <div className='mt-2 md:mt-0 md:order-1'>
              <p className='text-base leading-6 prose text-center text-gray-400'>
                &copy; 2020 Made with 💜 by{' '}
                <a href='https://blog.bhghja.dev'>fgdfgd</a>.
              </p>
            </div>
          </div>
        </footer>
      </div>
      <ReactQueryDevtools />
    </>
  )
}
