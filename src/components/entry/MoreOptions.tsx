import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useState } from 'react'
import {
  FiChevronRight,
  FiDelete,
  FiLogOut,
  FiMenu,
  FiMoreHorizontal,
  FiPlus,
  FiStar,
  FiUser,
  FiUserCheck,
  FiUserX,
} from 'react-icons/fi'

const MoreOptions = ({
  wordCount,
  charCount,
}: {
  wordCount: number
  charCount: number
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className='cursor-pointer groupbg-emerald-50 bg-emerald-50 hover:bg-emerald-100 p-2 text-emerald-700 text-xl rounded-md transition-all'>
          <FiMoreHorizontal className='' />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='min-w-[220px] bg-white rounded-md border border-emerald-950/20 -translate-x-14 shadow-md p-2'
          sideOffset={5}
        >
          <DropdownMenu.Label className='relative group text-sm font-medium leading-none flex items-center py-2 px-6 select-none outline-none gap-2 justify-between'>
            <div>Words</div>
            <div>{wordCount}</div>
          </DropdownMenu.Label>
          <DropdownMenu.Label className='relative group text-sm font-medium leading-none flex items-center py-2 px-6 select-none outline-none gap-2 justify-between'>
            <div>Characters</div>
            <div>{charCount}</div>
          </DropdownMenu.Label>
          <DropdownMenu.Separator className='h-[1px] bg-emerald-950/20 w-full m-1' />
          <DropdownMenu.Item className='relative group text-sm font-medium leading-none rounded-[3px] text-red-500 hover:bg-red-500 hover:text-white flex items-center py-2 px-1 pl-6 select-none outline-none gap-2 data-[highlighted]:bg-red-500 data-[highlighted]:text-white'>
            <FiPlus className='rotate-45 absolute top-1/2 -translate-y-1/2 -translate-x-[19px]' />
            Delete
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => signOut()}
            className='group text-emerald-500 text-sm font-medium leading-none rounded-[3px] hover:bg-emerald-500 hover:text-white flex items-center py-2 px-1 relative pl-6 select-none outline-none gap-2 data-[highlighted]:bg-emerald-500 data-[highlighted]:text-white'
          >
            <FiStar className='absolute top-1/2 -translate-y-1/2 -translate-x-[19px]' />
            Favourite
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default MoreOptions
