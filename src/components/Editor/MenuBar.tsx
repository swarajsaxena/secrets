import { Editor } from '@tiptap/react'
import {
  LuBold,
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuItalic,
  LuList,
  LuListOrdered,
  LuRedo,
  LuUndo,
} from 'react-icons/lu'
import { MdOutlineHorizontalRule } from 'react-icons/md'

export const MenuBar = ({ editor }: { editor: Editor }) =>
  editor && (
    <div className='flex flex-wrap gap-2 border-b border-emerald-950/20 w-full p-2 editor-options'>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={
          editor.isActive('bold')
            ? 'p-2 bg-emerald-100 rounded-md text-emerald-700'
            : 'p-2 bg-emerald-0 rounded-md text-black'
        }
      >
        <LuBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={
          editor.isActive('italic')
            ? 'p-2 bg-emerald-100 rounded-md text-emerald-700'
            : 'p-2 bg-emerald-0 rounded-md text-black'
        }
      >
        <LuItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive('heading', { level: 1 })
            ? 'p-2 bg-emerald-100 rounded-md text-emerald-700'
            : 'p-2 bg-emerald-0 rounded-md text-black'
        }
      >
        <LuHeading1 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive('heading', { level: 2 })
            ? 'p-2 bg-emerald-100 rounded-md text-emerald-700'
            : 'p-2 bg-emerald-0 rounded-md text-black'
        }
      >
        <LuHeading2 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive('heading', { level: 3 })
            ? 'p-2 bg-emerald-100 rounded-md text-emerald-700'
            : 'p-2 bg-emerald-0 rounded-md text-black'
        }
      >
        <LuHeading3 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive('bulletList')
            ? 'p-2 bg-emerald-100 rounded-md text-emerald-700'
            : 'p-2 bg-emerald-0 rounded-md text-black'
        }
      >
        <LuList />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive('orderedList')
            ? 'p-2 bg-emerald-100 rounded-md text-emerald-700'
            : 'p-2 bg-emerald-0 rounded-md text-black'
        }
      >
        <LuListOrdered />
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className='p-2 bg-emerald-0 rounded-md text-black'
      >
        <MdOutlineHorizontalRule />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className={
          editor.isActive('undo')
            ? 'p-2 bg-emerald-0 rounded-md text-black'
            : 'p-2 bg-emerald-0 rounded-md text-black opacity-50 cursor-not-allowed'
        }
      >
        <LuUndo />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className={
          editor.isActive('redo')
            ? 'p-2 bg-emerald-0 rounded-md text-black'
            : 'p-2 bg-emerald-0 rounded-md text-black opacity-50 cursor-not-allowed'
        }
      >
        <LuRedo />
      </button>
    </div>
  )
