'use client';

import { demos, type Item } from '@/lib/demos'
import { socials } from '@/lib/socials'
import { useSelectedLayoutSegments } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from '@/utils/link'
import clsx from 'clsx'

export function GlobalNav() {
  // src https://github.com/vercel/app-playground
  
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  return (
    <nav className="fixed top-0 z-10 flex w-full flex-col pl-4 lg:bottom-0 lg:z-auto lg:w-80">
      <div className="flex flex-col h-14 items-center py-12 lg:pt-20 mx-4 lg:h-auto">
        <Link
          href="/"
          className="pb-3"
          onClick={close}
        >
          <div className="text-zinc-900">
            <Image src="/akairosu.svg" alt="Akairosu" width={308} height={80} />
          </div>
        </Link>
        <div className="border-b-4 border-zinc-400/30 dark:border-akairosu-brown w-68 h-11  bg-zinc-200 dark:bg-akairosu-white rounded-full py-1 px-5">
          <ul className="flex flex-row space-x-3">
            {socials.map(social => (
              <li key={social.slug}>
                <SocialMediaButton svgPath={social.svgPath} link={social.link} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        type="button"
        className="hover:text-akairosu-brown group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium">
          Menu
        </div>
        {isOpen ? (
          <div className="block w-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>

        ) : (
          <div className="block w-6"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        )}
      </button>

      <div
        className={clsx('lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-white dark:bg-zinc-900': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className={clsx(
          'px-5 pt-10',
        {
          '': isOpen,
          '': !isOpen
        })}>
          <div>
            {demos.map((item) => (
              <GlobalNavItem key={item.slug} item={item} close={close} />
            ))}
          </div>
          <Link className="group flex gap-2 absolute bottom-14 hover:text-akairosu-orange" href="mailto:akairosu.arts@gmail.com">
            <button className="group-hover:animate-wiggle">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </button>
            <p>akairosu.arts@gmail.com</p>
          </Link>
        </nav>
      </div>

    </nav>
  )
}

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segments = useSelectedLayoutSegments()
  const isActive = item.slug === segments.at(-1) || (item.slug === '' && segments.length == 0); // set about page as default 
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };
  
  const onLeave = () => {
    setHover(false);
  };
 
  return (
    <Link
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'block rounded-md px-3 py-1 text-sm font-medium hover:text-akairosu-brown transition-all duration-300',
        {
          '': !isActive,
          'text-akairosu-brown font-semibold': isActive,
        },
      )}
    >
      {item.name.toUpperCase()} &nbsp;
      {hover && !isActive ? <span className="animate-pulse">🌻</span> : ''}
      {/* {isActive ? '🐐':''} */}
    </Link>
  );
}

function SocialMediaButton(
  { svgPath, link }: { svgPath: React.ReactNode, link: string },
) {
  return (
    <a href={link} target='_blank'>
      <button className="hover:animate-wiggle rounded-full p-2 transition-colors duration-300 bg-akairosu-brown hover:bg-zinc-800 fill-current text-white">
        <svg className="h-4 w-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          { svgPath } 
        </svg>
      </button>
    </a>
  )
}