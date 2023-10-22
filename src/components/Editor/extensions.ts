import Placeholder from '@tiptap/extension-placeholder'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import StarterKit from '@tiptap/starter-kit'

export const extensions = [
  TaskItem.configure({
    nested: true,
  }),
  TaskList,
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  Placeholder.configure({
    placeholder: () => 'Your Thoughts...',
    emptyNodeClass:
      'first:before:text-gray-400 first:before:float-left first:before:content-[attr(data-placeholder)] first:before:pointer-events-none first:before:h-0',
  }),
]
