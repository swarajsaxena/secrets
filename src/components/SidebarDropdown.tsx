import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useState } from 'react'
import {
  FiChevronRight,
  FiLogOut,
  FiMenu,
  FiUser,
  FiUserCheck,
  FiUserX,
} from 'react-icons/fi'

const SidebarDropdown = () => {
  const { data: session } = useSession()
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Image
          src={session?.user?.image ?? ''}
          alt='profile image'
          width={32}
          height={32}
          className='rounded-full cursor-pointer'
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='bg-white translate-x-4 rounded-md p-[5px] border border-emerald-950/20 will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideDownAndFade data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideDownAndFade'
          sideOffset={5}
        >
          <DropdownMenu.Label className='px-6 rounded-md text-sm flex items-center gap-2 leading-none py-4 bg-emerald-100 text-emerald-700 font-semibold'>
            <div>
              <div>{session?.user?.name ?? ''}</div>
              <div className='text-xs font-medium'>
                {session?.user?.email ?? ''}
              </div>
            </div>
          </DropdownMenu.Label>
          <DropdownMenu.Separator className='h-[1px] bg-emerald-950/20 m-[5px]' />
          <DropdownMenu.Item className='relative group text-sm font-medium leading-none rounded-[3px] hover:bg-emerald-500 hover:text-white flex items-center py-2 px-1 pl-6 select-none outline-none gap-2 data-[highlighted]:bg-emerald-500 data-[highlighted]:text-white'>
            <FiUserCheck />
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => signOut()}
            className='group text-sm font-medium leading-none rounded-[3px] hover:bg-emerald-500 hover:text-white flex items-center py-2 px-1 relative pl-6 select-none outline-none gap-2 data-[highlighted]:bg-emerald-500 data-[highlighted]:text-white'
          >
            <FiLogOut />
            Log Out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default SidebarDropdown
