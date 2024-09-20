import React, { useEffect, useState, useCallback } from 'react'
import { OnProgressInfo, buildClient } from '@datocms/cma-client-browser';
import { SimpleSchemaTypes } from '@datocms/cma-client';

const client = buildClient({
  apiToken: process.env.NEXT_PUBLIC_UPLOADS_API_TOKEN,
  environment: process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT ?? 'main'
});

export type Props = {
  customData?: any
  accept: string
  sizeLimit?: number
  tags?: string[]
  onDone: (upload: Upload) => void
  onUploading: (uploading: boolean) => void
  onImageData?: (image: ImageData) => void
  onProgress: (percentage: number) => void
  onError: (err: Error) => void
}

export type Upload = SimpleSchemaTypes.Upload;

const FileUpload = React.forwardRef<HTMLInputElement, Props>((props, ref) => {

  const {
    customData = {},
    tags,
    accept,
    sizeLimit,
    onDone,
    onUploading,
    onProgress,
    onError
  } = props

  const [error, setError] = useState<Error | undefined>()
  const [allTags, setAllTags] = useState<string[]>(['upload'])
  const [upload, setUpload] = useState<Upload | undefined>()

  const resetInput = useCallback(() => {
    setUpload(undefined)
    onUploading(false)
    setError(undefined)
    ref.current.value = ''
  }, [setUpload, setError, ref, onUploading])

  const createUpload = useCallback(async (file: File, allTags: string[]): Promise<Upload> => {

    if (!file)
      return Promise.reject(new Error('Ingen fil vald'))

    resetInput()
    onUploading(true)

    return new Promise((resolve, reject) => {
      client.uploads.createFromFileOrBlob({
        fileOrBlob: file,
        filename: file.name,
        tags: allTags,
        default_field_metadata: {
          en: {
            alt: '',
            title: '',
            custom_data: customData
          }
        },
        onProgress: (info: OnProgressInfo) => {
          if (info.payload && 'progress' in info.payload)
            onProgress(info.payload.progress)
        }
      }).then(resolve).catch(reject)
    })

  }, [customData, onUploading, onProgress, resetInput])

  const handleChange = useCallback(async (event) => {
    const file: File = event.target.files[0];
    if (!file) return

    try {

      const fileMb = file.size / 1024 ** 2;

      if (sizeLimit && fileMb > sizeLimit)
        throw new Error(`Storleken på filen får ej vara större än ${sizeLimit}mb`)

      const upload = await createUpload(file, allTags)
      onDone(upload)
    } catch (err) {
      setError(err)
    }
    onUploading(false)

  }, [createUpload, onUploading, onDone, setError, allTags, sizeLimit])

  useEffect(() => {
    if (!ref.current) return
    ref.current.addEventListener('change', handleChange);
    return () => ref.current?.removeEventListener('change', handleChange)
  }, [ref, handleChange])


  useEffect(() => { upload && onDone(upload) }, [upload])
  useEffect(() => {
    console.log(error)
    onError(error)
    ref.current.value = ''
  }, [error])

  return <input type="file" ref={ref} accept={accept} />
})

FileUpload.displayName = 'FileUpload'
export default FileUpload;