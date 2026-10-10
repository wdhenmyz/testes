export const head = (att) => {
  const {title, style, extra = ''} = att
  return`
  <title>${title}</title>
  <style>
      ${style}
  </style>

  ${extra}`
}