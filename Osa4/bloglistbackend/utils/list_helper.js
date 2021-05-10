const dummy = () => {
  // ...
  return 1
}

const totalLikes = (blogs) => {
  var sum = blogs.reduce(function(total, blog) {
    return total+blog.likes
  },0)
  return sum
}

const favoriteBlog = (blogs) => {

  const maxLikes = blogs.reduce(function(previous, current) {
    return (previous.likes > current.likes) ? previous : current
  }) //returns object

  //console.log(maxLikes)
  return maxLikes
}

const mostBlogs = (blogs) => {

  var authorTable = []

  // Create authors vs sum of blogs table
  blogs.forEach((item) => {
    if(!authorTable[item.author]) authorTable[item.author] = 1
    else authorTable[item.author]=authorTable[item.author]+1
  })
  //console.log(authorTable)

  // Loop through authors table
  const mostAuthor = Object.entries(authorTable).reduce(function(previous, current) {
    return (previous[1] > current[1]) ? previous : current
  })[0] //returns object
  //console.log(mostAuthor)
  //console.log(authorTable[mostAuthor])

  const result = {
    author: mostAuthor,
    blogs: authorTable[mostAuthor]
  }
  return result
}

const mostLikes = (blogs) => {

  var authorTable = []

  // Create authors vs sum of blogs table
  blogs.forEach((item) => {
    if(!authorTable[item.author]) authorTable[item.author] = item.likes
    else authorTable[item.author]=authorTable[item.author]+item.likes
  })
  //console.log(authorTable)

  // Loop through authors table
  const mostAuthor = Object.entries(authorTable).reduce(function(previous, current) {
    return (previous[1] > current[1]) ? previous : current
  })[0] //returns object
  //console.log(mostAuthor)
  //console.log(authorTable[mostAuthor])

  const result = {
    author: mostAuthor,
    likes: authorTable[mostAuthor]
  }
  return result
}

module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
}
