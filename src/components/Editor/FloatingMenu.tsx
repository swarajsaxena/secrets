import { BubbleMenu, Editor } from '@tiptap/react'
import {
  LuBold,
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuItalic,
} from 'react-icons/lu'

export const FloatingMenu = ({ editor }: { editor: Editor }) =>
  editor && (
    <BubbleMenu
      editor={editor}
      tippyOptions={{ duration: 100 }}
      className='bg-white p-1 border border-emerald-950/20 rounded-md flex gap-1 text-xs'
    >
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={
          editor.isActive('bold')
            ? 'p-1 bg-emerald-100 rounded-md text-emerald-700'
            : 'p-1 bg-emerald-0 rounded-md text-black'
        }
      >
        <LuBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive('italic')
            ? 'p-1 bg-emerald-100 rounded-md text-emerald-700'
            : 'p-1 bg-emerald-0 rounded-md text-black'
        }
      >
        <LuItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive('heading', { level: 1 })
            ? 'p-1 bg-emerald-100 rounded-md text-emerald-700'
            : 'p-1 bg-emerald-0 rounded-md text-black'
        }
      >
        <LuHeading1 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive('heading', { level: 2 })
            ? 'p-1 bg-emerald-100 rounded-md text-emerald-700'
            : 'p-1 bg-emerald-0 rounded-md text-black'
        }
      >
        <LuHeading2 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive('heading', { level: 3 })
            ? 'p-1 bg-emerald-100 rounded-md text-emerald-700'
            : 'p-1 bg-emerald-0 rounded-md text-black'
        }
      >
        <LuHeading3 />
      </button>
    </BubbleMenu>
  )
