import React, { useEffect, useRef } from 'react'

import EditorJs, { OutputData } from '@editorjs/editorjs'
import CheckList from '@editorjs/checklist'
import InlineCode from '@editorjs/inline-code'
import List from '@editorjs/list'
import Table from '@editorjs/table'
import CodeBox from '@bomdi/codebox'
import Embed from '@editorjs/embed'
import Header from '@editorjs/header'
import LinkTool from '@editorjs/link'
import SimpleImage from '@editorjs/simple-image'
import Quote from '@editorjs/quote'

type Props = {
  data?: OutputData
  onChange(val: OutputData): void
  holder: string
}

const CustomEditor = ({ data, onChange, holder }: Props) => {
  const EDITOR_JS_TOOLS = {
    embed: Embed,
    header: Header,
    list: List,
    codeBox: CodeBox,
    linkTool: LinkTool,
    quote: Quote,
    checklist: CheckList,
    inlineCode: InlineCode,
    simpleImage: SimpleImage,
  }
  const ref = useRef<any>()

  useEffect(() => {
    //initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJs({
        holder: holder,
        placeholder: 'Start Writing Here ...',
        tools: EDITOR_JS_TOOLS,
        data,
        async onChange(api, event) {
          const x = await api.saver.save()
          onChange(x)
        },
      })
      ref.current = editor
    }

    //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy()
      }
    }
  }, [])

  return (
    <div
      id={holder}
      className='w-full prose max-w-full pt-2'
    />
  )
}

export default CustomEditor
