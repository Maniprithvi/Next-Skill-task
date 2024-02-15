
import { Disclosure} from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'

import logo from '/images/logo-dark.png'


const navigation = [
  { name: 'try Demo', href: '#', current: true },
  { name: 'Pricing', href: '#', current: false },
  { name: 'Templates', href: '#', current: false }
]

const launguages = [
    {lan:'French'},
    {lan:'Esponole'},
    {lan:'Arabi'}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavBar=()=> {
  return (
    <>
      <div className="w-full z-10  p-2 border-b-2 bg-white fixed" >
        <Disclosure as="nav" className="">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 w-full items-center ">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex-shrink-0 ">
                    <img src={logo} alt="" className='lg:ml-3 md:ml-1 h-10 md:none '/>
                    {/* <img scr={logo2} alt='' className='md:justify-center' /> */}
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-8  " >
    {/* drop down */}
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'text-gray-500'
                                : 'text-gray-500',
                              '  text-md font-medium '
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                    <button className=' p-2 w-28 rounded-full  bg-green-500 text-white'>
                        Signout
                      </button>
                      </div>
                   
                    </div>
                      
                  </div>
             
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md  p-2 text-gray-500 ">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 flex" style={{flexDirection:"column",alignItems:'center',justifyContent:'center'}}>
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'text-gray-500 bg-white':
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                    <button className=' p-2 w-28 rounded-full  bg-green-500 text-white'>
                        Signout
                      </button>
                </div>
              
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}


export default NavBar;