export const renameFile = (file, newName) => {
  if (!file) return null

  const { name, type } = file
  const extension = name.split('.').pop()
  const newFile = new File([file], `${newName}.${extension}`, { type })

  return newFile
}
