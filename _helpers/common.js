function getIconFromTagID(id) {
  let icon
  let color
  switch (id) {
    case 0:
      icon = 'mdi-heart'
      color = 'rgb(214,173,154)'
      break
    case 1:
      icon = 'mdi-snowflake'
      color = '#42A5F5'
      break
    case 2:
      icon = 'mdi-pot-steam'
      color = '#E53935'
      break
    default:
    // code block
  }
  return { tagID: id, icon, color }
}

export default {
  getItemTags(tags) {
    return tags.map((tag) => {
      return getIconFromTagID(tag)
    })
  },
}
