import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
// const navigation = [
//     { name: 'Dashboard', href: '#', current: true },
//     { name: 'Team', href: '#', current: false },
//     { name: 'Projects', href: '#', current: false },
//     { name: 'Calendar', href: '#', current: false },
//   ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const Header2 = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  return (
      <Disclosure as="nav" className=" ml-4 bg-primary-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-10x1 px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <NavLink style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    } to="/" className="text-primary fs-4" >Home </NavLink>
                    <NavLink style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    } to="/services" className="text-primary fs-4" >Why Us </NavLink>
                  <NavLink style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    } to="/ordernow" className="text-primary fs-4" >Order Now </NavLink>
                    <NavLink style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    } to="/contactUS" className="text-primary fs-4" >Contact </NavLink>
                    <NavLink style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    } to="/ServicePro" className="text-primary fs-4" >Become A provider </NavLink>

                    {/* {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-primary' : 'text-gray-300 hover:bg-gray-700 hover:text-primary',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))} */}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <NavLink
                  to="/login"
                  className=" bg-primary-50 p-1 text-primary hover:text-primary focus:outline-none f" >
                 SignIn
                </NavLink>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <NavLink
                    to="/signup"
                    className=" bg-primary-50 p-1 text-primary hover:text-primary focus:outline-none f">
                Register
                  </NavLink>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-primary py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {/* {navigation.map((item) => ( */}
                <Disclosure.Button>
<ol>
                <NavLink style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    } to="/" className="text-primary ml-2" >Home </NavLink>
                    <NavLink style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    } to="/services" className="text-primary ml-2" >Services </NavLink>
                    <NavLink style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    } to="/about" className="text-primary ml-2" >About </NavLink>
                    <NavLink style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    } to="/contactUS" className="text-primary ml-2 " >Contact </NavLink>
                    <NavLink style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    } to="/ServicePro" className="text-primary ml-2 " >Become A provider </NavLink>
                  </ol>
                </Disclosure.Button>
              {/* ))} */}
              
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header2